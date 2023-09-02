"use client";
import React, { useState } from "react";
import Link from "next/link";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="bg-white border-solid border-2 h-12 flex justify-around items-center">
        <Link href="/">
          <span className="text-2xl">Mynecraft</span>
        </Link>
        <button onClick={handleClick}>≡</button>
      </header>
      {isOpen && (
        <nav className="ease-out">
          <button onClick={handleClick}>X</button>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/news">News</Link>
            </li>
            <li>
              <Link href="/create">Create</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/policy">Policy</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      )}
    </>
  );
};

export default Header;
