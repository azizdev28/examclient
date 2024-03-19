"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import Delivery from "@/image/homeimg/Delivery.png";
import Checkmark from "@/image/homeimg/Checkmark.png";
import Purchase from "@/image/homeimg/Purchase.png";
import Sprout from "@/image/homeimg/Sprout.png";
import HomeProductSection from "@/components/homeproduct";
import ImgWrapper from "@/image/homeimg/HeaderWrapper.png";
import HeroBg from "@/image/homeimg/heroBg.png";
import useProductStore from "@/store";

const Home = () => {
  const { products, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <main>
      {/* Hero section started */}
      <div>
        <section className="text-gray-600 body-font ">
          <div className="container flex-wrap mx-auto  bg-[#2A254B] flex px-12 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow p-5 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-200">
                The furniture brand for the future, with timeless designs
              </h1>
              <div className="flex justify-center">
                <button className=" mb-24  mt-10 inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">
                  View collection
                </button>
              </div>
              <p className="mb-8 leading-relaxed">
                A new era in eco friendly furniture with Avelon, the French
                luxury retail brand with nice fonts, tasteful colors and a
                beautiful way to display things digitally using modern web
                technologies.
              </p>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                src={ImgWrapper}
                alt="ImgWrapper"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-10">
              <h2 className="text-[24px] text-[#2A254B] tracking-widest font-medium title-font mb-1">
                What makes our brand different{" "}
              </h2>
            </div>
            <div className="flex items-center  flex-wrap ">
              <div className=" p-4 md:w-1/4  ">
                <div className="flex gap-3 rounded-lg h-full p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                      <Image
                        src={Delivery}
                        alt="Delivery"
                        className="rounded-full "
                      />
                    </div>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Next day as standard
                  </h2>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Order before 3pm and get your order the next day as
                      standard
                    </p>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col  p-4 md:w-1/4 ">
                <div className="flex gap-3 rounded-lg h-full p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                      <Image
                        src={Checkmark}
                        alt="Checkmark"
                        className="rounded-full "
                      />
                    </div>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Made by true artisans
                  </h2>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      Handmade crafted goods made with real passion and
                      craftmanship
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/4">
                <div className="flex gap-3 rounded-lg h-full p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                      <Image
                        src={Sprout}
                        alt="Sprout"
                        className="rounded-full "
                      />
                    </div>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Unbeatable prices
                  </h2>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      For our materials and quality you won’t find better prices
                      anywhere
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/4">
                <div className="flex gap-3 rounded-lg h-full p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-6 h-6 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0">
                      <Image
                        src={Purchase}
                        alt="Purchase"
                        className="rounded-full "
                      />
                    </div>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    Recycled packaging{" "}
                  </h2>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      We use 100% recycled packaging to ensure our footprint is
                      manageable
                    </p>
                  </div>
                </div>
              </div>
              {/* first */}
            </div>
          </div>
        </section>
        <section>
          <HomeProductSection />
        </section>

        <section className="text-gray-600 body-font my-12 bg-[#f9f9f9] p-24">
          <div className="container px-5 py-24 mx-auto bg-white">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Join the club and get the benefits
              </h1>
              <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Sign up for our newsletter and receive exclusive <br /> offers
                on new ranges, sales, pop up stores and more
              </p>
            </div>
            <div className="flex  lg:w-1/3 w-full sm:flex-row  md:w-2/3  flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-center">
              <div className="relative flex-grow w-full">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
              <button className="text-white ml-[16px] bg-[#2A254B] border-0 py-2 px-6 focus:outline-none hover:bg-[#504691] rounded">
                SignUp
              </button>
            </div>
          </div>
        </section>
        <section className="text-gray-600 body-font ">
          <div className="container mx-auto flex px-12  md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                From a studio in London to a global brand with over 400 outlets
              </h1>
              <p className="mb-8 leading-relaxed">
                When we started Avion, the idea was simple. Make high quality
                furniture affordable and available for the mass market.
                Handmade, and lovingly crafted furniture and homeware is what we
                live, breathe and design so our Chelsea boutique become the
                hotbed for the London interior design community.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-32">
                  Get in touch
                </button>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <Image
                className="object-cover object-center  rounded"
                alt="hero"
                src={HeroBg}
              />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Home;
