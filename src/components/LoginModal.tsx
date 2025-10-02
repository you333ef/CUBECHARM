import React from "react";
import Input from "./Input";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "./Button";

interface LoginModalProps {
  isModalOpen: boolean;
  setIsmodalOpen: (isOpen: boolean) => void;
}

const LoginModal: React.FC<LoginModalProps> = ({
  isModalOpen,
  setIsmodalOpen,
}) => {
  const schemaValidation = yup.object().shape({
    email: yup.string().email("Invalid email.").required("Email is required."),
    password: yup.string().required("Password is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const submitHandler = (data: any) => {
    console.log(data);
    reset();
  };

  return (
    <>
      {isModalOpen && (
        <div
          id="login-modal"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        >
          <div className="relative bg-white rounded-lg shadow-lg w-full max-w-md mx-auto p-6">
            {/* Close button */}
            <button
              data-modal-target="login-modal"
              data-modal-toggle="login-modal"
              className="absolute top-[-20px] right-[-39px] font-bold rounded-full text-white  hover:text-gray-700 text-4xl w-10 h-10 flex items-center justify-center focus:outline-none"
              onClick={() => setIsmodalOpen(!isModalOpen)}
            >
              &times;
            </button>

            {/* Title */}
            <h2 className="text-2xl text-gray-600 font-bold text-center mb-5">
              Log In to Your Account
            </h2>

            {/* Form */}
            <form className="space-y-4" onSubmit={handleSubmit(submitHandler)}>
              <div className="flex flex-col items-start col-span-10">
                <Input
                  type="text"
                  placeholder="Email"
                  className={`w-full px-4 py-3 mb-1 ${
                    errors.email && "border border-red-500 outline-none"
                  } border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500`}
                  {...register("email")}
                />
                {errors.email && (
                  <p className="text-red-500 ml-1 text-sm">
                    {errors.email.message}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-start col-span-10">
                <Input
                  type="password"
                  placeholder="Password"
                  className={`w-full px-4 py-3 mb-1 ${
                    errors.password && "border-red-500"
                  } border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-500`}
                  {...register("email")}
                />
                {errors.password && (
                  <p className="text-red-500 ml-1 text-sm">
                    {errors.password.message}
                  </p>
                )}
              </div>
              {/*Forgot password link */}
              <div className="flex items-center justify-between">
                <Link
                  to="/forgot-password"
                  className="text-skyline-blue text-sm hover:underline"
                >
                  Forgot your password?
                </Link>
              </div>

              {/* Login button */}
              <Button
                name="Log in"
                className="w-full text-lg py-2 bg-skyline-blue text-white rounded-lg hover:bg-sky-blue"
              />
            </form>

            {/* Register */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Don't have an account on Occili?{" "}
                <Link
                  to="/signup"
                  className="text-skyline-blue hover:underline font-semibold"
                >
                  Register
                </Link>
              </p>
            </div>

            {/* Terms and privacy policy */}
            <div className="mt-6 text-xs text-center text-gray-500">
              <p>
                When registering and logging in, you agree to the{" "}
                <Link to="#" className="text-skyline-blue hover:underline">
                  terms of use of Occili
                </Link>{" "}
                and the{" "}
                <Link to="#" className="text-skyline-blue hover:underline">
                  privacy policy
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginModal;
