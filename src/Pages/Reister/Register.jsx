/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import swal from 'sweetalert';
import { updateProfile } from "firebase/auth";


const Register = () => {

    const [regError, setRegError] = useState('')
    const [regSuccess, setRegSuccess] = useState('')
    const {createUser} = useContext(AuthContext);
    // const err = swal("Error", "recheck", "error")

    const handleRegister = e =>{
        e.preventDefault();
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget);
        const name = form.get('name')
        const imgUrl = form.get('image')
        const email = form.get('email');
        const password = form.get('password')
        const upperCase = /[A-Z]/;
        if(password <6 || !upperCase.test(password) ||!password.match(/[!"#$%&'()*+,-.:;<=>?@[\]^_`{|}~]/)){
            swal("Error", "Minimum 6 character, 1 uppercase and one special character needed", "error");
            return;
        }
        setRegError('')
        setRegSuccess('')
        createUser(email,password)
        .then(result =>{
            console.log(result.user)
            swal("Good job!", "Registration successful", "success");

            // update 
            updateProfile(result.user, {
                displayName:name,
                photoURL:imgUrl

            })
            .then(()=> console.log("updated"))
            .catch()
        })
        .catch(error =>{
            console.error(error);
            swal("Error", "This email is already used", "error")
        })


    }

    return (
        <div>
            
            <div className=" min-h-screen bg-neutral">
                <div className="pt-16 flex flex-col justify-center mb-5 items-center">
                <Link to='/'>
                <img src="https://i.ibb.co/xqrZZ95/web-logo.png" alt="" />
                </Link>
                
                </div>
           
            <form onSubmit={handleRegister} className="card-body bg-yellow-400 md:w-3/4 lg:w-1/2 mx-auto rounded-xl">
                <div>
                <h2 className="text-3xl text-center text-white font-bold ">Please Register</h2>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Your Name</span>
                    </label>
                    <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Image url</span>
                    </label>
                    <input type="text" placeholder="image_url(optional)" name="image" className="input input-bordered"  />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text font-bold text-white">Password</span>
                    </label>
                    <input type="password" placeholder="password" className="input input-bordered" name="password" required />
                 
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-neutral text-white font-bold">Register</button>
                </div>
            </form>

            <p className="text-center mt-3 text-white">Already have an account,  <Link className="text-blue-400 font-semibold" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;