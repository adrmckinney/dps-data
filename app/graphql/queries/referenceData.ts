import { gql } from 'graphql-tag';

export const REFERENCE_DATA_QUERY = gql`
    query GetReferenceData {
        referenceData {
            years {
                id
                startYear
                endYear
                schoolYear
            }
            grades {
                id
                name
                alternativeName
                abbreviation
                levelId
            }
            levels {
                id
                name
                abbreviation
            }
            schools {
                id
                name
                code
                abbreviation
                otherNames
                levelId
            }
            disciplines {
                id
                name
                abbreviation
            }
            subjects {
                id
                name
                levelId
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
                availableForDataTypes
            }
        }
    }
`;
