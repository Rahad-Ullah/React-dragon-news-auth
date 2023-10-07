import { Link } from "react-router-dom";

const Error = () => {
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-9xl mb-4">404</h1>
            <p className="text-lg">Oops!! Page not found</p>
            <Link to={"/"}><button className="btn btn-warning mt-4">Go Home</button></Link>
        </div>
    );
};

export default Error;