module.exports = {
  client: {
    excludes: ["**/__tests__/**/*", "**/@sdk/**/*"],
    service: {
      name: "saleor",
      url: "https://moshions-api.herokuapp.com/graphql/",
    },
  },
};
