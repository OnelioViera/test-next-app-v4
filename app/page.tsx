import Card from "@/components/Card";
import Header from "@/components/Header";


const page = () => {
  return (
    <>
    <div className="">
      <Header />
      </div> 
      <div className="flex justify-center">
      <div className="lg:grid grid-cols-2 gap-6">

      <Card />
      <Card />

      </div>
      </div>
      </>
  )
};

export default page;
