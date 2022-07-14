import { gql } from '@apollo/client';

export const GET_RELATED_TOPICS = gql`
  query GetRelatedTopics($name: String!) {
    topic(name: $name) {
      id
      name
      relatedTopics {
        id
        name
        stargazerCount
      }
    }
  }
`;
