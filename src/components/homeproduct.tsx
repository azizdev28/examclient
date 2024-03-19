import useProductStore from "@/store";
import React, { useEffect, useState } from "react";
import CustomImage from "./image";
import Image from "next/image";
import Link from "next/link";

const HomeProductSection = () => {
  const { products, fetchProducts } = useProductStore();
  const [showAllProducts, setShowAllProducts] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleViewCollection = () => {
    setShowAllProducts(true);
  };

  return (
    <div className="container">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-12 mx-auto">
          <h1 className="text-3xl mb-6 text-center"> New ceramics</h1>
          <div className="flex flex-wrap justify-center items-center -m-4">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`p-4 md:w-1/4 ${
                  !showAllProducts && index >= 4 ? "hidden" : ""
                }`}
              >
                <div className="h-full p-5 w-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    width={300}
                    height={300}
                    className="lg:h-48 md:h-36 w-full object-contain object-center"
                  />
                  <div className="flex items-center justify-between mt-5">
                    <div className="flex flex-col justify-between items-center">
                      <h1 className="tracking-widest text-md title-font font-medium text-gray-400 mb-1">
                        {product.title}
                      </h1>
                      <h3 className="title-font text-lg font-medium text-gray-900 mb-3">
                        {product.price}$
                      </h3>
                    </div>
                    <Link
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                      href={`/products`}
                    >
                      To Shop
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {!showAllProducts && (
          <button
            className="flex justify-center mx-auto"
            onClick={handleViewCollection}
          >
            View collection
          </button>
        )}
      </section>
    </div>
  );
};

export default HomeProductSection;
