import React, { FC, useState } from "react";
import Image from "next/image";
import { ProductType } from "@/interface";
import Link from "next/link";
import CustomImage from "./image";

interface Props {
  product: ProductType;
}

const ProductCard: FC<{ product: ProductType }> = ({ product }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  return (
    <div className="min-h-96 flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-in-out duration-200 border">
      <Link href={`/product/${product.id}`}>
        <div className="relative min-h-80 flex-1">
          <CustomImage product={product} fill />
        </div>
        <div className="mt-4">
          <h2 className="text-gray-900 title-font text-lg font-medium">
            {product.category}
          </h2>
          <p className="mt-1">${product.price}</p>
        </div>
      </Link>
      <button
        onClick={() => setShowMoreInfo(!showMoreInfo)}
        className="mt-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        {showMoreInfo ? "Show Less" : "Learn More"}
      </button>
      {showMoreInfo && (
        <div className="mt-2">
          <p>Description: {product.description}</p>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
