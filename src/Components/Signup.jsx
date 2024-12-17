import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [email, setEmail] = useState("");
    const [errors, setError] = useState({});
    const [isPassword, setIsPassword] = useState(true);
    const [otp, setOtp] = useState("");
    const [activeTab, setActiveTab] = useState("login");

    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validateOtp = (otp) => {
        const otpRegex = /^\d{6}$/;
        return otpRegex.test(otp);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!email) {
            newErrors.email = "Email is required!";
        } else if (!validateEmail(email)) {
            newErrors.email = "Please enter a valid email address!";
        }

        if (!isPassword) {
            if (!otp) {
                newErrors.otp = "OTP is required!";
            } else if (!validateOtp(otp)) {
                newErrors.otp = "OTP must be a 6-digit number";
            }
        }

        setError(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Successfully sumbited form");
        }
    };

    const handleTabChange = (tab) => {
        setActiveTab(tab);
        if (tab === "signup") {
            navigate("/signup");
        } else {
            navigate("/login");
        }
    };

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="w-full max-w-md p-8">
                <h2 className="text-lg font-bold mb-6 text-gray-700  ">WELCOME</h2>

                <form onSubmit={handleSubmit}>
               <div className="flex mb-6">
                        <button
                            onClick={() => handleTabChange("login")}
                            className={`w-1/2 py-2 font-semibold ${activeTab === "login"
                                    ? "bg-[#efb217] text-black" 
                                    : "bg-[#e2e8f0] text-gray-600" 
                                }`}
                        >
                            Log In
                        </button>

                        <button
                            onClick={() => handleTabChange("signup")}
                            className={`w-1/2 py-2 font-semibold ${activeTab === "signup"
                                    ? "bg-[#efb217] text-black" 
                                    : "bg-[#e2e8f0] text-gray-600" 
                                }`}
                        >
                            Sign Up
                        </button>
                    </div>

                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full px-4 py-2 border rounded focus:outline-none focus:bg-blue-100"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    <div style={{ display: "flex" }}>
                        <div className="flex items-center mb-8">
                            <button
                                className={`px-3 py-1 text-sm ${isPassword ? "bg-[#efb217] text-black font-semibold" : "bg-gray-200 text-gray-600"
                                    }`}
                                onClick={() => setIsPassword(true)}
                                type="button"
                            >
                                Password
                            </button>
                            <button
                                className={`px-2 py-1 text-sm mr-4 ${!isPassword ? "bg-[#efb217] text-black font-semibold" : "bg-gray-200 text-gray-600"
                                    }`}
                                onClick={() => setIsPassword(false)}
                                type="button"
                            >
                                OTP
                            </button>
                        </div>

                        <div style={{ display: "flex", flexDirection: "column", justifyContent: "end", }}>
                            <div>

                                {isPassword ? (
                                    <input
                                        type="password"
                                        placeholder="Password"
                                        className="w-full px-4 py-2 border rounded focus:outline-none   focus:bg-blue-100"
                                    />
                                ) : (
                                    <>
                                        <input
                                            type="text"
                                            placeholder="Enter OTP"
                                            value={otp}
                                            onChange={(e) => {
                                                const value = e.target.value;
                                                if (/^\d{0,6}$/.test(value)) {
                                                    setOtp(value);
                                                }
                                            }}
                                            className="w-full px-4 py-2 border rounded focus:outline-none focus:bg-blue-100"
                                        />
                                        {errors.otp && <p className="text-red-500 text-sm mt-1">{errors.otp}</p>}
                                    </>
                                )}
                            </div>
                            <div className="text-right mb-4">
                                <p className="text-sm text-gray-600 underline cursor-pointer">
                                    {isPassword ? "Forget Password?" : "Get OTP?"}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div style={{ display: "flex", justifyContent: "start", paddingTop: "0px" }}>

                        <input type="checkbox" style={{ accentColor: "#efb217", marginRight: "10px" }} />
                        <span style={{ width: "100vw", fontSize: "10px", color: "gray", marginTop: "10px", }}>Join Our Mailing List- Get updates on Rollbacks, special pricing, hot new items, gift ideas and more</span>
                    </div>

                    <div style={{ marginTop: "20px" }}>
                        <button type="submit" className="w-full py-2 mb-4 text-black bg-[#efb217] rounded hover:bg-[#efb217] font-semibold">
                            {activeTab === "login" ? "Login" : "Register"}
                        </button>
                        <div style={{ display: 'flex',marginTop:"-10px"}}>
                            <span style={{
                                fontSize: "12px", color: "gray",
                            }}>By continuing, you agree to Ubuy's <span style={{color: "black", fontWeight:"bold"}}>Term's and condition</span></span>
                        </div>
                    </div>

                </form>

                <div style={{ display: "flex", justifyContent: "center", paddingTop:"35px"}}>
                    <div className="flex justify-center gap-4">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                            style={{ width: "1.5rem", height: "1.5rem" }}
                            alt="Google"
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
                            style={{ width: "1.5rem", height: "1.5rem" }}
                            alt="Facebook"
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/731/731985.png"
                            style={{ width: "1.5rem", height: "1.5rem" }}
                            alt="Apple"
                        />
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/174/174861.png"
                            style={{ width: "1.5rem", height: "1.5rem" }}
                            alt="LinkedIn"
                        />
                    </div>
                    <div className="text-center text-sm mb-2 ml-5 font-bold">Login with Social Accounts</div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
