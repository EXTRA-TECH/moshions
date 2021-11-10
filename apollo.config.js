module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "saleor",
      url: "https://moshions-stagging-api.herokuapp.com/graphql/",
    },
  },
};
