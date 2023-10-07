import { useLoaderData } from "react-router-dom";
import Banner from "../Common_Pages/Banner/Banner";
import Navbar from "../Common_Pages/Navbar/Navbar";
import Services from "./Services";

const Home = () => {
    const service = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h3 className="text-4xl font-bold text-yellow-400 italic text-center mt-10 mb-10">Services we provide</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mx-14">
                {
                    service.map(aService => <Services key={service.id}
                    service={aService}
                    ></Services>)
                }
            </div>
        </div>
    );
};

export default Home;