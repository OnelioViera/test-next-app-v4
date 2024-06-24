'use client';

import Link from "next/link"
import { usePathname } from "next/navigation"

const CustomFooter = () => {
  const pathname = usePathname();
  return (
    <>
      <div className="mt-auto justify-center text-center py-6 bg-black text-white">
        <div className="container mx-auto flex text-center justify-center space-x-6 lg:max-w-4xl md:max-w-lg">
          <Link href="/link_1"
            className={`${pathname === '/link_1' ? 'font-bold border-b-2 border-red-500' : ''} hover:font-bold`}>
            LINK 1
          </Link>
          <Link href="/link_2"
            className={`${pathname === '/link_2' ? 'font-bold border-b-2 border-red-500' : ''} hover:font-bold`}>
            LINK 2
          </Link>
        </div>
      </div>
    </>
  )
};

export default CustomFooter;