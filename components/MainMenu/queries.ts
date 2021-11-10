import gql from "graphql-tag";
// import { TypedQuery } from "../../core/queries";
// import { MainMenu } from "./gqlTypes/MainMenu";

export const MAIN_MENU = gql`
  fragment MainMenuSubItem on MenuItem {
    id
    name
    category {
      id
      name
    }
    url
    collection {
      id
      name
    }
    page {
      slug
    }
    parent {
      id
    }
  }

  query MainMenu {
    shop {
      navigation {
        main {
          id
          items {
            ...MainMenuSubItem
            children {
              ...MainMenuSubItem
              children {
                ...MainMenuSubItem
              }
            }
          }
        }
      }
    }
  }
`;

export const CATEGORIES = gql`
  query {
    categories(first: 3) {
      edges {
        node {
          id
          name
          slug
        }
      }
    }
  }
`

export const PRODUCT_VARIANT = gql`
  query(
    $id: ID!
  ) {
    productVariant(id: $id, channel: "channel-rwf") {
      id
      product {
        id
        images {
          url
          alt
        }
      }
    }
  }
`

// export const TypedMainMenuQuery = TypedQuery<MainMenu, {}>(mainMenu);
