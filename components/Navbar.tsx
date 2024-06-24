'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {

  const pathname = usePathname();

  return (
    <nav className="flex justify-center py-6 bg-black text-white space-x-3 shadow-lg">
      <Link
        href='/'
        className={`${pathname === '/' ? 'font-bold border-b-2 border-red-500' : ''}`}>
      HOME
      </Link>
      <Link href='/link_1'
      className={`${pathname === '/link_1' ? 'font-bold border-b-2 border-red-500' : ''}`}>
      LINK 1
      </Link>
      <Link href='/link_2'
      className={`${pathname === '/link_2' ? 'font-bold border-b-2 border-red-500' : ''}`}>
      LINK 2
      </Link>
    </nav> 
  )
};

export default Navbar;
