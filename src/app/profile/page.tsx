"use client";
import React, { useEffect } from "react";
import useProductStore from "@/store/index";

const ProductList = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []); // Bu useEffect malumotlar yuklandiqda faoliyatga o'tadi

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
