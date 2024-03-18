import React, { FC } from "react";
import Image from "next/image";
import { ProductType } from "@/interface";
import Link from "next/link";
import CustomImage from "./image";

interface Props {
  product: ProductType;
}

const ProductCard: FC<{ product: ProductType }> = ({ product }) => {
  return (
    <Link
      href={`/product/${product.id}`}
      className="min-h-96 flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-in-out duration-200 border"
    >
      <div className="relative min-h-80 flex-1  ">
        <CustomImage product={product} fill />
      </div>
      <div className="mt-4">
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product.category}
        </h2>
        <p className="mt-1">${product.price}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
