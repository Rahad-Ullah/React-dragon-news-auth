import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Login = () => {

    const {logIn} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()
    console.log('location from login page',location)

    const handleLogin = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        logIn(email, password)
        .then((result) => {
            console.log(result.user)

            // navigate after login
            navigate(location?.state || '/')
            
        }).catch((err) => {
            console.log(err)
        });
    }
    
    return (
        <div className="bg-base-200 mx-auto px-4 md:px-6 lg:px-8">
            <Navbar></Navbar>
            <div className="hero min-h-screen pb-16">
                <div className="hero-content w-full p-0">
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100 rounded">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className="text-2xl text-center font-bold py-6 border-b">Login your account</h2>
                        <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral normal-case">Login</button>
                        </div>
                            <p className="text-sm mt-2 text-center">Don&apos;t have an account? <Link to={"/register"} className="text-error link-hover font-semibold">Register</Link></p>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;