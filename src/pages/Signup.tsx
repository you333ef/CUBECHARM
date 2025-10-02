import Input from "../components/Input";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import LoginModal from "../components/LoginModal";
import { useState } from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Signup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const schemaValidation = yup.object().shape({
    name: yup.string().required("Name is required."),
    email: yup.string().email("Invalid email.").required("Email is required."),
    phoneNumber: yup
      .string()
      .required("Phone Number is required.")
      .matches(/^-?\d*\.?\d*$/, "Phone number should contains 10 numbers."),
    city: yup.string().required("City is required."),
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
      <Header />
      <section className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-full max-w-lg px-4 py-8 sm:px-8 lg:px-16 lg:py-12">
          <h1 className="mt-6 text-2xl font-bold text-center text-gray-900 sm:text-3xl md:text-4xl">
            Welcome to Occili
          </h1>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-6"
          >
            <div className="flex flex-col items-start col-span-10">
              <Input
                label="Name"
                type="text"
                placeholder="ex: Ahmed Ahmed Ahmed"
                className={`mt-1 mb-1 w-full rounded-md ${
                  errors.name && "border border-red-500"
                } border-2 border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm`}
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-sm ml-1">
                  {errors.name?.message}
                </p>
              )}
            </div>

            <div className="flex flex-col items-start col-span-10">
              <Input
                label="Email"
                type="email"
                placeholder="ex: email@example.com"
                className={`mt-1 mb-1 w-full rounded-md ${
                  errors.email && "border border-red-500"
                } border-2 border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm`}
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-sm ml-1">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start col-span-10">
              <Input
                label="Phone"
                type="number"
                placeholder="ex: 0100998870"
                className={`mt-1 mb-1 w-full rounded-md ${
                  errors.phoneNumber && "border border-red-500"
                } border-2 border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm`}
                {...register("phoneNumber")}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 ml-1 text-sm">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start col-span-10">
              <Input
                label="City"
                type="text"
                placeholder="ex: Cairo"
                className={`mt-1 mb-1 w-full rounded-md ${
                  errors.city && "border border-red-500"
                } border-2 border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm`}
                {...register("city")}
              />
              {errors.city && (
                <p className="text-red-500 text-sm ml-1">
                  {errors.city.message}
                </p>
              )}
            </div>
            <div className="flex flex-col items-start col-span-10">
              <Input
                label="Password"
                type="password"
                placeholder="********"
                className={`mt-1 mb-1 w-full rounded-md ${
                  errors.password && "border border-red-500"
                } border-2 border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm`}
                {...register("password")}
              />
              {errors.password && (
                <p className="text-red-500 ml-1 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="col-span-10 sm:flex sm:items-center sm:gap-4">
              <Button
                name="Create Account"
                type="submit"
                onClick={handleSubmit(submitHandler)}
                className="inline-block shrink-0 rounded-md border border-skyline-blue-600 bg-skyline-blue px-12 py-3 w-full text-md font-bold text-white transition hover:bg-sky-blue hover:text-white focus:outline-none focus:ring active:text-skyline-blue"
              />
            </div>
            <div className="col-span-6 mr-2 mx-auto mb-[3rem] md:mb-0 lg:mb-0 sm:flex sm:items-center sm:gap-4">
              <p className="mt-4 text-sm text-gray-500 sm:mt-0">
                Already have an account?
                <Link
                  onClick={() => setIsModalOpen(!isModalOpen)}
                  to="#"
                  className="text-gray-700 underline ml-2"
                >
                  Log in
                </Link>
              </p>
            </div>
          </form>
        </div>
      </section>
      <LoginModal isModalOpen={isModalOpen} setIsmodalOpen={setIsModalOpen} />
    </>
  );
};

export default Signup;
