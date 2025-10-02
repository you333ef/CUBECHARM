import React from "react";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
import Input from "../../components/Input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "../../components/Image";
import { logo } from "../../assets/images";

const Login = () => {
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
      <section className="bg-white min-h-screen flex items-center justify-center">
        <div className="w-full -mt-[8%] max-w-lg px-4 py-8 sm:px-8 lg:px-16 lg:py-12">
          <Image
            src={logo}
            alt="Occili Logo"
            loading="lazy"
            width={290}
            className="mx-auto -mb-7"
          />
          <h1 className="text-lg -mb-3 font-bold text-center text-gray-900 sm:text-2xl md:text-2xl">
            Occili Admin Panel
          </h1>

          <form
            onSubmit={handleSubmit(submitHandler)}
            className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-6"
          >
            <div className="flex flex-col items-start col-span-10">
              <Input
                label="Email"
                type="email"
                placeholder="admin@example.com"
                className={`mt-1 -mb-2 w-full rounded-md ${
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
                label="Password"
                type="password"
                placeholder="********"
                className={`mt-1 -mb-2 w-full rounded-md ${
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
                name="Login"
                type="submit"
                onClick={handleSubmit(submitHandler)}
                className="inline-block shrink-0 rounded-md border border-skyline-blue-600 bg-skyline-blue px-12 py-3 w-full text-md font-bold text-white transition hover:bg-sky-blue hover:text-white focus:outline-none focus:ring active:text-skyline-blue"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
