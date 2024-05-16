import React, { useEffect, useState } from "react";
import Pipe from "../panels/Pipe";
import Fluid from "../panels/Fluid";
import Calculation from "../panels/Calculation";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import Results from "../panels/Results";
// const data = [
//   {
//     pipe_size: "1/8",
//     outside_diameter: 0.405,
//     schedules: ["10S", "40ST, 40S", "80XS, 80S"],
//     wall_thickness: [0.049, 0.068, 0.095],
//     inside_diameter: [0.0307, 0.269, 0.215],
//     metal: [0.055, 0.072, 0.093],
//     flow: [0.00051, 0.0004, 0.00025],
//     outside: [0.106, 0.106, 0.106],
//     inside: [0.0804, 0.0705, 0.0563],
//     gal: [0.231, 0.179, 0.113],
//     water: [115.5, 89.5, 56.5],
//     weight: [0.19, 0.24, 0.31],
//   },
// ];

function Home() {
  const [panel, setPanel] = useState("pipe");
  const [values, setValues] = useState({});
  const [length, setLength] = useState(0);
  const [roughness, setRoughness] = useState(0);
  const [substance, setSubstance] = useState({});
  const [answer, setAnswer] = useState({});
  const [flowRate, setFlowRate] = useState(0);
  const [reynolds, setReynolds] = useState(0);
  const [friction, setFriction] = useState(0);
  const [pressureDrop, setPressureDrop] = useState(0);

  const navigate = useNavigate();
  useEffect(() => {
    console.log(values);
    console.log(length);
    console.log(roughness);
    console.log(substance);
  }, [values, length, roughness, substance]);

  return (
    <div className="w-full flex flex-col p-6 bg-slate-300">
      <div className="bg-slate-200 p-5 border-slate-400 border-[1px] rounded-2xl">
        <h1 className="p-10 text-[30px] font-semibold font-Inter flex items-center">
          <span>
            <img
              src={logo}
              alt=""
              className="w-[80px] cursor-pointer hover:scale-[1.1] duration-[0.4s]"
              onClick={() => {
                navigate("/");
              }}
            />
          </span>
          PIPE FLOW CALCULATOR
        </h1>
        <div className="flex gap-1 font-Poppins font-semibold border-b-[1px] border-slate-800">
          <h1
            className={
              "cursor-pointer px-5 py-1 " +
              (panel === "pipe" ? "bg-slate-300" : "bg-transparent")
            }
            onClick={() => {
              setPanel("pipe");
            }}
          >
            Pipe Data
          </h1>
          <h1
            className={
              "cursor-pointer px-5 py-1 " +
              (panel === "fluid" ? "bg-slate-300" : "bg-transparent")
            }
            onClick={() => {
              setPanel("fluid");
            }}
          >
            Fluid Data
          </h1>
          <h1
            className={
              "cursor-pointer px-5 py-1 " +
              (panel === "calc" ? "bg-slate-300" : "bg-transparent")
            }
            onClick={() => {
              setPanel("calc");
            }}
          >
            Calculation
          </h1>
          <h1
            className={
              "cursor-pointer px-5 py-1 " +
              (panel === "results" ? "bg-slate-300" : "bg-transparent")
            }
            onClick={() => {
              setPanel("results");
            }}
          >
            Results
          </h1>
        </div>
      </div>

      <hr className="m-5" />

      {panel === "pipe" && (
        <Pipe
          setValues={setValues}
          setLength={setLength}
          setRoughness={setRoughness}
        />
      )}

      {panel === "fluid" && <Fluid setSubstance={setSubstance} />}

      {panel === "calc" && (
        <Calculation
          values={values}
          length={length}
          roughness={roughness}
          substance={substance}
          setFlow={setFlowRate}
          setRey={setReynolds}
          setFr={setFriction}
          setPr={setPressureDrop}
        />
      )}
      {panel === "results" && (
        <Results
          values={values}
          length={length}
          roughness={roughness}
          substance={substance}
          flowRate={flowRate}
          reynolds={reynolds}
          friction={friction}
          pressureDrop={pressureDrop}
        />
      )}
    </div>
  );
}

export default Home;
