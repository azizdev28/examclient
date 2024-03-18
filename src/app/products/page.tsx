"use client";
import Image from "next/image";
import productHeo from "@/image/homeimg/productHeo.png";
import ProductCard from "@/components/ProductCard";
import useProductStore from "@/store";
import { useEffect } from "react";
const ProductPage = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-[209px] bg-repeat bg-contain ">
        <Image src={productHeo} alt="productHeo" className="w-full h-full " />
      </div>
      <section className="flex items-start">
        <div className="w-[385px] p-12">
          <div className="flex flex-col gap-6">
            <h2>Product type</h2>
            <p>
              {" "}
              <input type="checkbox" /> <span>Furniture</span>
            </p>
            <p>
              {" "}
              <input type="checkbox" /> <span>Homeware</span>
            </p>
            <p>
              {" "}
              <input type="checkbox" /> <span>Sofas</span>
            </p>
            <p>
              {" "}
              <input type="checkbox" /> <span>Homeware</span>
            </p>
            <p>
              {" "}
              <input type="checkbox" /> <span>Light fittings</span>
            </p>
            <p>
              {" "}
              <input type="checkbox" /> <span>Accessories</span>
            </p>
          </div>
          <div className="flex flex-col gap-6">
            <h2>Price</h2>
            <p>
              {" "}
              <input type="checkbox" /> <span>0-100</span>
            </p>
            <p>
              {" "}
              <input type="checkbox" /> <span>101-250</span>
            </p>{" "}
            <p>
              <input type="checkbox" /> <span>250+</span>
            </p>
          </div>
        </div>
        <div className="grid w-full grid-cols-1 my-24 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
