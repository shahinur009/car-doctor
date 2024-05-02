import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from '../../assets/images/login/login.svg'
import { AuthContext } from "../../Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Signup = () => {
    const { createUser } = useContext(AuthContext)
    const location = useLocation();
    const navigate = useNavigate();

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const user = { name, email, password }
        console.log(user)

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "top-center",
                    icon: "success",
                    title: "Sign Up Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                
            })
            .catch(error => console.error(error))
    }
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className=" w-1/2 mr-10">
                        <img src={logo} alt="" />
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        <div className="w-full max-w-md p-8 space-y-3 rounded-xl dark:bg-gray-50 dark:text-gray-800">
                            <h1 className="text-2xl font-bold text-center">Sign Up</h1>
                            <form onSubmit={handleSignUp} action="" className="space-y-6">
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block dark:text-gray-600">Name</label>
                                    <input type="text" name="name" id="username" placeholder="Username" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="username" className="block dark:text-gray-600">Email</label>
                                    <input type="email" name="email" placeholder="Email" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                </div>
                                <div className="space-y-1 text-sm">
                                    <label htmlFor="password" className="block dark:text-gray-600">Password</label>
                                    <input type="password" name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                                    <div className="flex justify-end text-xs dark:text-gray-600">
                                        <a rel="noopener noreferrer" href="#">Forgot Password?</a>
                                    </div>
                                </div>
                                <input className='btn btn-primary w-1/2 items-center' type='submit' value='Sign up'></input>
                                <p className="text-xs text-center sm:px-6 dark:text-gray-600">Do not have an account?
                                    <Link to='/login' rel="noopener noreferrer" href="#" className="underline dark:text-gray-800">Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signup;