import {useNavigate} from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="container mx-auto px-4 py-9 md:max-w-xl">
                <div className="border bg-white shadow-lg p-6 rounded-xl">
                    <h1 className="font-extrabold text-2xl text-center">Login to your account</h1>
                    <form action="" className="mt-9 space-y-4">
                        <input
                            className="w-full p-4 rounded-full focus:outline-none border"
                            placeholder="Enter Email"
                            type="email"
                        />
                        <input
                            className="w-full p-4 rounded-full focus:outline-none border"
                            placeholder="Enter Password"
                            type="password"
                        />
                    </form>

                    <div className="text-xs flex justify-between items-center mt-5">
                        <div className="flex space-x-2 items-center">
                            <input type="checkbox" id="terms" />
                            <label htmlFor="terms" className="text-gray-600">I agree to terms & Policy.</label>
                        </div>
                        <div className="text-blue-500 cursor-pointer hover:underline">Learn More</div>
                    </div>
                    <button
                        className="w-full py-2 rounded-full bg-blue-600 text-white mt-5 hover:bg-blue-700"
                    >
                        Submit & Login
                    </button>

                    <div className="flex items-center w-full mt-5 text-xs">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="px-4 text-gray-500">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <div className="mt-5 flex justify-center space-x-4">
                        <button className="px-6 py-3 bg-blue-800 hover:bg-blue-900 text-white rounded-md">
                            Facebook
                        </button>
                        <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-md">
                            Google+
                        </button>
                    </div>
                    <p className="mt-5 text-center text-xs">
                        Don't have an account? <a href={'/auth/register'} className="text-blue-500 hover:underline">Create one now</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;
