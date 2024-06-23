'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();

  return (
    <nav className="flex justify-center py-6 bg-black text-white space-x-3 shadow-lg">
      <Link
        href='/'
        className={`${pathname === '/' ? 'font-bold border-b-4' : ''}`}>
      HOME
      </Link>
      <Link href='/link'
      className={`${pathname === '/link' ? 'font-bold border-b-4' : ''}`}>
      LINK PAGE
      </Link>
    </nav> 
  )
};

export default Navbar;
