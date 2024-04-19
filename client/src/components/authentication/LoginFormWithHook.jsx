import React, { useState } from "react";
import { useForm } from "react-hook-form";

const LoginFormWithHook = () => {
  const [userData, setuserData] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const onDataSubmit = (data) => {
    if (isValid) {
      reset();
    }
    console.log(data);
    setuserData(data);
  };

  const handlePasswordValidation = (p) => {
    const regex = /^(?=.*[!@#$%^&*])(?=.*\d)(?=.*[A-Z]).{8,}$/;
    return (
      regex.test(p) ||
      "Password must contain a special character, a number, and an uppercase letter"
    );
  };
  return (
    <section className="mt-14">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-4xl font-bold leading-tight text-black">
            Sign In With Hook Form
          </h2>

          <form className="mt-8" onSubmit={handleSubmit(onDataSubmit)}>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor=""
                  className="text-base font-medium text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="email"
                    placeholder="Email"
                    {...register("email", { required: "Email is required" })}
                  ></input>
                  {errors.email && (
                    <p className="text-red-500 text-xs italic">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="password"
                    placeholder="Password"
                    {...register("password", {
                      required: "Password is required",
                      validate: handlePasswordValidation,
                    })}
                  ></input>
                  {errors.password && (
                    <p className="text-red-500 text-xs italic">
                      {errors.password.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor=""
                    className="text-base font-medium text-gray-900"
                  >
                    Username
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    className="flex h-10 w-full rounded-md border border-gray-300 bg-transparent px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
                    type="name"
                    placeholder="name"
                    {...register("username", {
                      required: "Username is required",
                      maxLength: {
                        value: 8,
                        message: "Username should not exceed 8 characters",
                      },
                    })}
                  ></input>
                  {errors.username && (
                    <p className="text-red-500 text-xs italic">
                      {errors.username.message}
                    </p>
                  )}
                </div>
              </div>
              <p className="mt-2  text-sm text-gray-600 ">
                Don't have an account?
                <span className="font-semibold text-black transition-all duration-200 hover:underline ms-1 cursor-pointer">
                  Create a free account
                </span>
              </p>
              <div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center rounded-md bg-black px-3.5 py-2.5 font-semibold leading-7 text-white hover:bg-black/80"
                >
                  Get started
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div>
        <h1>{userData.email}</h1>
      </div>
    </section>
  );
};

export default LoginFormWithHook;
