import json
import os
import sys
import tempfile

import pandas as pd
import pdfplumber
import requests
import tabula

path_rpc = "https://core-docs.s3.us-east-1.amazonaws.com/documents/asset/uploaded_file/5035/DPS/5534360/Quarterly_SUB03M_-_Restorative_Practices_FINAL_2023-24.pdf"
path_ach = "https://core-docs.s3.us-east-1.amazonaws.com/documents/asset/uploaded_file/5035/DPS/5142446/Academic_Achievement.pdf"

# This one worked well for the RPC PDf
# def extract(pdf_path=path_rpc):
#     # Extract tables from all pages into a list of DataFrames
#     tables = tabula.read_pdf(pdf_path, pages="all", multiple_tables=True, lattice=False, stream=True)
#     result = [df.to_dict(orient="records") for df in tables]
#     print(json.dumps(result, indent=4))

# if __name__ == "__main__":
#     if len(sys.argv) < 2:
#         print("Usage: extract_tables.py <pdf_path>")
#         sys.exit(1)

#     extract(sys.argv[1])


# import json
# import sys
# import os
# import tempfile

# import pandas as pd
# import pdfplumber
# import requests


# Use this for the achievement pdf
def extract_with_plumber(pdf_path):
    # Check if URL or local file
    if pdf_path.startswith("http://") or pdf_path.startswith("https://"):
        response = requests.get(pdf_path)
        response.raise_for_status()  # Raise an error if the download fails

        with tempfile.NamedTemporaryFile(delete=False, suffix=".pdf") as tmp_file:
            tmp_file.write(response.content)
            tmp_file_path = tmp_file.name
    else:
        tmp_file_path = pdf_path

    results = []

    with pdfplumber.open(tmp_file_path) as pdf:
        for i, page in enumerate(pdf.pages):
            table = page.extract_table()
            if table:
                df = pd.DataFrame(table[1:], columns=table[0])
                results.append(df.to_dict(orient="records"))

    print(json.dumps(results, indent=2))

    # Clean up temp file if it was a download
    if pdf_path.startswith("http://") or pdf_path.startswith("https://"):
        os.remove(tmp_file_path)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: extract_tables.py <pdf_path>")
        sys.exit(1)

    extract_with_plumber(sys.argv[1])