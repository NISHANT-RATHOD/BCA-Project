import React, { useState } from "react";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";


const Login = ({ setToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type,setType] = useState('password');
  
  const onSubmitHandler = async (e) => {
    try {
      e.preventDefault();
      const response = await axios.post(backendUrl + "/api/user/admin", {
        email,
        password,
      });
      if (response.data.success) {
        setToken(response.data.token);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full">
      <div className="bg-white shadow-md rounded-lg px-8 py-6 max-w-md">
        <h1 className="text-2xl font-bold mb-4">Admin Panel</h1>
        <form onSubmit={onSubmitHandler} action="">
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">
              Email Address
            </p>
            <input
              onChange={(e) => {
                setEmail("admin@admin.com");
              }}
              value={email}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="email"
              placeholder="your@email.com"
              required
            />
          </div>
          <div className="mb-3 min-w-72">
            <p className="text-sm font-medium text-gray-700 mb-2">Password</p>
            <input
              onChange={(e) => {
                setPassword("admin");
              }}
              value={password}
              className="rounded-md w-full px-3 py-2 border border-gray-300 outline-none"
              type="password"
              placeholder="Enter your password"
              required
            />
             <img onClick={(e)=>{e.target.src.split('/').pop()=== "eye-C-7VnmhL.png"?e.target.src=assets.hide_icon:e.target.src=assets.show_icon;type=='password'?setType('text'):setType('password')}} className="w-5 h-5 z-50 cursor-pointer relative bottom-8 left-64" src={assets.show_icon} alt="" /> 
          </div>
          {/* <button type='submit' className='mt-2 w-full py-2 px-4 rounded-md text-white bg-black'>Login</button> */}
          <button
            type="submit"
            className="rounded-md border-2 w-full  mt-2 border-black bg-white px-3 py-2 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-md active:shadow-none"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
