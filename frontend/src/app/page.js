"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navigation from "./navigation/Navigation";
import HeroSection from "./hero-section/HeroSection";

export default function Navbar() {

  return (
    <>
      <Navigation />
      <HeroSection/>
    </>
  );
}
