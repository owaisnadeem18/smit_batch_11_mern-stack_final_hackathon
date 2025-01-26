"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    contact: "",
    address: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignUp();
  };

  const handleSignUp = () => {
    axios
      .post("http://localhost:3000/api/auth/register", formData)
      .then((response) => {
        try {
          alert(response?.data?.message);
          navigate("/signIn");
        } catch (err) {
          alert(err);
        }
      })
      .catch((err) => {
        alert(
          err.response?.data?.message || "An error occurred during registration."
        );
        console.log(err.response);
      });
  };

  return (
    <div className="py-14 flex items-center justify-center min-h-screen bg-slate-800">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl px-10 pt-8 pb-10 mb-4 w-[90%] sm:w-[40%] transition-transform transform hover:scale-105 duration-300"
      >
        <h2 className="text-3xl mb-6 text-center font-bold text-gray-800">
          Create Your Account
        </h2>

        {/* Username */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-slate-400"
            placeholder="Enter your username"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-slate-400"
            placeholder="Enter your email"
            required
          />
        </div>

        {/* Password */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-slate-400"
            placeholder="Enter your password"
            required
          />
        </div>

        {/* Contact */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="contact"
          >
            Contact
          </label>
          <input
            type="text"
            name="contact"
            id="contact"
            value={formData.contact}
            onChange={handleChange}
            className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-slate-400"
            placeholder="Enter your contact number"
            required
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-slate-400"
            placeholder="Enter your address"
            required
          />
        </div>

        {/* Age */}
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-semibold mb-2"
            htmlFor="age"
          >
            Age
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={formData.age}
            onChange={handleChange}
            className="shadow-md appearance-none border border-gray-300 rounded-xl w-full py-3 px-4 text-gray-800 leading-tight focus:outline-none focus:ring-2 focus:ring-slate-400"
            placeholder="Enter your age"
            required
          />
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-6 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300 transition duration-200 shadow-lg w-full"
          >
            Sign Up
          </button>
        </div>

        <Link href="/login" className="flex justify-center mt-4 text-gray-700 underline">
          Already have an account? Log In
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
