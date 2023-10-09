import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const handleSignOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.error(error)
            })
    }


    const navLinks = <>
        <li><NavLink to='/' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-400" : ""
        }>Home</NavLink></li>
        <li><NavLink to='/about' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-400" : ""
        }>About</NavLink></li>
        <li><NavLink to='/events' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-400" : ""
        }>Events</NavLink></li>
        <li><NavLink to='/contact' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-400" : ""
        }>Contact</NavLink></li>
        <li><NavLink to='/trainer' className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-yellow-400" : ""
        }>Trainers</NavLink></li>
    </>
    return (
        <div className="navbar  bg-neutral text-neutral-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

                <Link to='/'><img src="https://i.ibb.co/xqrZZ95/web-logo.png" alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {/* <img src={avatar} /> https://i.ibb.co/ZBXgGBM/user.png*/}

                    </div>
                </label>
                {/* https://i.ibb.co/fqgXySz/avater.png */}
                <div className="dropdown dropdown-end">
                    {
                        user ?
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                {
                                    user.photoURL ?
                                    <div className="w-10 rounded-full">
                                    <img src={user.photoURL} alt="https://i.ibb.co/fqgXySz/avater.png" />
                                </div>
                                :
                                <div className="w-10 rounded-full">
                                    <img src='https://i.ibb.co/fqgXySz/avater.png' alt="" />
                                </div>
                                }
                            </label>
                            :
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="https://i.ibb.co/ZBXgGBM/user.png" />
                                </div>
                            </label>
                    }

                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral rounded-box w-52">
                        <li>
                            {
                                user ?
                                    <div className="flex flex-col items-start justify-start text-left">
                                        <p>Welcome,{user.displayName}</p>
                                        <button onClick={handleSignOut} className="btn">Log out</button>
                                    </div>
                                    :
                                    <Link to='/login'>
                                        <button className="btn bg-yellow-400 font-bold">Login</button>
                                    </Link>
                            }
                        </li>
                    </ul>
                </div>

                {/* {
                    user ?
                        <div className="md:flex md:justify-center md:items-center md:gap-2">
                            <p>Welcome,{user.displayName}</p>
                            <button onClick={handleSignOut} className="btn">Log out</button>
                        </div>
                        :
                        <Link to='/login'>
                            <button className="btn bg-yellow-400 font-bold">Login</button>
                        </Link>
                } */}

            </div>
        </div>
    );
};

export default Navbar;