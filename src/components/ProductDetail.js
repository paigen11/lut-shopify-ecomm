import React, { useState, useContext } from "react";
import Img from "gatsby-image";
import { StoreContext } from "../context/StoreContext";

const ProductDetail = ({ product }) => {
  const [selectedVariant, setSelectedVariant] = useState(product.variants[0]);
  const { client } = useContext(StoreContext);

  const addToCart = async variantId => {
    const newCheckout = await client.checkout.create();
    const lineItems = [
      {
        variantId: variantId.replace("Shopify__ProductVariant__", ""),
        quantity: 1,
      },
    ];
    const addItems = await client.checkout.addLineItems(
      newCheckout.id,
      lineItems,
    );
    window.open(addItems.webUrl, "_blank");
  };

  return (
    <div className="md:flex">
      <div>
        <Img fixed={product.images[0].localFile.childImageSharp.fixed} />
      </div>
      <div className="md:ml-6">
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <p>${selectedVariant.price}</p>
        <select
          onChange={e => {
            const selected = product.variants.filter(
              variant => variant.sku === e.target.value,
            );
            setSelectedVariant(selected[0]);
          }}
          value={selectedVariant.sku}
        >
          {product.variants.map(variant => (
            <option value={variant.sku} key={variant.id}>
              {variant.title}
            </option>
          ))}
        </select>
        <br />
        <button
          className="bg-blue-500 text-white font-bold rounded px-4 py-2 border-b-4 border-blue-700"
          onClick={() => addToCart(selectedVariant.id)}
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
