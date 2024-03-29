"use client";
import CustomImage from "@/components/image";
import { ProductType } from "@/interface";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const ShopPage = () => {
  const [total, setTotal] = useState<number>(0);
  const [products, setProducts] = useState<ProductType[]>(
    JSON.parse(localStorage.getItem("carts") as string) || []
  );
  const removeProducts = (id: number) => {
    const updatedCart = products.filter((product) => product.id !== id);
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
  };

  const handleIncrement = (id: number) => {
    const updatedCart = products.map((product) => {
      if (product.id == id) {
        return {
          ...product,
          ququantity: product.ququantity + 1,
        };
      }
      return product;
    });
    localStorage.setItem("carts", JSON.stringify(updatedCart));
    setProducts(updatedCart);
  };
  const handleDecroment = (id: number) => {
    const existProduct = products.find((product) => product.id == id);
    if (existProduct?.ququantity == 1) {
      removeProducts(existProduct.id);
    } else {
      const updatedCart = products.map((product) => {
        if (product.id == id) {
          return {
            ...product,
            ququantity: product.ququantity - 1,
          };
        }
        return product;
      });
      localStorage.setItem("carts", JSON.stringify(updatedCart));
      setProducts(updatedCart);
    }
  };
  // const [products, setProducts] = useState<ProductType[]>([]);
  // const removeProduct = (id: number) => {
  //   const updatedCart = products.filter((product) => product.id !== id);
  //   localStorage.setItem("carts", JSON.stringify(updatedCart));
  // };
  // useEffect(() => {
  //   const storedProducts = localStorage.getItem("carts");
  //   if (storedProducts) {
  //     setProducts(JSON.parse(storedProducts));
  //   }
  // }, []);

  // console.log(products);

  useEffect(() => {
    const total = products.reduce((acc, item) => {
      return acc + item.price * item.ququantity;
    }, 0);
    setTotal(total);
  }, [products]);
  return (
    <>
      {products.length ? (
        <div className="min-h-screen my-36 ">
          <h1 className="mb-10 text-center text-2xl font-bold">Cart Items</h1>
          <div className="mx-auto max-w-5xl justify-center px-6 md:flex md:space-x-6 xl:px-0">
            <div className="rounded-lg md:w-2/3">
              {products.map((product, index) => (
                <div
                  key={index}
                  className="justify-between mb-6 rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start"
                >
                  <div className="relative w-60 h-auto">
                    <CustomImage product={product} fill />
                  </div>
                  <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
                    <div className="mt-5 sm:mt-0">
                      <h2 className="text-lg font-bold text-gray-900">
                        {product.title}
                      </h2>
                      <p className="mt-1 text-xs text-gray-700">
                        {product.description}
                      </p>
                    </div>
                    <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                      <div className="flex items-center border-gray-100">
                        <span
                          className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          onClick={() => handleDecroment(product.id)}
                        >
                          -
                        </span>
                        <input
                          className="h-8 w-8 border bg-white text-center text-xs outline-none"
                          type="number"
                          min="1"
                          value={product.ququantity}
                        />
                        <span
                          className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                          onClick={() => handleIncrement(product.id)}
                        >
                          {" "}
                          +{" "}
                        </span>
                      </div>
                      <div className="flex items-center space-x-4">
                        <p className="text-sm">
                          {(product.price * product.ququantity).toLocaleString(
                            "en-US",
                            {
                              style: "currency",
                              currency: "usd",
                            }
                          )}
                        </p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke-width="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                          onClick={() => removeProducts(product.id)}
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">
                  {total.toLocaleString("en-US", {
                    style: "currency",
                    currency: "usd",
                  })}
                </p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Shipping</p>
                <p className="text-gray-700">
                  {" "}
                  {(10).toLocaleString("en-US", {
                    style: "currency",
                    currency: "usd",
                  })}
                </p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">
                    {(total + 10).toLocaleString("en-US", {
                      style: "currency",
                      currency: "usd",
                    })}
                  </p>
                  <p className="text-sm text-gray-700">including VAT</p>
                </div>
              </div>
              <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">
                Check out
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div>
          Yangi mahsulotlarni sizni kutmoqda
          <Link href={`/products`}>Shopping</Link>
        </div>
      )}
    </>
  );
};

export default ShopPage;
