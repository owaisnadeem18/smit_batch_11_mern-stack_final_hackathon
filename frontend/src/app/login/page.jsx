"use client";

import React from "react";
import { Form } from "@/components/ui/form"; // Optional if needed
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
    <div className="min-h-screen text-white bg-slate-800 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-6">Log In</h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm bg-slate-700 p-6 rounded-lg shadow-md space-y-4"
      >
        <div>
          <Label htmlFor="email" className="block text-sm font-medium">
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            required
            className="mt-1 w-full"
          />
        </div>

        <div>
          <Label htmlFor="password" className="block text-sm font-medium">
            Password
          </Label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            required
            className="mt-1 w-full"
          />
        </div>

        <Button type="submit" className="w-full">
          Log In
        </Button>
      </form>

    </div>
  );
};

export default LogIn;
