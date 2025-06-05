import { gql } from 'graphql-tag';

export const VISUALIZATION_DATA_QUERY = gql`
    query VisualizeData($payload: QueryModifiers!) {
        visualizeData(payload: $payload) {
            population {
                subgroupData {
                    id
                    count
                    subgroupId
                    schoolId
                    yearId
                    pdfSourceId
                }
                gradeData {
                    id
                    count
                    gradeId
                    schoolId
                    yearId
                    pdfSourceId
                }
            }
        }
    }
`;

// discipline {
//     subgroupData {
//         id
//     }
// }
// achievement {
//     subgroupData {
//         id
//     }
// }
