import gql from 'graphql-tag';
export const  LANGUAGE_TECH = gql`
query SearchLanguage($queryString: String!){
  search(query: $queryString,, type: REPOSITORY, first: 100) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          nameWithOwner
        }
      }
    }
  } 
}`;