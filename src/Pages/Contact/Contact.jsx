import Footer from "../Common_Pages/Footer/Footer";
import Navbar from "../Common_Pages/Navbar/Navbar";

const Contact = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full h-full bg-no-repeat bg-cover px-5 pt-20 bg-transparent bg-clip-border text-gray-700" style={{ backgroundImage: 'url(https://i.ibb.co/Yhg55SG/running.webp)' , height:'600px'}} >
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl text-white font-bold">Contact us</h1>
                        <p className="py-6 text-white font-semibold">Give your feedback here. Our teem will reach you as far as possible.Your feedback will help us to improve our services</p>
                        <p className="py-6 text-white font-semibold">sportscenter@gmail.com</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" required />
                            
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-yellow-400 font-bold">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <Footer></Footer>

        </div>
    );
};

export default Contact;