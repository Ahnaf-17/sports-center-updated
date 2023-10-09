/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Services = ({ service }) => {
    const { id, name, image, short_description, price } = service
    return (
        <div className="card bg-neutral  rounded-xl  md:rounded-none" data-aos="fade-up" data-aos-duration="1000">
            <figure><img className="h-[300px] w-full" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-yellow-400 font-bold">{name}</h2>
                {
                    short_description.length > 200 ? <p className="text-white">{short_description.slice(0, 200)} </p>
                        :
                        <p className="text-white">{short_description}</p>
                }
                <h2 className="card-title text-yellow-400 mb-4  lg:text-xl font-bold">Package Price : {price}$</h2>
                <div className="card-actions justify-start">
                    {
                        <Link to={`/service/${id}`}>
                        <button className="btn bg-yellow-400">View Details</button>
                    </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Services;