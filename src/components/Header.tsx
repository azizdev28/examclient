import Link from "next/link";
import React from "react";
import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

import { FiShoppingCart } from "react-icons/fi";

const Header = () => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto  justify-between border-b-2  flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="#"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          Avion
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/" className="mr-5 hover:text-gray-900">
            Home
          </Link>
          <Link href="/about" className="mr-5 hover:text-gray-900">
            About us
          </Link>
          <Link href="/contact" className="mr-5 hover:text-gray-900">
            Contact
          </Link>
          <Link href="/blog" className="mr-5 hover:text-gray-900">
            Blog
          </Link>
          <Link href="/productdetails" className="mr-5 hover:text-gray-900">
            Product
          </Link>
          <Link href="/productdetails" className="mr-5 hover:text-gray-900">
            <CiSearch />
          </Link>
          <Link href="/productdetails" className="mr-5 hover:text-gray-900">
            <FiShoppingCart />
          </Link>
          <Link href="/productdetails" className="mr-5 hover:text-gray-900">
            <CgProfile />
          </Link>
        </nav>
        <Link
          href="/login"
          className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
        >
          Login
        </Link>
      </div>
      <div className="flex justify-center  gap-12 my-6 flex-wrap	">
        <p>Plant pots</p>
        <p>Ceramics</p>
        <p>Tables</p>
        <p>Chairs</p>
        <p>Crocery</p>
        <p>Tableware</p>
        <p>Cutlery</p>
      </div>
    </header>
  );
};

export default Header;
