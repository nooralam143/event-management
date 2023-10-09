import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const Services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const Service = Services.eventServices.find(Service => Service.id === idInt);
    console.log(Service);

    return (
        <div>
            <div className="container mx-auto mt-20">
                <div className=" w-full bg-base-100 shadow-xl">
                    <div className="relative">
                        <figure><img className="w-full" src={Service.imageLink} alt={Service.name} /></figure>
                        <div className="absolute bottom-0 left-0 w-full h-20 md:h-24 bg-[#0B0B0B80]">
                            <div className="absolute bottom-0 top-5 md:top-6 left-6">
                                <button type="btn" className="py-2 px-2 md:px-3 md:py-3 lg:px-3 lg:py-3  rounded-lg  text-xl font-semibold border-none text-white">BookNow {Service.price}</button>
                            </div>

                        </div>
                    </div>

                    <div className="card-body">
                        <h2 className="font-bold text-4xl">{Service.name}</h2>
                        <div>
                            {Service.longDescription.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetails;