// import { useLoaderData, useParams } from "react-router-dom";
// import Navbar from "../Common_Pages/Navbar/Navbar";
// import { useEffect, useState } from "react";
// import ServiceDetailsCard from "./ServiceDetailsCard";

// const ServiceDetails = () => {
//     const [service,setService] = useState();
    
//     const {id} = useParams()
//     const services = useLoaderData();

//     useEffect(()=>{
//         const findService = services.find(service  => service.id == id);
//         setService(findService)
//     },[id, services])
//     return (
//         <div>
//             <Navbar></Navbar>
//             <div className="col-span-3">
                    
//                     <ServiceDetailsCard service={service}></ServiceDetailsCard>

//                 </div>
//                 <div></div>
//         </div>
//     );
// };

// export default ServiceDetails;