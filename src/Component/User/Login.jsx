import { useContext } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
    const {signIn}=useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    console.log('location i n the login page', location);
    const handalLogin=e=>{
        e.preventDefault();
        console.log(e.currentTarget);
        const form =new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);
        signIn(email, password)
        .then((result) => {
            console.log(result.user);
            e.target.reset();
             // navigate after login
            //  navigate(location?.state ? location.state : '/');
            navigate('/');
          })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
    
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handalLogin}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-pink-600 text-white hover:bg-pink-600">Login</button>
                            </div>
                        </form>
                        <div className="text-center pb-8">
                            <Link to="/register">
                                Not have an account ? <span className="text-blue-600">Register here</span>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;