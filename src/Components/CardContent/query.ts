import gql from 'graphql-tag';
export const  MOST_TOP_TECH = gql`
query MostTopTech($queryString: String!){
  search(query: $queryString,, type: REPOSITORY, first: 50) {
    repositoryCount
    edges {
      node {
        ... on Repository {
          nameWithOwner
          forkCount
          homepageUrl
          primaryLanguage {name}
          languages(first: 3) { nodes {name} }
          stargazers {totalCount}
          issues {totalCount}
          createdAt
          pushedAt
          updatedAt
          openIssues: issues(states:OPEN) {
            totalCount
          }
           commitsCount: object(expression: "master") {
             ... on Commit {
                history {
                 totalCount
               }
             }
           }
        }
      }
    }
  } 
}`;