import React from "react";
import { useStaticQuery, graphql } from "gatsby";

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    allShopifyProduct {
      edges {
        node {
          id
          publishedAt(formatString: "YYYY")
          title
          description
          descriptionHtml
          variants {
            id
            sku
            title
            price
          }
        }
      }
    }
  }
`;

export const ProductsListing = () => {
  const data = useStaticQuery(PRODUCTS_LISTING_QUERY);
  console.log(data);
  return <div></div>;
};
