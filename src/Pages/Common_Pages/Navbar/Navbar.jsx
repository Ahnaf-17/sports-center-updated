import { Link, NavLink } from "react-router-dom";

const Navbar = () => {


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

                <img src="https://i.ibb.co/xqrZZ95/web-logo.png" alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {/* <img src={avatar} /> */}
                    </div>
                </label>

                <Link to='/login'>
                    <button className="btn">Login</button>
                </Link>

            </div>
        </div>
    );
};

export default Navbar;