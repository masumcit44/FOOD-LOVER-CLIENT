import React from "react";
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className=" container  mt-5 text-center ">
      <h1 className="fw-bold text-warning ">Oops!</h1>
      <img
        src="https://png.pngtree.com/element_pic/16/11/14/4810d7467c24879d43006148e3c0c73a.jpg"
        alt=""
      />
      <h1 className="text-danger fs-1  ">404 page not found</h1>
    </div>
  );
};

export default Error;
