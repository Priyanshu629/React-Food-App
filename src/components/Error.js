import React from "react";
import { useRouteError } from "react-router-dom";
const Error = () => {
    const error=useRouteError();
    console.log(error)
  return (
    <div className="error-container">
      <h1>OOps! Page Not Found</h1>
      <h2>{error.data}</h2>
    </div>
  );
};

export default Error;
