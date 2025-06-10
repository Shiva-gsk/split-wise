// import Image from "next/image";
// import {
//   SignInButton,
//   SignUpButton,
//   SignedIn,
//   SignedOut,
//   UserButton,
// } from '@clerk/nextjs'
"use client"
import Header from "@/components/header";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { FEATURES } from "@/lib/data";
// import { Badge } from "";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-100 via-blue-100 to-white px-4 py-12">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 start gradient-title">Welcome to SplitWise</h1>
          <p className="text-lg text-gray-600 mb-8">
            A simple and effective way to manage your group expenses.
          </p>
          <div className="flex justify-center space-x-4">
            <a href="/dashboard" className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
              Go to Dashboard
            </a>
            <a
              href="#features"
              className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
              onClick={e => {
                e.preventDefault();
                document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Features
            </a>
          </div>
        </div>
      </main>
      <section id="features" className="py-16 bg-zinc-50">

        <div className="container mx-auto px-4 text-center">
          <Badge variant="outline" className="text-2xl font-bold mb-8 bg-green-100 text-green-600">
            Key Features

          </Badge>

        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
          {FEATURES.map(({ title, Icon, bg, color, description }) => {
            return (
              <Card key={title} className=" flex flex-col items-center space-y-2 mx-auto ">

                <div className={`p-3  ${bg} rounded-full`}>
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
                <p className="text-gray-600 p-2 text-center">{description}</p>


              </Card>
            );
          })}
        </div>

      </section>
    </>
  );
}
