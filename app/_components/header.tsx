"use client"

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-screen px-[6vw] py-[3vh] absolute z-20 bg-white">
      <div className="grid grid-cols-2 justify-between items-center w-full">
        {/* Logo */}
        <div>
          <Image
            src="/logo.png"
            width={200}
            height={200}
            alt="Colossal Arts Indonesia"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center justify-between w-full">
          <Link href="/" className="font-raleway font-bold text-blue">
            Home
          </Link>
          <Link href="/services" className="font-raleway font-bold text-blue">
            Services
          </Link>
          <Link href="/project" className="font-raleway font-bold text-blue">
            Projects
          </Link>
          <Link href="/about" className="font-raleway font-bold text-blue">
            About Us
          </Link>
          <Link
            href="https://wa.me/6282240050012"
            target="_blank"
            className="font-raleway font-bold px-[1.4vw] py-[1vh] bg-blue rounded-lg text-white"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden justify-end">
          <button
            className="text-blue font-bold text-2xl focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-30 flex flex-col p-6 gap-4 shadow-lg overflow-y-auto">
          <button
            className="text-blue font-bold text-2xl self-end focus:outline-none"
            onClick={() => setIsMenuOpen(false)}
          >
            ✕
          </button>
          <Link
            href="/"
            className="block font-raleway font-bold text-blue py-2 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/services"
            className="block font-raleway font-bold text-blue py-2 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </Link>
          <Link
            href="/project"
            className="block font-raleway font-bold text-blue py-2 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="block font-raleway font-bold text-blue py-2 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About Us
          </Link>
          <Link
            href="https://wa.me/6282240050012"
            target="_blank"
            className="block font-raleway font-bold bg-blue text-white text-center py-3 rounded-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact Us
          </Link>
        </div>
      )}
    </header>
  );
}
