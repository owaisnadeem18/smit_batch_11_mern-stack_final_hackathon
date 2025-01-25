import Link from 'next/link'
import React from 'react'
import { FaHome, FaUserAlt, FaCog } from "react-icons/fa";
import { Button } from '@/components/ui/button';

const Navigation = () => {
  return (
    <>
    <nav className="bg-slate-900 text-white shadow-lg p-6">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo or App Name */}
        <h2 className="text-3xl font-semibold tracking-wide text-teal-400 hover:text-teal-500 transition-all">
          SMIT Finance
        </h2>

        {/* Navbar Links */}
        <div className="space-x-6 text-xl font-medium">
          <Link href={"/"} className="hover:text-teal-400 transition-all">
            <FaHome className="inline mr-2" />
            Home
          </Link>
          <Link href={"/about"} className="hover:text-teal-400 transition-all">
            <FaUserAlt className="inline mr-2" />
            About
          </Link>
          <Link href={"/settings"} className="hover:text-teal-400 transition-all">
            <FaCog className="inline mr-2" />
            Settings
          </Link>
        </div>

        {/* Log In Button */}
        <Link href={"/login"}>
          <Button className="py-3 px-6 rounded-lg text-xl bg-teal-500 hover:bg-teal-600 transition-all">
            Log In
          </Button>
        </Link>
      </div>
    </nav>
    </>
  )
}

export default Navigation
