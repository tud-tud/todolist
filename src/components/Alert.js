import { useEffect } from "react";
import React from "react";

const Alert = ({ msg, type, setAlert, list }) => {
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setAlert({ show: false, msg: "", type: "" });
    }, 2000)
    return() => clearTimeout(timeOut)
    //  eslint-disable-next-line
  }, [list]);

  return (
    <div className="alert-container">
      <p className={`alert ${type}`}>{msg}</p>
    </div>
  );
};

export default Alert;
