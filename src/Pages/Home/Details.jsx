import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../Common_Pages/Navbar/Navbar";
import { useEffect, useState } from "react";
import ServiceDetailsCard from "./ServiceDetailsCard";

const Details = () => {
    const [service, setService] = useState();
    const {id} = useParams();
    const services = useLoaderData();
    useEffect(() => {
        const findService = services.find(service => service.id == id);
        setService(findService);
    }, [id, services])
    console.log(services);

    return (
        <div>
            <Navbar></Navbar>
            <div>
                <ServiceDetailsCard service={service}></ServiceDetailsCard>
            </div>
        </div>
    );
};

export default Details;