"use client";

import Link from "next/link";

const Header = () => {
  return (
    <header className="bg-stone-100 py-10 items-center">
      <nav className="container flex items-center text-sm font-medium  uppercase text-stone-500">
        <ul className="ml-auto flex justify-center gap-8 items-center">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
