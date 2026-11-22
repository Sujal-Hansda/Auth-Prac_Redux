
import { User, Mail, Lock, Hand } from "lucide-react";
import { useAuth } from "../hooks/AuthHooks";

const RegisterPage = () => {


  let {navigate,registerHandleSubmit,register,handleSubmit,errors} = useAuth();


  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">

      <div className="w-full max-w-md bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-xl">

        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-white">
            Create Account
          </h1>
          <p className="text-slate-400 mt-2">
            Register to get started
          </p>
        </div>

        <form onSubmit={handleSubmit(registerHandleSubmit)} className="space-y-5">

          {/* Full Name */}
          <div>
            <label className="block text-sm text-slate-300 mb-2">
              Full Name
            </label>

            <div className="flex items-center border border-slate-700 rounded-lg px-3 focus-within:border-indigo-500">
              <User size={18} className="text-slate-400" />

              <input
              {...register("name",{
                  required:"name is required"
                }
              )}
                type="text"
                placeholder="Enter your full name"
                className="w-full bg-transparent p-3 text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}

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
          {errors.email && <p className="text-red-500">{errors.email.message}</p>}

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
                  minLength:
                  {
                    value:8,
                    message:"minimum 8 characters required"
                  }
                })}
                type="password"
                placeholder="Create a password"
                className="w-full bg-transparent p-3 text-white outline-none placeholder:text-slate-500"
              />
            </div>
          </div>
              {errors.password && <p className="text-red-500">{errors.password.message}</p>}

          {/* Register Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Create Account
          </button>

        </form>

        <p className="text-center text-slate-400 text-sm mt-7">
          Already have an account?
          <h5  onClick={()=>{navigate("/")}} className="cursor-pointer text-indigo-400 ml-1 hover:underline">
            Login
          </h5>
        </p>

      </div>
    </div>
  );
};

export default RegisterPage;
