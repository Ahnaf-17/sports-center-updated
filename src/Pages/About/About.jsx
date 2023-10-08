/* eslint-disable react/no-unescaped-entities */
import Footer from "../Common_Pages/Footer/Footer";
import Navbar from "../Common_Pages/Navbar/Navbar";

const About = () => {
    return (
        <div className="text-center ">
            <Navbar></Navbar>
            <div className="w-full h-full bg-no-repeat bg-cover px-5 pt-10" style={{ backgroundImage: 'url(https://i.ibb.co/3cQNcSw/power.jpg)' }}>
                <h3 className="text-yellow-400 font-extrabold text-3xl ">About Us</h3>
                <p className="text-white text-xl mt-5">
                    Welcome to Sports Center, your ultimate destination for all things sports! <br /> <br />

                    <span>
                        At Sports Center, we are passionate about sports and dedicated to providing you with the latest news, updates, and insights from the world of sports. <br /> Whether you're a die-hard fan or a casual enthusiast, we've got something for <everyone className="br"><br /></everyone>
                    </span>
                </p>


                <p className="text-white text-xl mt-10">
                    <h3 className="text-yellow-400 font-bold text-3xl text-center">Our Mission</h3><br />
                    Our mission is to bring the thrill of sports closer to you. We strive to deliver accurate and engaging content that keeps you informed and entertained. <br /> Whether it's the latest scores, in-depth analyses, player profiles, or expert commentary, we've got your sports fix covered.

                </p>
                <p className="text-white text-xl mt-10">
                    <h3  className="text-yellow-400 font-bold text-3xl text-center">
                    Join Us <br /><br />
                    </h3>
                    We invite you to be a part of the Sports Center community. Follow your favorite sports, get the latest updates, and share your passion for the game with us <br /> Whether you're a fan, an athlete, or a sports enthusiast, there's a place for you here at Sports Center. <br /><br />

                    Thank you for choosing Sports Center as your go-to source for all things sports. We look forward to being your trusted companion on this exciting sporting journey! <br /><br />

                    For any inquiries or feedback, please don't hesitate to contact us. We value your input and are always striving to improve our services. <br /><br />

                    Let's celebrate the spirit of sports together at Sports Center!
                </p> <br /><br /><br />
            </div>
            <Footer></Footer>

        </div>
    );
};

export default About;