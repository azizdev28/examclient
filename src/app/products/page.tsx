"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import useProductStore from "@/store";
import productHeo from "@/image/homeimg/productHeo.png";

const ProductPage = () => {
  const { products, fetchProducts } = useProductStore();
  const [categoryFilters, setCategoryFilters] = useState<string[]>([]);
  const [priceFilters, setPriceFilters] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const filterByCategory = (category: string) => {
    if (categoryFilters.includes(category)) {
      setCategoryFilters(categoryFilters.filter((cat) => cat !== category));
    } else {
      setCategoryFilters([...categoryFilters, category]);
    }
  };

  const filterByPrice = (price: string) => {
    if (priceFilters.includes(price)) {
      setPriceFilters(priceFilters.filter((p) => p !== price));
    } else {
      setPriceFilters([...priceFilters, price]);
    }
  };

  const getProductPriceRange = (price: number): string => {
    if (price <= 100) {
      return "0-100";
    } else if (price <= 250) {
      return "101-250";
    } else {
      return "250+";
    }
  };

  const filteredProducts = products.filter((product) => {
    if (
      categoryFilters.length > 0 &&
      !categoryFilters.includes(product.category)
    ) {
      return false;
    }

    if (priceFilters.length > 0) {
      const productPrice = getProductPriceRange(product.price);
      if (!priceFilters.includes(productPrice)) {
        return false;
      }
    }

    if (searchQuery.trim() !== "") {
      const searchRegex = new RegExp(searchQuery.trim(), "i");
      if (!searchRegex.test(product.title)) {
        return false;
      }
    }

    return true;
  });

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-[209px] bg-repeat bg-contain">
        <Image src={productHeo} alt="productHeo" className="w-full h-full" />
      </div>
      <section className="flex flex-col items-center justify-center md:flex-row md:items-start">
        <div className="w-[385px] p-12">
          <div className="flex flex-col gap-6">
            <h2 className="text-bold text-4xl">Product type</h2>
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
            </div>
            <p>
              <input
                type="checkbox"
                onChange={() => filterByCategory("Furniture")}
              />{" "}
              <span>Furniture</span>
            </p>
            <p>
              <input
                type="checkbox"
                onChange={() => filterByCategory("Homeware")}
              />{" "}
              <span>Homeware</span>
            </p>
            <p>
              <input
                type="checkbox"
                onChange={() => filterByCategory("Sofas")}
              />{" "}
              <span>Sofas</span>
            </p>
            <p>
              <input
                type="checkbox"
                onChange={() => filterByCategory("Light fittings")}
              />{" "}
              <span>Light fittings</span>
            </p>
            <p>
              <input
                type="checkbox"
                onChange={() => filterByCategory("Accessories")}
              />{" "}
              <span>Accessories</span>
            </p>
          </div>
          <div className="flex flex-col  my-3 gap-6">
            <h2 className="text-2xl font-black text-yellow-600">Price</h2>
            <p>
              <input type="checkbox" onChange={() => filterByPrice("0-100")} />{" "}
              <span>0-100</span>
            </p>
            <p>
              <input
                type="checkbox"
                onChange={() => filterByPrice("101-250")}
              />{" "}
              <span>101-250</span>
            </p>
            <p>
              <input type="checkbox" onChange={() => filterByPrice("250+")} />{" "}
              <span>250+</span>
            </p>
          </div>
        </div>

        <div className="grid w-full grid-cols-1 my-24 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProductPage;
