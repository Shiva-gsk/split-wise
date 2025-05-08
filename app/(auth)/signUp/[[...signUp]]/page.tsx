import React from "react";
import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-100">
      <SignUp/>
    </div>
  );
}

export default SignUpPage;