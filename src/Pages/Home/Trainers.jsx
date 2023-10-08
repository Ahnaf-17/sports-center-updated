/* eslint-disable react/prop-types */

const Trainers = ({ trainer }) => {
    const { T_name, T_image, T_expert } = trainer
    return (
        <div>
            <div className="card card-side bg-neutral shadow-xl mt-10">
                <figure><img className="h-[250px] w-[180px]" src={T_image} alt="Movie" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-white font-bold">{T_name}</h2>
                    <p className="text-white">Expert in : {T_expert}</p>
                </div>
            </div>
        </div>
    );
};

export default Trainers;