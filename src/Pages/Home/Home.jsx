import Banner from "../Common_Pages/Banner/Banner";
import Navbar from "../Common_Pages/Navbar/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Banner></Banner>
            <h3 className="text-4xl font-bold text-yellow-400 italic text-center mt-10">Services we provide</h3>
        </div>
    );
};

export default Home;