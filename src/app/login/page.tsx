import Link from "next/link";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Avion | Login",
  description: "Siz izlagan uy jihozlari !!!",
};
const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage</h1>
      <Link href="/register">To Register Page</Link>
    </div>
  );
};

export default LoginPage;
