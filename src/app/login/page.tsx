import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div>
      <h1>LoginPage</h1>
      <Link href="/register">To Register Page</Link>
    </div>
  );
};

export default LoginPage;
