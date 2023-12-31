import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Register = () => {

    const {creatUser} = useContext(AuthContext)

    const handleRegister = (e) =>{
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photo_url = form.get('photo-url')
        console.log(name, email, password, photo_url)

        // creat user
        creatUser(email, password)
        .then((result) => {
            console.log(result.user)
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
                    <form onSubmit={handleRegister} className="card-body">
                        <h2 className="text-2xl text-center font-bold py-6 border-b">Register your account</h2>

                        {/* Name */}
                        <div className="form-control mt-4">
                            <label className="label">
                                <span className="label-text font-semibold">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
                        </div>

                        {/* Email */}
                        <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="Enter your email" className="input input-bordered" required />
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
                        </div>

                        {/* Photo URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-semibold">Photo URL</span>
                            </label>
                            <input type="text" name="photo-url" placeholder="Enter your photo URL" className="input input-bordered" required />
                        </div>

                        {/* Register Button */}
                        <div className="form-control mt-6">
                            <button className="btn btn-neutral normal-case">Register</button>
                        </div>
                        <p className="text-sm mt-2 text-center">Already have an account? <Link to={"/login"} className="text-error link-hover font-semibold">Login</Link></p>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;