import Image from "next/image";

const ServicesCard = ({data}) => {
    console.log(data);
    const {title,img,price} = data || {};

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <Image src={img} width={430} height={120} alt="image"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
         <div className="flex items-center justify-between w-full">
         <h1 className="text-primary font-semibold">Price: {price}</h1>
         <button className="btn btn-primary">Buy Now</button>
         </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesCard;
