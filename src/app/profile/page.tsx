"use client";
import React, { useEffect } from "react";
import useProductStore from "@/store/index";
import Image from "next/image";

const ProductList = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <Image src={product.image} width={50} height={50} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
