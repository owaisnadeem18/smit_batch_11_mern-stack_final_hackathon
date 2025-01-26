"use client";

import React from "react";
import { Input } from "@/components/ui/input"; // Shadcn Input
import { Button } from "@/components/ui/button"; // Shadcn Button
import { Label } from "@/components/ui/label"; // Shadcn Label
import { Google } from "@mui/icons-material";

const LogIn = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");

    console.log("Email:", email);
    console.log("Password:", password);
  };

  const handleGoogleLogin = () => {
    console.log("Google Login Clicked");
    // Yahan tum Google authentication ka logic add kar sakte ho.
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-lg rounded-lg px-10 pt-8 pb-10 mb-4 w-[40%] transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 animate-slide-up"
      >
        <h2 className="text-3xl mb-6 text-center font-semibold text-gray-800">
          Log In
        </h2>

        <div className="mb-4">
          <Label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-900 transition duration-150 ease-in-out"
          />
        </div>

        <div className="mb-4">
          <Label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="shadow-sm appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-900 transition duration-150 ease-in-out"
          />
        </div>

        <div className="flex flex-col items-center space-y-4">
          <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
            Log In
          </Button>

        </div>

        <p className="text-center mt-4 text-gray-700">
          Don't have an account?{" "}
          <a href="/signup" className="text-blue-900 underline hover:text-blue-700">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LogIn;
