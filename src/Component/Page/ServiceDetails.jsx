import { useLoaderData, useParams } from "react-router-dom";

const ServiceDetails = () => {
    const Services = useLoaderData();
    const { id } = useParams();
    const idInt = parseInt(id);
    const Service = Services.eventServices.find(Service => Service.id === idInt);
    console.log(Service);

    return (
        <div>
            <h1>This Details</h1>
        </div>
    );
};

export default ServiceDetails;