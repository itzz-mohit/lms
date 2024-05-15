import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify"; // Added ToastContainer import
import ToastComponent from "../Toast/Toast";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const initialValues = {
    email: "",
    password: "",
  };
  const [toastProps, setToastProps] = useState({});
  const [userData, setUserData] = useState(initialValues);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
    setUserData(initialValues);
    setToastProps({
      message: "Login successful!",
      type: "success",
    });
  };

  useEffect(() => {
    // Call the notify function when toastProps changes
    if (toastProps.message && toastProps.type) {
      notify();
    }
  }, [toastProps]);

  const notify = () => {
    switch (toastProps.type) {
      case "success":
        toast.success(toastProps.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;
      case "error":
        toast.error(toastProps.message, {
          position: "top-right",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        break;
      default:
        toast.info(toastProps.message);
    }
  };

  return (
    <section className="mt-14">
      <div className="flex items-center justify-center px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="xl:mx-auto xl:w-full xl:max-w-sm 2xl:max-w-md">
          <h2 className="text-center text-4xl font-bold leading-tight text-black">
            Sign In
          </h2>

          <form className="mt-8" onSubmit={handleSubmit}>
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
                    value={userData.email}
                    onChange={(e) =>
                      setUserData({ ...userData, email: e.target.value })
                    }
                  ></input>
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
                    value={userData.password}
                    onChange={(e) =>
                      setUserData({ ...userData, password: e.target.value })
                    }
                  ></input>
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
      <ToastComponent {...toastProps} />
    </section>
  );
};

export default Login;
