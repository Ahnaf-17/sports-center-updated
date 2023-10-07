/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        console.log(form)
 
    }
    return (
        <div className=" min-h-screen bg-neutral">
            <div className="pt-16 flex flex-col justify-center mb-5 items-center">
                <img src="https://i.ibb.co/xqrZZ95/web-logo.png" alt="" />
                
                </div>
         
            <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto  bg-yellow-400 rounded-xl">
            <div>
                <h2 className="text-3xl text-center text-white font-bold ">Please Login</h2>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="font-bold text-white label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" name="password" required />
            
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-neutral text-white font-bold">Login</button>
                </div>
            </form>
            <p className="text-center text-white mt-3">Don't have an account? <Link className="text-blue-300 font-bold" to='/register'>Register</Link></p>
            </div>
    );
};

export default Login;