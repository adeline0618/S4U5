let { graphql } = require("@octokit/graphql");

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token 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`,
  },
});

const gql = `query getDiscussions($num:Int) {
    repository(owner: "codestates-seb", name: "agora-states-fe") {
      discussions(first: $num) {
        nodes {
          id
          title
          url
          bodyHTML
          author {
            avatarUrl
          }
          createdAt
          updatedAt
          answer {
            id
            createdAt
            url
            author {
              avatarUrl
            }
            bodyHTML
          }
        }
      }
    }
  
}
`;
export const getData = async (num = 30) => {
  let data = await graphqlWithAuth({ query: gql, num }) //
    .then(res => res.repository.discussions.nodes);
  return data;
};
