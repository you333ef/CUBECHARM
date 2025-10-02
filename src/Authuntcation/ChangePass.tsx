import { useForm } from "react-hook-form";
import { logo } from "../assets/images";
import { useNavigate } from "react-router-dom";


const ChangePass = () => {
  // Initialize react-hook-form
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  // Handle form submission
  const onSubmit = (data: any) => {
    console.log("Change Password Data:", data);
  };

  const newPassword = watch("newPassword");

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
            Change your password to access CUBECHARM.
          </p>
        </div>

        {/* Divider */}
        <div className="flex items-center my-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="px-2 text-xs text-gray-400">Change Password</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Form Inputs */}
        <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
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

          {/* Old Password */}
          <div>
            <input 
              type="password" 
              placeholder="Current Password" 
              {...register("oldPassword", { 
                required: "Current password is required", 
                minLength: { value: 6, message: "Password must be at least 6 chars" }
              })}
              className="w-full rounded-lg border border-[#E5E7EB] p-3 text-sm focus:ring-2 focus:ring-[#4B3CF5] focus:outline-none"
            />
            {errors.oldPassword && (
              <p className="text-gray-400 text-xs mt-1">
                {errors.oldPassword.message as string}
              </p>
            )}
          </div>

          {/* New Password */}
          <div>
            <input 
              type="password" 
              placeholder="New Password" 
              {...register("newPassword", { 
                required: "New password is required", 
                minLength: { value: 6, message: "New password must be at least 6 chars" }
              })}
              className="w-full rounded-lg border border-[#E5E7EB] p-3 text-sm focus:ring-2 focus:ring-[#4B3CF5] focus:outline-none"
            />
            {errors.newPassword && (
              <p className="text-gray-400 text-xs mt-1">
                {errors.newPassword.message as string}
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
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePass;
