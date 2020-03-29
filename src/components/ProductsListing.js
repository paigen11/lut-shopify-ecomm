import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Product } from "./Product";

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
  const { allShopifyProduct } = useStaticQuery(PRODUCTS_LISTING_QUERY);
  return (
    <div>
      {allShopifyProduct.edges.map(edge => (
        <Product product={edge.node} key={edge.node.id} />
      ))}
    </div>
  );
};
