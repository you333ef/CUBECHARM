import React from "react";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";

const ForgotPassword = () => {
  return (
    <>
      <Header />
      <section className="bg-white mt-[8%] flex items-center justify-center">
        <div className="w-full max-w-lg px-4 py-8 sm:px-8 lg:px-16 lg:py-12">
          <h1 className="mt-3 text-2xl font-bold text-center text-gray-900 sm:text-3xl md:text-4xl">
            Reset your password
          </h1>

          <form
            action="#"
            className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-6"
          >
            <Input
              label="Email"
              type="email"
              placeholder="ex: email@example.com"
              name="email"
              className="mt-1 w-full rounded-md border-2 border-gray-200 bg-white p-5 text-sm text-gray-700 shadow-sm"
            />

            <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
              <Button
                name="Send Reset Email"
                type="submit"
                className="inline-block shrink-0 rounded-md border border-skyline-blue-600 bg-sky-blue px-12 py-3 w-full text-md font-bold text-white transition hover:bg-transparent hover:text-skyline-blue focus:outline-none focus:ring active:text-skyline-blue"
              />
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default ForgotPassword;
