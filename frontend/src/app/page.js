"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {

  return (
    <>
      <div className="flex bg-slate-900 text-white items-center justify-between p-4">
        <h2 className="text-2xl">Final Grand Hackathon of SMIT</h2>
        <Link
          href={"/login"}  
          className="py-3 px-6 rounded-xl"
        >
          <Button className="py-6 px-6 text-xl bg-slate-700" >
            Log In
          </Button>
        </Link>
      </div>
    </>
  );
}
