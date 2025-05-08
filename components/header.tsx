"use client";
import { useStoreUserEffect } from "@/hooks/use-store-user";
import Image from "next/image";
import {
  SignedOut,
  SignInButton,
  SignUpButton,
  SignedIn,
  UserButton,
} from "@clerk/nextjs";
import { BarLoader } from "react-spinners";
import React from "react";
import Link from "next/link";
import { Authenticated, Unauthenticated } from "convex/react";
import { Button } from "./ui/button";
import { LayoutDashboard } from "lucide-react";

const Header = () => {
  const { isLoading } = useStoreUserEffect();
  return (
    <>
      <header className="fixed top-0 h-16 z-50 w-full items-center justify-between bg-white px-4 shadow-md">
        <nav className="flex items-center justify-start h-full w-full">
          <div className="">

          <Link href="/">
            <Image
              src={"/logos/logo.png"}
              alt="Split-Wise"
              width={200}
              height={60}
              className="h-10 w-auto object-contain"
            />
          </Link>
          </div>
          <div className="hidden md:flex items-center justify-center  space-x-4 w-full">

          <Link href="/features" className="text-sm font-medium hover:text-blue-500 transition">Features</Link>
          <Link href="/contact" className="text-sm font-medium hover:text-blue-500 transition">Contact</Link>
          </div>
          <div className="flex items-center justify-end space-x-4 ml-auto">
            {/* <SignedOut>
              <SignInButton />
              <SignUpButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn> */}
            <Authenticated>
                <Link href={"/dashboard"}>
                <Button variant="outline" className="hidden md:flex bg-white text-gray-800 hover:bg-gray-100 transition">
                <LayoutDashboard className="h-6 w-6"/>
                Dashboard

                </Button>
                
                <Button variant="ghost" className="md:hidden bg-white text-gray-800 hover:bg-gray-100 transition">
                <LayoutDashboard className="h-6 w-6"/>
                </Button>
                </Link>
                <UserButton/>
            </Authenticated>
            <Unauthenticated>
              <div className="flex items-center space-x-4">
                <SignInButton mode="modal">
                  <Button className="bg-blue-500 text-white hover:bg-blue-600 transition">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton mode="modal">
                <Button className="bg-blue-500 text-white hover:bg-blue-600 transition">
                    Sign Up
                  </Button>
                </SignUpButton>
              </div>
            </Unauthenticated>
          </div>
        </nav>
        {isLoading && <BarLoader width={"100%"} color="#07b2f5" />}
      </header>
    </>
  );
};

export default Header;
