import Link from "next/link";

const Banner = () => {
  return (
   <div className="container mx-auto mt-8">
     <div className="carousel w-full rounded-xl skeleton">
      {
        banners.map((banner,index)=> <div
        style={{
            backgroundImage: `linear-gradient(45deg,rgba(7,25,82,0.7), rgba(0,0,0,0.3)), url(/assets/images/banner/${index+1}.jpg)`
        }}
        id={`slide${index+1}`}
         key={index} className="carousel-item relative w-full h-[90vh] bg-top bg-no-repeat "
         >
        <div className="h-full w-full flex flex-col justify-center ml-24 space-y-5">
            <h1 className="text-4xl font-semibold text-white w-9/12">{banner.title}</h1>
            <p className="text-lg w-7/12 text-white">{banner.des}</p>
            <div className="flex gap-5">
                <button className="btn btn-primary">Discover More</button>
                <button className="btn btn-primary btn-outline">Latest Project</button>
            </div>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <Link href={banner.prev} className="btn btn-circle">
            ❮
          </Link>
          <Link href={banner.next} className="btn btn-circle">
            ❯
          </Link>
        </div>
      </div>)
      }
    </div>
   </div>
  );
};

const banners = [
    {
        title: "In this image first t=heading is this so be careful",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, alias. Lorem ipsum dolor sit, amet consectetur adipisicing.",
        prev: "#slide3",
        next: "#slide2"
    },
    {
        title: "In this image first t=heading is this so be careful",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, alias. Lorem ipsum dolor sit, amet consectetur adipisicing.",
        prev: "#slide1",
        next: "#slide3",
    },
    {
        title: "In this image first t=heading is this so be careful",
        des: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad, alias. Lorem ipsum dolor sit, amet consectetur adipisicing.",
        prev: "#slide2",
        next: "#slide1",
    },
]

export default Banner;
