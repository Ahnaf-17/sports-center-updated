import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <h2>No page found </h2>
            <Link to='/'>
            <button>Back to Home</button>
            </Link>
        </div>
    );
};

export default ErrorPage;