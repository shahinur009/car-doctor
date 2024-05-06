// import { useEffect, useState } from "react";
import useServices from "../../../hooks/useServices";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const services = useServices()
    // const [services, setServices] = useState([]);

    // useEffect(() => {
    //     fetch('https://car-doctor-server-beryl-seven.vercel.app/services')
    //         .then(res => res.json())
    //         .then(data => {
    //             setServices(data);
    //         })
    // }, [])
    return (
        <div>
            <div className="text-center">
                <h2 className="text-3xl text-[#FF3811]">Service</h2>
                <h2 className="text-3xl font-bold">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or <br />randomised words which do not look even slightly believable. </p>
            </div>
            <div className="grid lg:grid-cols-3 gap-4">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;