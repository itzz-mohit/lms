import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToastComponent({ message, type }) {
  const notify = () => {
    switch (type) {
      case "success":
        toast.success(message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: 3000, // Auto close after 3 seconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        break;
      case "error":
        toast.error(message, {
          position: toast.POSITION.TOP_CENTER,
          autoClose: false, // Do not auto close error toasts
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: false,
          progress: undefined,
        });
        break;
      default:
        toast.info(message);
    }
  };

  return (
    <div className="fixed inset-0 flex items-end justify-center px-4 py-6 pointer-events-none sm:p-6 sm:items-end sm:justify-end z-50">
      <ToastContainer />
    </div>
  );
}

export default ToastComponent;
