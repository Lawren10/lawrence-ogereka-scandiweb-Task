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

export const GetCategory = gql`
  {
    categories {
      name
    }
  }
`;

export const QuerySigleProduct = gql`
  query getSingleProduct($id: String!) {
    product(id: $id) {
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
`;

export const CartProduct = gql`
  query getSingleProduct($id: String!) {
    product(id: $id) {
      id
      name
      gallery

      attributes {
        id
        name
        type
        items {
          displayValue
        }
      }

      brand
    }
  }
`;

// export const GetPrice = gql`
//   {
//     categories {
//       products {
//         id
//         prices {
//           currency {
//             label
//             symbol
//           }
//           amount
//         }
//       }
//     }
//   }
// `;
