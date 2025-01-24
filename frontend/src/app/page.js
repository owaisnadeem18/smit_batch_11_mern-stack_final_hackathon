"use client";

import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="flex bg-slate-900 text-white items-center justify-between p-4">
        <h2 className="text-2xl">Final Grand Hackathon of SMIT</h2>
        <Link
          href={"/login"}  
          className="text-xl py-3 px-6 bg-slate-700 rounded-xl"
        >
          LogIn
        </Link>
      </div>
    </>
  );
}
