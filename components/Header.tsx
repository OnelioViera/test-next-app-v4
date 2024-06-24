const Header = () => {
  return (
    <>
      <div className="">
        <div className="bg-blue-500 py-40 px-10">
          <div className="container mx-auto lg:px-60 text-center">
          <h1 className="text-3xl lg:text-5xl md:text-white md:text-4xl text-white font-bold text-center">Main Page</h1>
            <p className="text-center text-white mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia nam officiis praesentium architecto odio quisquam a illum, minus reiciendis, aperiam est consectetur ratione vitae doloribus vel aut hic voluptas dolorem!</p>
            <button className="mt-10">
            <a href="/link" className="bg-red-500 text-white py-3 px-6 mt-6 rounded-lg">Link 1</a>
          </button>
          </div>

        </div>
        </div>
    </>
  )
};

export default Header;
