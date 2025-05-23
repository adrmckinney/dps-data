// This is the structure returned form reading the pdf table
export type RawPopulationMeta = {
    title: string;
    date: string;
};

export type RawPopulationRow = {
    School: string;
    Code: string;
    PK?: string;
    KI?: string;
    '01'?: string;
    '02'?: string;
    '03'?: string;
    '04'?: string;
    '05'?: string;
    '06'?: string;
    '07'?: string;
    '08'?: string;
    '09'?: string;
    '10'?: string;
    '11'?: string;
    '12'?: string;
    XG?: string;
    StTtl?: string;
    Total?: string;
};

export type RawPopulationData = {
    metadata: RawPopulationMeta;
    data: RawPopulationRow[];
};

// Record for the db table
export type PopulationRecord = {
    schoolId: string;
    gradeId: string;
    yearId: number;
    count: number;
    pdfSourceUrl: string;
};

export type PopulationEntry = {
    metadata: {
        title: string;
        date: string;
    };
    data: Record<string, string>[];
};

export type ExtractorType = 'school_population'; // extend with more if needed
