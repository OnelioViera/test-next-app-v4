import Card from "@/components/MainCard";
import Header from "@/components/Header";


const page = () => {
  return (
    <>
    <div className="">
      <Header />
      </div> 
      <div className="flex justify-center">
      <div className="grid py-8 lg:grid-cols-2 md:flex md:py-10 gap-6">

      <MainCard />
      <MainCard />

      </div>
      </div>
      </>
  )
};

export default page;
