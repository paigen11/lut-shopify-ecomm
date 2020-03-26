import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import { ProductsListing } from "../components/ProductsListing";

const IndexPage = () => (
  <Layout>
    <SEO title="home" />
    <ProductsListing />
  </Layout>
);

export default IndexPage;
