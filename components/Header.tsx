import Link from "next/link";

const Header = () => {
  return (
    <>
      <div className="container max-w-none text-center">
        <div className="bg-blue-500 py-16 px-10 lg:py-40 lg:px-10 md:py-20 md:px-10">
          <div className=" lg:max-h-40">
            <h1 className="text-3xl lg:text-5xl md:text-white md:text-4xl text-white font-bold text-center">Main Page</h1>
            <p className="text-md lg:text-2xl md:text-xl text-center text-white mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam officiis praesentium architecto odio quisquam a illum, minus reiciendis, aperiam est consectetur ratione vitae doloribus vel aut hic voluptas dolorem!</p>
            <div className="space-x-2 hidden lg:inline md:inline"                                                                                                             >
            <button className="mt-18">
              <Link href="/link_1" className="bg-red-500 hover:bg-red-600 hover:font-bold shadow-lg text-white py-2 px-6 rounded-lg">Link 1</Link>
            </button>
            <button className="mt-10">
              <Link href="/link_2" className="bg-red-500 hover:bg-red-600 hover:font-bold shadow-lg text-white py-2 px-6 rounded-lg">Link 2</Link>
              </button>
              </div>
          </div>

        </div>
      </div>
    </>
  )
};

export default Header;
                                          