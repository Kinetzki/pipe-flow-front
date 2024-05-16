import React from "react";
import { useNavigate } from "react-router-dom";
import bg from "../assets/bg.jpg";

function Intro() {
  const navigate = useNavigate();

  return (
    <div>
      <img src={bg} alt="" className="w-screen h-screen" />

      <button
        onClick={() => {
          navigate("/calculator");
        }}
        className="absolute bottom-10 right-10 bg-cyan-500 px-8 py-2 rounded-full text-cyan-200 font-semibold font-Inter"
      >
        Start Calculation
      </button>

    </div>
  );
}

export default Intro;
