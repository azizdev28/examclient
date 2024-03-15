import Image from "next/image";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Avion | Shop",
  description: "Siz izlagan uy jihozlari !!!",
};
import React from "react";
import img from "@/image/homeimg/heroBg.png";
const ShopPage = () => {
  return (
    <div className="container">
      <section className="w-[1024px] flex flex-col mx-auto">
        <h2>Your shopping cart</h2>
        <div className="flex justify-between my-6 border-b-2 py-2 border-black">
          <h2>Product</h2>
          <p>Quantity</p>
          <h3>Total</h3>
        </div>

        <div className="flex flex-col gap-4 border-b-2 border-black my-6">
          <div className="flex items-center justify-between">
            <div className="flex  min-h-[135px] items-center max-w-[350px] gap-5">
              <Image src={img} alt="dkdk" className="w-[109px] " />
              <div>
                <h2>Graystone vase</h2>
                <p>A timeless ceramic vase with a tri color grey glaze.</p>
                <span>85$</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6">
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
            <div>85$</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex  min-h-[135px] items-center max-w-[350px] gap-5">
              <Image src={img} alt="dkdk" className="w-[109px] " />
              <div>
                <h2>Graystone vase</h2>
                <p>A timeless ceramic vase with a tri color grey glaze.</p>
                <span>85$</span>
              </div>
            </div>
            <div className="flex items-center justify-between gap-6">
              <button>-</button>
              <span>0</span>
              <button>+</button>
            </div>
            <div>85$</div>
          </div>
        </div>
        <div className="my-6 flex flex-col gap-5 items-center justify-center">
          <h1 className="text-2xl text-center flex items-center justify-center gap-6">
            {" "}
            Subtotal:<span className="text-4xl text-blue-200">210$</span>
          </h1>

          <p>Taxes and shipping are calculated at checkout</p>

          <button className=" w-full text-white bg-[#2A254B]  py-4 px-6 hover:bg-[#46399b] rounded-md">
            Go to checkout
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShopPage;
