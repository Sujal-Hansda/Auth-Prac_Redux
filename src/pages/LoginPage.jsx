
import React from "react";
import { Mail, Lock } from "lucide-react";
import { useAuth } from "../hooks/AuthHooks";

const LoginPage = () => {

  let {navigate,handleSubmit,register,errors,loginhandleSubmit} = useAuth();



  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">

      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>
          <p className="text-slate-400 mt-2">
            Login to your account
          </p>
        </div>

        <form onSubmit={handleSubmit(loginhandleSubmit)} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Email Address
            </label>

            <div className="flex items-center border border-slate-700 rounded-lg px-3 focus-within:border-indigo-500">
              <Mail size={18} className="text-slate-400" />

              <input
              {...register("email",{
                required:"email is required"
              })}
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent p-3 text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>
         { errors.email && <p className="text-red-500">{errors.email.message}</p>}

          {/* Password */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Password
            </label>

            <div className="flex items-center border border-slate-700 rounded-lg px-3 focus-within:border-indigo-500">
              <Lock size={18} className="text-slate-400" />

              <input
              {...register("password",{
                required:"password is required",
                minLength:{
                  value:8,
                  message:"minimum 8 letters required"
                }
              })}
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent p-3 text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>
          {errors.password && <p className="text-red-500">{errors.password.message}</p>}


          {/* Login Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Login
          </button>

        </form>

        <p className="text-center text-slate-400 text-sm mt-7">
          Don't have an account?
          <h5  onClick={()=>{navigate("/register")}} className="cursor-pointer text-indigo-400 ml-1 hover:underline">
            Register
          </h5>
        </p>

      </div>
    </div>
  );
};

export default LoginPage;
