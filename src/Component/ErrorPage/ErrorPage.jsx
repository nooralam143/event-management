import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="container mx-auto">
        
        <div className="text-center">
            <div className="mt-20">
                <h1 className=" font-extrabold text-2xl">404 - Page Not Found</h1>
                <p>Oops! The page you are looking for does not exist.</p>
            </div>
            <Link to="/"><button className="btn btn-primary text-white mt-5">Go back to home</button></Link>
        </div>
    </div>
    );
};

export default ErrorPage;