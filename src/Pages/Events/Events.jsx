import { useLoaderData } from "react-router-dom";
import Navbar from "../Common_Pages/Navbar/Navbar";
import EventDetails from "./EventDetails";
import Footer from "../Common_Pages/Footer/Footer";

const Events = () => {

    const event = useLoaderData()
    return (
        <div>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-14 my-16 ">
                {
                    event.map(anEvent => <EventDetails key={event.id} event={anEvent}></EventDetails>)
                }

            </div>
            <Footer></Footer>
        </div>
    );
};

export default Events;