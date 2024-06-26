import Link from "next/link";

const MainCard = () => {
  return (
    <>
      <div className="bg-gray-100 max-w-96 rounded-t-lg shadow-lg">
        <h1 className="text-3xl text-gray-600 font-semibold text-center py-6">Title</h1>
      <div className="bg-white py-6 px-4 rounded-b-lg text-center">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ea numquam veritatis nihil necessitatibus unde, dolor velit, voluptas, amet et esse? Sint qui necessitatibus modi repellat blanditiis voluptatibus aperiam odit.</p>
          <div className="mt-8 mb-4">
          <Link href="#" className="bg-gray-500 hover:bg-gray-600 hover:font-bold shadow-lg text-white py-2 px-6 rounded-lg">
          Button
            </Link>
            </div>
        </div>

      </div>
    </>
  )
};

export default MainCard;
