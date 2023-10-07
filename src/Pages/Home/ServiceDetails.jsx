import { useParams } from "react-router-dom";
import Navbar from "../Common_Pages/Navbar/Navbar";

const ServiceDetails = () => {
    const {id} = useParams()
    return (
        <div>
            <Navbar></Navbar>
            <div className="col-span-3">
                    <h2>news Details</h2>
                    <p>{id}</p>
                </div>
                <div></div>
        </div>
    );
};

export default ServiceDetails;