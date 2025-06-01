import { useQuery, UseQueryOptions } from '@tanstack/react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
  return async (): Promise<TData> => {
    const res = await fetch(endpoint, {
      method: 'POST',
      ...requestInit,
      body: JSON.stringify({ query, variables }),
    });

    const json = await res.json();

    if (json.errors) {
      const { message } = json.errors[0];

      throw new Error(message);
    }

    return json.data;
  }
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type DataSource = {
  __typename?: 'DataSource';
  dataType: Scalars['String']['output'];
  docType: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  localPath?: Maybe<Scalars['String']['output']>;
  notes?: Maybe<Scalars['String']['output']>;
  published: Scalars['String']['output'];
  title: Scalars['String']['output'];
  url: Scalars['String']['output'];
  yearId: Scalars['ID']['output'];
};

export type Discipline = {
  __typename?: 'Discipline';
  abbreviation: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type FilterInput = {
  dataTypes?: InputMaybe<Array<Scalars['String']['input']>>;
  grades?: InputMaybe<Array<Scalars['Int']['input']>>;
  schools?: InputMaybe<Array<Scalars['Int']['input']>>;
  subgroups?: InputMaybe<Array<Scalars['Int']['input']>>;
  years?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type Grade = {
  __typename?: 'Grade';
  abbreviation: Scalars['String']['output'];
  alternativeName: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  levelId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type GradePopulation = {
  __typename?: 'GradePopulation';
  count: Scalars['Int']['output'];
  gradeId: Scalars['ID']['output'];
  id: Scalars['ID']['output'];
  pdfSourceId: Scalars['ID']['output'];
  schoolId: Scalars['ID']['output'];
  yearId: Scalars['ID']['output'];
};

export type Level = {
  __typename?: 'Level';
  abbreviation: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  gradePopulation: Array<GradePopulation>;
  grades: Array<Grade>;
  referenceData: ReferenceData;
  schools: Array<School>;
  subgroupPopulation: Array<SubgroupPopulation>;
  years: Array<Year>;
};


export type QueryGradePopulationArgs = {
  filters: FilterInput;
};


export type QuerySubgroupPopulationArgs = {
  filters: FilterInput;
};

export type ReferenceData = {
  __typename?: 'ReferenceData';
  disciplines: Array<Discipline>;
  grades: Array<Grade>;
  levels: Array<Level>;
  schools: Array<School>;
  subgroupTypes: Array<SubgroupType>;
  subgroups: Array<Subgroup>;
  subjects: Array<Subject>;
  years: Array<Year>;
};

export type School = {
  __typename?: 'School';
  abbreviation: Scalars['String']['output'];
  code: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  levelId: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  otherNames: Array<Scalars['String']['output']>;
};

export type Subgroup = {
  __typename?: 'Subgroup';
  abbreviation: Scalars['String']['output'];
  availableDataTypes: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  secondaryKey: Scalars['String']['output'];
  typeId: Scalars['ID']['output'];
};

export type SubgroupPopulation = {
  __typename?: 'SubgroupPopulation';
  count: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  pdfSourceId: Scalars['ID']['output'];
  schoolId: Scalars['ID']['output'];
  subgroupId: Scalars['ID']['output'];
  yearId: Scalars['ID']['output'];
};

export type SubgroupType = {
  __typename?: 'SubgroupType';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Subject = {
  __typename?: 'Subject';
  id: Scalars['ID']['output'];
  levelId: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type Year = {
  __typename?: 'Year';
  endYear: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  schoolYear: Scalars['String']['output'];
  startYear: Scalars['Int']['output'];
};

export type GetReferenceDataQueryVariables = Exact<{ [key: string]: never; }>;


export type GetReferenceDataQuery = { __typename?: 'Query', referenceData: { __typename?: 'ReferenceData', years: Array<{ __typename?: 'Year', id: string, schoolYear: string }>, grades: Array<{ __typename?: 'Grade', id: string, abbreviation: string }>, levels: Array<{ __typename?: 'Level', id: string, name: string }>, schools: Array<{ __typename?: 'School', id: string, name: string }>, disciplines: Array<{ __typename?: 'Discipline', id: string, name: string }>, subjects: Array<{ __typename?: 'Subject', id: string, name: string }>, subgroupTypes: Array<{ __typename?: 'SubgroupType', id: string, name: string }>, subgroups: Array<{ __typename?: 'Subgroup', id: string, name: string, abbreviation: string, typeId: string, key: string, secondaryKey: string, availableDataTypes: Array<string> }> } };



export const GetReferenceDataDocument = `
    query GetReferenceData {
  referenceData {
    years {
      id
      schoolYear
    }
    grades {
      id
      abbreviation
    }
    levels {
      id
      name
    }
    schools {
      id
      name
    }
    disciplines {
      id
      name
    }
    subjects {
      id
      name
    }
    subgroupTypes {
      id
      name
    }
    subgroups {
      id
      name
      abbreviation
      typeId
      key
      secondaryKey
      availableDataTypes
    }
  }
}
    `;

export const useGetReferenceDataQuery = <
      TData = GetReferenceDataQuery,
      TError = unknown
    >(
      dataSource: { endpoint: string, fetchParams?: RequestInit },
      variables?: GetReferenceDataQueryVariables,
      options?: UseQueryOptions<GetReferenceDataQuery, TError, TData>
    ) => {
    
    return useQuery<GetReferenceDataQuery, TError, TData>(
      variables === undefined ? ['GetReferenceData'] : ['GetReferenceData', variables],
      fetcher<GetReferenceDataQuery, GetReferenceDataQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetReferenceDataDocument, variables),
      options
    )};

useGetReferenceDataQuery.document = GetReferenceDataDocument;


useGetReferenceDataQuery.fetcher = (dataSource: { endpoint: string, fetchParams?: RequestInit }, variables?: GetReferenceDataQueryVariables) => fetcher<GetReferenceDataQuery, GetReferenceDataQueryVariables>(dataSource.endpoint, dataSource.fetchParams || {}, GetReferenceDataDocument, variables);
