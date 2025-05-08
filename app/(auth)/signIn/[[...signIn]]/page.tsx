import React from "react";
import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <SignIn/>
    </div>
  );
}

export default SignInPage;