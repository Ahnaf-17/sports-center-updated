/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Services = ({ service }) => {
    const { id, name, image, short_description } = service
    return (
        <div className="card bg-neutral  rounded-xl  md:rounded-none">
            <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-white font-semibold">{name}</h2>
                <p className="text-white">{short_description}</p>
                <div className="card-actions justify-start">
                    <Link to={`/details/${id}`}>
                    <button className="btn bg-yellow-400">View Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;