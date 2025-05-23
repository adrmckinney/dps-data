import json
import os
import tempfile
from collections import defaultdict

import pandas as pd  # type: ignore
import pdfplumber  # type: ignore
import requests  # type: ignore

# def extract_metadata(lines):
#     """
#     Extracts metadata from lines of page text. Handles both:
#     - One-line metadata like: "Membership by School, Ethnicity, Gender 2020 - 2021 Month One"
#     - Two-line metadata like:
#         Line 1: "Membership by School, Ethnicity, Gender"
#         Line 2: "2020 - 2021 Month One"
#     """
#     title_keywords = [
#         "Membership by Grade",
#         "Membership by School, Ethnicity, Gender"
#     ]

#     for i in range(len(lines)):
#         line = lines[i].strip()
#         for keyword in title_keywords:
#             if keyword in line:
#                 # Case: one-line title with year
#                 if any(y in line for y in ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"]):
#                     return {"title": line, "date": ""}
#                 # Case: next line contains the date
#                 elif i + 1 < len(lines):
#                     return {
#                         "title": line,
#                         "date": lines[i + 1].strip()
#                     }
#                 else:
#                     return {"title": line, "date": ""}
#     return {"title": "", "date": ""}
def extract_metadata(lines):
    """
    Extracts metadata from lines of page text. Handles:
    - One-line metadata like: "Membership by School, Ethnicity, Gender 2020 - 2021 Month One"
      (splits into title and date)
    - Two-line metadata:
        Line 1: "Membership by School, Ethnicity, Gender"
        Line 2: "2020 - 2021 Month One"
    """
    title_keywords = [
        "Membership by Grade",
        "Membership by School, Ethnicity, Gender"
    ]

    for i in range(len(lines)):
        line = lines[i].strip()
        for keyword in title_keywords:
            if keyword in line:
                # Check for year in same line (e.g., 2020 - 2021)
                year_index = next(
                    (line.find(y) for y in [
                        "2015", "2016", "2017", "2018", "2019",
                        "2020", "2021", "2022", "2023", "2024", "2025"
                    ] if y in line), -1
                )
                if year_index != -1:
                    return {
                        "title": line[:year_index].strip(),
                        "date": line[year_index:].strip()
                    }
                # Else assume date is next line
                elif i + 1 < len(lines):
                    return {
                        "title": line,
                        "date": lines[i + 1].strip()
                    }
                else:
                    return {"title": line, "date": ""}
    return {"title": "", "date": ""}


def parse_complex_table(table):
    """Parses tables with two header rows: first row = category, second = sub-category."""
    header_row_1 = table[0]
    header_row_2 = table[1]

    combined_headers = []
    current_group = ""
    for h1, h2 in zip(header_row_1, header_row_2):
        if h1:
            current_group = h1.strip()
        combined = f"{current_group.strip()} - {h2.strip()}" if h2 else current_group
        combined_headers.append(combined)

    data_rows = table[2:]
    df = pd.DataFrame(data_rows, columns=combined_headers)
    return df


def extract_school_population(pdf_path):
    # Handle local vs URL
    if pdf_path.startswith("http://") or pdf_path.startswith("https://"):
        response = requests.get(pdf_path)
        response.raise_for_status()
        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
            tmp_file.write(response.content)
            tmp_file_path = tmp_file.name
    else:
        tmp_file_path = pdf_path

    raw_results = []

    with pdfplumber.open(tmp_file_path) as pdf:
        for page in pdf.pages:
            page_text = page.extract_text()
            lines = [line.strip() for line in page_text.split('\n') if line.strip()]
            metadata = extract_metadata(lines)

            table = page.extract_table()
            if not table:
                continue

            try:
                is_complex = (
                    len(table) > 1
                    and any(val in table[1] for val in ["M", "F", "Total", "%"])
                )
                df = (
                    parse_complex_table(table) if is_complex
                    else pd.DataFrame(table[1:], columns=table[0])
                )
            except Exception as e:
                print(f"Error parsing table on page {page.page_number}: {e}")
                continue

            raw_results.append({
                "metadata": metadata,
                "data": df.to_dict(orient="records")
            })

    # Group results by metadata
    grouped_results = defaultdict(list)
    for result in raw_results:
        key = json.dumps(result["metadata"], sort_keys=True)
        grouped_results[key].extend(result["data"])

    final_results = [
        {"metadata": json.loads(k), "data": v}
        for k, v in grouped_results.items()
    ]

    print(json.dumps(final_results, indent=2))

    if pdf_path.startswith("http://") or pdf_path.startswith("https://"):
        os.remove(tmp_file_path)


# Example usage:
# extract_school_population("https://example.com/path/to/your.pdf")
# extract_school_population("local/path/to/your.pdf")

# Example usage:
# extract_school_population("https://example.com/path/to/your.pdf")
# extract_school_population("local/path/to/your.pdf")

# Example usage
# extract_school_population("https://example.com/path/to/your.pdf")
# extract_school_population("local/path/to/your.pdf")

# def extract_school_population(pdf_path):
#     import re

#     def extract_metadata(page_text):
#         lines = page_text.split('\n')
#         for i, line in enumerate(lines):
#             if "Membership by Grade" in line:
#                 date_line = lines[i + 1] if i + 1 < len(lines) else ""
#                 return {
#                     "title": line.strip(),
#                     "date": date_line.strip()
#                 }
#         return {"title": "", "date": ""}

#     # Handle local vs URL
#     if pdf_path.startswith("http://") or pdf_path.startswith("https://"):
#         response = requests.get(pdf_path)
#         response.raise_for_status()

#         with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
#             tmp_file.write(response.content)
#             tmp_file_path = tmp_file.name
#     else:
#         tmp_file_path = pdf_path

#     all_results = []

#     with pdfplumber.open(tmp_file_path) as pdf:
#         for page in pdf.pages:
#             page_text = page.extract_text()
#             metadata = extract_metadata(page_text)

#             table = page.extract_table()
#             if table:
#                 df = pd.DataFrame(table[1:], columns=table[0])
#                 result = {
#                     "metadata": metadata,
#                     "data": df.to_dict(orient="records")
#                 }
#                 all_results.append(result)

#     print(json.dumps(all_results, indent=2))

#     if pdf_path.startswith("http://") or pdf_path.startswith("https://"):
#         os.remove(tmp_file_path)