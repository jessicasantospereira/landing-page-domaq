import React from "react";
import FormLogin from "../Form";

const CardLogin: React.FC = () => {
  return (
    <div className="w-96 h-96 bg-gray rounded-3xl shadow-sm shadow-green-50">
      <h2 className="text-teal-950 font-bold text-center">DOMAQ</h2>
      <FormLogin />
    </div>
  );
};

export default CardLogin;
