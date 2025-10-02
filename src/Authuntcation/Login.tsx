import { useForm } from "react-hook-form";
import { logo } from "../assets/images";
import { FaGoogle } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Login = () => {
  // Initialize form using react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log("Register Data:", data);
  };

  // Watch password input for validation
  const password = watch("password");

  // Navigate to forget password page
  const navigate = useNavigate();
  const NAVIGATE = () => {
    navigate("/auth/forget");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#FFFFFF] p-3">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl px-6 py-6 mx-auto">
        
        {/* LOGO / Brand Name */}
        <div className="flex items-center justify-center mb-5">
          {/* <img src={logo} alt="logo" className="w-30 h-20 object-center" /> */}
          <h2 className="text-2xl font-extrabold text-[#111827] tracking-tight">
            CUBECHARM
          </h2>
        </div>

        {/* Small Description */}
        <div className="text-center mb-5">
          <p className="text-[#6B7280] text-sm">
            Log in to CUBECHORM and access your properties
          </p>
        </div>

        {/* Sign in with Google */}
        <button 
          type="button" 
          className="w-full flex items-center justify-center border border-[#E5E7EB] rounded-lg py-3 text-sm font-medium text-[#111827] hover:bg-gray-50 transition mb-5 transform hover:scale-105 duration-300"
        >
          <FaGoogle className="w-5 h-5 mr-2" />
          Sign up with Google
        </button>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="px-2 text-xs text-gray-400">OR SIGN UP WITH EMAIL</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Form Inputs */}
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3"></div>

          {/* Email */}
          <div>
            <input 
              type="email" 
              placeholder="Email address" 
              {...register("email", { required: "Email is required" })}
              className="w-full rounded-lg border border-[#E5E7EB] p-3 text-sm focus:ring-2 focus:ring-[#4B3CF5] focus:outline-none"
            />
            {errors.email && (
              <p className="text-gray-400 text-xs mt-1">
                {errors.email.message as string}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <input 
              type="password" 
              placeholder="Password" 
              {...register("password", { 
                required: "Password is required", 
                minLength: { value: 6, message: "Password must be at least 6 chars" }
              })}
              className="w-full rounded-lg border border-[#E5E7EB] p-3 text-sm focus:ring-2 focus:ring-[#4B3CF5] focus:outline-none"
            />
            {errors.password && (
              <p className="text-gray-400 text-xs mt-1">
                {errors.password.message as string}
              </p>
            )}
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center text-sm">
            <input 
              type="checkbox" 
              className="mr-2" 
              {...register("terms", { required: "You must agree" })}
            />
            <span className="text-[#111827]">
              I agree the <a href="#" className="text-[#4B3CF5] font-medium">Terms</a> and <a href="#" className="text-[#4B3CF5] font-medium">Privacy</a>
            </span>
          </div>
          {errors.terms && (
            <p className="text-gray-400 text-xs mt-1">
              {errors.terms.message as string}
            </p>
          )}

          {/* Submit Button */}
          <button 
            type="submit" 
            className="w-full py-3 rounded-lg text-white font-semibold shadow-md transition duration-300 bg-[#4B3CF5] hover:bg-[#362BBD] transform hover:scale-105"
          >
            Login
          </button>
        </form>

        {/* Forgot Password Link */}
        <p className="text-sm text-[#6B7280] mt-5 text-center">
          Forgot your password?{" "}
          <a href="#" className="text-[#4B3CF5] font-medium" onClick={NAVIGATE}>
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
