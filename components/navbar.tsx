"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { UmbrellaIcon, MenuIcon, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 pt-4">
      <nav className="bg-white/80 backdrop-blur-md shadow-lg rounded-full border border-gray-100 max-w-7xl mx-auto">
        <div className="px-6">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <UmbrellaIcon className="h-8 w-8 text-blue-600" />
                <span className="font-bold text-xl text-gray-900">SmartBrolly</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:space-x-6">
              <Link href="/map" className="text-gray-600 hover:text-gray-900">Find Umbrellas</Link>
              <Link href="/pricing" className="text-gray-600 hover:text-gray-900">Pricing</Link>
              <Link href="/about" className="text-gray-600 hover:text-gray-900">About</Link>
              <Link href="/signin">
                <Button variant="outline" className="mr-2 rounded-full">Sign In</Button>
              </Link>
              <Button className="rounded-full">Get Started</Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <MenuIcon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 px-4 py-3 space-y-3">
              <Link href="/map" className="block px-3 py-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-50">
                Find Umbrellas
              </Link>
              <Link href="/pricing" className="block px-3 py-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-50">
                Pricing
              </Link>
              <Link href="/about" className="block px-3 py-2 text-gray-600 hover:text-gray-900 rounded-full hover:bg-gray-50">
                About
              </Link>
              <div className="px-3 py-2 space-y-2">
                <Link href="/signin">
                  <Button variant="outline" className="w-full rounded-full">Sign In</Button>
                </Link>
                <Button className="w-full rounded-full">Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}