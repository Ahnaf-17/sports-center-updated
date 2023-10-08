import { useLoaderData } from "react-router-dom";
import Trainers from "./Trainers";
import Navbar from "../Common_Pages/Navbar/Navbar";
import Footer from "../Common_Pages/Footer/Footer";

const ShowTrainers = () => {
    const trainer = useLoaderData();
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-14 my-16 "> 
            {
                    trainer.map(aTrainer => <Trainers key={trainer.id}
                    trainer={aTrainer}
                    ></Trainers>)
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ShowTrainers;