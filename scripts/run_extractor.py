import sys

from extractors.school_population import extract_school_population

EXTRACTORS = {
    "school_population": extract_school_population,
    # future extractors can go here
}

if __name__ == "__main__":
    if len(sys.argv) != 3:
        print("Usage: run_extractor.py <extractor_type> <pdf_url_or_path>")
        sys.exit(1)

    extractor_type = sys.argv[1]
    pdf_path = sys.argv[2]

    if extractor_type not in EXTRACTORS:
        print(f"Unknown extractor type: {extractor_type}")
        sys.exit(1)

    EXTRACTORS[extractor_type](pdf_path)