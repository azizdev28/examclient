import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Avion | Register",
  description: "Siz izlagan uy jihozlari !!!",
};
const RegisterPage = () => {
  return (
    <div className="container">
      <div className="flex flex-col h-screen w-[50%] mx-auto gap-6">
        <h2 className="text-center text-[#2A254B] text-3xl">Register</h2>
        <form className="flex flex-col justify-center gap-6 items-center">
          <input
            type="text"
            placeholder="Username"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <input
            type="passwor"
            placeholder="Enter your password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          />
          <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Add to Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
