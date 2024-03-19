"use client";
import CustomImage from "@/components/image";
import { ProductType } from "@/interface";
import { Dialog } from "@headlessui/react";

import { useParams, useRouter } from "next/navigation";

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductDetailesPage = () => {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState<ProductType>();
  const [open, setOpen] = useState(true);
  const { id } = useParams();
  const router = useRouter();

  const handleClick = () => {
    const products: ProductType[] =
      JSON.parse(localStorage.getItem("carts") as string) || [];
    const isExistProduct = products.find((c) => c.id === product?.id);
    if (isExistProduct) {
      const upData = products.map((c) => {
        if (c.id === product?.id) {
          return {
            ...c,
            ququantity: c.ququantity + 1,
          };
        }
        return c;
      });
      localStorage.setItem("carts", JSON.stringify(upData));
    } else {
      const data = [...products, { ...product, ququantity: 1 }];
      localStorage.setItem("carts", JSON.stringify(data));
    }
    toast.success("Mahsulot savatga qo'shildi !!!");
  };
  const handleClose = () => {
    setOpen(false);
    router.back();
  };
  useEffect(() => {
    async function getData() {
      setLoading(true);
      const res = await fetch(
        `https://65f3d0ff105614e654a13150.mockapi.io/products/${id}`
      );
      const product = await res.json();
      setProduct(product);
      setLoading(false);
    }
    getData();
  }, [id]);
  return (
    <Dialog open={open} onClose={handleClose} className=" relative z-50  ">
      <div aria-hidden="true" className="inset-0 bg-black/30 fixed">
        <div className="fixed  inset-0 overflow-y-auto">
          <div className=" flex min-h-full items-center justify-center p-4">
            <Dialog.Panel
              className={" mx-auto  max-w-3xl  rounded bg-white p-10"}
            >
              {" "}
              {loading ? (
                <div className=" h-8  w-8  rounded-full  border-2 border-dotted border-blue-600" />
              ) : (
                <div className="flex gap-6 items-center h-96">
                  {product?.image && (
                    <div className="relative w-72 h-full hidden md:inline">
                      <CustomImage product={product} fill />
                    </div>
                  )}
                  <div className="flex-1 flex-col">
                    <h1 className="mb-4  text-center text-2xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-2xl dark:text-white">
                      Uyingizni biz bilan jihozlang va shinam holatga
                      keltring!!!
                    </h1>
                    <div className="flex-1">
                      <div className="flex justify-between">
                        <h4 className="text-yellow-300 bg-gray-900 px-3 py-0.5 rounded-md text-2xl font-bold">
                          {product?.title}
                        </h4>
                        <p className="text-yellow-300 bg-gray-900 px-3 py-1 rounded-md text-3xl font-bold">
                          ${product?.price}
                        </p>
                      </div>
                      <p className="line-clamp-5 text-blue-600 text-1xl font-bold text-center my-6 ">
                        {product?.description}
                      </p>
                    </div>
                    <div className="space-y-3 text-sm">
                      <button
                        className="button py-3 rounded-lg w-full text-white bg-blue-600  border-transparent hover:border-blue-600 hover:bg-transparent duration-700 hover:text-black"
                        onClick={handleClick}
                      >
                        Add to cart
                      </button>
                      <button
                        onClick={() => window.location.reload()}
                        className="button py-3  text-white rounded-lg w-full bg-blue-600 border-transparent hover:border-blue-600 hover:bg-transparent duration-700 hover:text-black"
                      >
                        View full details
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default ProductDetailesPage;
