/* eslint-disable react/prop-types */


const ServiceDetailsCard = ({service}) => {
    const {  name, image, short_description,price } = service || {}
    return (
        <div className="card bg-neutral  rounded-xl  md:rounded-none">
            <figure><img className="w-full lg:h-[700px]" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-yellow-400 mb-4  lg:text-4xl font-bold">{name}</h2>
                <p className="text-white mb-5">{short_description}</p>
                <h2 className="card-title text-yellow-400 mb-4  lg:text-xl font-bold">Package Price : {price}$</h2>
                <button className="btn bg-yellow-400 w-40">Enroll Now!</button>
            </div>
        </div>
    );
};

export default ServiceDetailsCard;