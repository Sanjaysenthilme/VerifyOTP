import React,{useState} from "react";
import NavBar from "./NavBar";
import { useLocation,useNavigate } from "react-router-dom";

const Verification = () => {
    const location = useLocation();
    const [OtpVerify, setOtpVerify] = useState()
    const {sendOtp,email} = location.state;

    const navigate = useNavigate();
    // console.log(sendOtp);
    const VerifyOtp = ()=>{
        if(OtpVerify === sendOtp){
            alert('verified your email')
            navigate('/login-page');
        }
        else if(OtpVerify!==sendOtp){
            alert('Please enter valid OTP')
        }
    }
  return (
    <div className="w-full">
      <NavBar />

      <div className="w-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className="mt-1 text-center text-3xl font-extrabold text-gray-900">
                        Verify your email
                    </h2>
                    <p className="mt-2 font-semibold">Enter 8 digit code you have received on <br/><span className="text-lg bold mt-9 underline text-pink-600">{email}</span></p>
                </div>

                <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-xl sm:px-10">
                        <form className="space-y-6 ">
                            <div className="">
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >  
                                   Code
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        autoComplete="name"
                                        required
                                        placeholder="Enter"
                                        onChange={(e)=> setOtpVerify(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    onClick={VerifyOtp}
                                    className="uppercase w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                   Verify
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    </div>
  );
};

export default Verification;
