/* eslint-disable react/no-unescaped-entities */
import { Link, useLoaderData } from "react-router-dom";
import Banner from "../Common_Pages/Banner/Banner";
import Navbar from "../Common_Pages/Navbar/Navbar";
import Services from "./Services";
import Footer from "../Common_Pages/Footer/Footer";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useEffect } from "react";
const Home = () => {
    useEffect(()=>{
        Aos.init()
    },[])
    const service = useLoaderData();
    // console.log(service)

    return (
        <div >
            <Navbar></Navbar>
            <Banner></Banner>
            <h3 className="text-4xl font-extrabold text-black italic text-center mt-10 mb-10">Services we provide</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-5 mx-14"  >
                {
                    service.map(aService => <Services key={service.id}
                        service={aService}
                    ></Services>)
                }
            </div>


            <section >
                <h3 className="text-4xl font-extrabold text-black italic text-center mt-10 mb-10">Meet our trainers</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mx-14"  data-aos="fade-down" data-aos-duration="1000">
                    <div className="card card-side bg-neutral shadow-xl mt-10" >
                        <figure><img className="h-[250px] w-[180px]" src='https://i.ibb.co/FxZz8bq/strength-trainer.jpg' alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white font-bold">Sarah Smith</h2>
                            <p className="text-white">Expert in : Strength and Conditioning</p>
                        </div>
                    </div>
                    <div className="card card-side bg-neutral shadow-xl mt-10" data-aos="fade-down" data-aos-duration="1000">
                        <figure><img className="h-[250px] w-[180px]" src='https://i.ibb.co/Ph7mXyy/yoga-trainer.jpg' alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title text-white font-bold">Lisa Johnson</h2>
                            <p className="text-white">Yoga and Meditation</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-5 mb-10">
                    <Link to={`/trainer`}>
                        <button className="btn bg-yellow-400">See All</button>
                    </Link>
                </div>
            </section>

            <section className="">
                
            <h3 className="text-4xl font-extrabold text-black italic text-center mt-20 mb-10">Explore Our Events</h3>

                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-14 mb-16 " data-aos="zoom-in" data-aos-duration="1000">
                <div className="relative grid h-[40rem] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700" >
                    <div >
                        <img className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" src="https://i.ibb.co/2kVk74L/cycling.jpg" alt="" />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 py-14 px-6 md:px-12">
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                        Tour de Lakemba
                        </h2>
                        <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                        Intermediate
                        </h5>
                        <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                        2023-11-15 10:00 AM                        
                        </h5>
                        <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                        Join us for an exciting Cycling tournament at the local community center. Show off your ability and compete with other cycling enthusiasts. Don't miss the slam-dunk action!
                        </h5>
                        <button className="btn mt-2 font-bold  bg-yellow-400">Book Your slot</button>

                    </div>
                </div>
                <div className="relative grid h-[40rem] w-full  flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700" data-aos="zoom-in" data-aos-duration="1000">
                    <div >
                        <img className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent  bg-cover bg-clip-border bg-center text-gray-700 shadow-none" src="https://i.ibb.co/Yhg55SG/running.webp" alt="" />
                        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
                    </div>
                    <div className="relative p-6 py-14 px-6 md:px-12">
                        <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
                            Lakemba 10k Run
                        </h2>
                        <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                            Beginner
                        </h5>
                        <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                            2023-10-20 3:00 PM
                        </h5>
                        <h5 className="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
                        Run for a noble cause in our marathon event. Raise funds and awareness for local charities while testing your endurance in this challenging race.
                        </h5>
                        <button className="btn mt-2 font-bold  bg-yellow-400">Book Your slot</button>

                    </div>
                </div>
                </div>

                <div className="flex justify-center mt-5 mb-10">
                    <Link to={`/events`}>
                        <button className="btn bg-yellow-400">Explore More</button>
                    </Link>
                </div>
            </section>
            

            <Footer></Footer>
        </div>
    );
};

export default Home;