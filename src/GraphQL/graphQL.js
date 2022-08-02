let { graphql } = require("@octokit/graphql");

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token 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`,
  },
});

export const getData = async () => {
  let data = await graphqlWithAuth(
    `
    {
      repository(owner: "codestates-seb", name: "agora-states-fe") {
        discussions(first: 10, orderBy: { field: CREATED_AT, direction: ASC }) {
          totalCount
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
  `
  );

  return data;
};
