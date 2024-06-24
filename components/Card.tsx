const Card = () => {
  return (
    <>
      <div className="grid grid-col mx-auto my-10 bg-gray-100 max-w-96 rounded-t-lg shadow-lg">
        <h1 className="text-3xl text-gray-600 font-semibold text-center py-6">This is a Card.</h1>
      <div className="bg-white py-6 px-4 rounded-b-lg text-center">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi ea numquam veritatis nihil necessitatibus unde, dolor velit, voluptas, amet et esse? Sint qui necessitatibus modi repellat blanditiis voluptatibus aperiam odit.</p>
          <button className="mt-6">
          <a href="/link_1" className="bg-gray-500 hover:bg-gray-600 hover:font-bold shadow-lg text-white py-2 px-6 rounded-lg">Link 1</a>
        </button>
        </div>

      </div>
    </>
  )
};

export default Card;
