import { createContext } from "react";
import Client from "shopify-buy";

export const client = Client.buildClient({
  domain: "lut-test-store.myshopify.com",
  storefrontAccessToken: `${process.env.GATSBY_SHOPIFY_STOREFRONT_TOKEN}`,
});

export const StoreContext = createContext({
  client,
});
