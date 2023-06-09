import React from "react";

const Spinner = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border"
        role="status"
        style={{ width: "3rem", height: "3rem" }}
      ></div>
    </div>
  );
};

export default Spinner;
