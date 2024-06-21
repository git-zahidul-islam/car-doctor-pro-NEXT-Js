import ServicesCard from "../cards/ServicesCard";
import { services } from "../../lib/Services";

const Services = () => {
  return (
    <div className="min-h-screen text-center container mx-auto my-5 space-y-5">
      <div className="">
        <h1 className="text-2xl">Our Service Area</h1>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {services.map((ser) => (
          <ServicesCard key={ser.id} data={ser} />
        ))}
      </div>
    </div>
  );
};

export default Services;
