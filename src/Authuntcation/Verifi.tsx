
import { useForm } from "react-hook-form";
import { logo } from "../assets/images";
import { useNavigate } from "react-router-dom";

const Verifi = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log("Verification Data:", data);
  };

  
  const password = watch("password");

  // Navigate to login page
  const navigate = useNavigate();
  const NAVIGATE = () => {
    navigate("/auth/login");
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
            Verify your account to access CUBECHARM.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="px-2 text-xs text-gray-400">OTP Verification</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Form Inputs */}
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3"></div>

          {/* OTP Input */}
          <div>
            <input 
              type="text" 
              placeholder="Enter OTP" 
              {...register("otp", { 
                required: "OTP is required", 
                minLength: { value: 6, message: "OTP must be 6 digits" },
                maxLength: { value: 6, message: "OTP must be 6 digits" },
                pattern: { value: /^[0-9]+$/, message: "OTP must be numbers only" }
              })}
              className="w-full rounded-lg border border-[#E5E7EB] p-3 text-sm focus:ring-2 focus:ring-[#4B3CF5] focus:outline-none tracking-widest text-center"
            />
            {errors.otp && (
              <p className="text-gray-400 text-xs mt-1">
                {errors.otp.message as string}
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
              I agree the{" "}
              <a href="#" className="text-[#4B3CF5] font-medium">Terms</a> and{" "}
              <a href="#" className="text-[#4B3CF5] font-medium">Privacy</a>
            </span>
          </div>
          {errors.terms && (
            <p className="text-gray-400 text-xs mt-1">
              {errors.terms.message as string}
            </p>
          )}

          {/* Confirm Button */}
          <button 
            type="submit" 
            className="w-full py-3 rounded-lg text-white font-semibold shadow-md transition duration-300 bg-[#4B3CF5] hover:bg-[#362BBD] transform hover:scale-105"
          >
            Confirm
          </button>
        </form>

        {/* Login Link */}
        <p className="text-sm text-[#6B7280] mt-5 text-center">
          Return To Login?{" "}
          <a href="#" className="text-[#4B3CF5] font-medium" onClick={NAVIGATE}>
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Verifi;
