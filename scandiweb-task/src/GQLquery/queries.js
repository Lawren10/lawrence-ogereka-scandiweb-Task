import { gql } from "graphql-request";

export const QueryCategory = gql`
  query getCategory($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        name
        gallery
        inStock
        description
        category
        attributes {
          id
          name
          type
          items {
            displayValue
          }
        }
        prices {
          currency {
            label
            symbol
          }
          amount
        }
        brand
      }
    }
  }
`;

export const QueryCurrencies = gql`
  {
    currencies {
      label
      symbol
    }
  }
`;
