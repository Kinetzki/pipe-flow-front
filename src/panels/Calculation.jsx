import axios from "axios";
import React, { useEffect, useState } from "react";
import are from "../assets/area.png";
import flow from "../assets/flowrate.png";
import reyn from "../assets/reynolds.png";
import fri from "../assets/friction.png";
import pre from "../assets/pressure.png";

function Calculation({ values, length, roughness, substance, setFlow, setRey, setFr, setPr }) {
  const [flowRate, setFlowRate] = useState(0);
  const [reynolds, setReynolds] = useState(0);
  const [friction, setFriction] = useState(0);
  const [pressureDrop, setPressureDrop] = useState(0);
  const [area1, setArea1] = useState(0);
  const [radiuss, setRadius] = useState(0);
  const [diameterr, setDiameter] = useState(0);
  const [velocityy, setVelocity] = useState(0);
  const [densityy, setDensity] = useState(0);
  const [viscosityy, setViscosity] = useState(0);

  useEffect(() => {
    console.log(values);
    console.log(length);
    console.log(roughness);
    console.log(substance);
  }, []);

  const solveFlowRate = async () => {
    const diam = values.inside_diameter / 39.37;
    setDiameter(diam);
    const radius = diam / 2;
    setRadius(radius);
    const area = Math.PI * Math.pow(radius, 2);
    setArea1(area);
    const flowrate = substance.velocity * area;
    setFlowRate(flowrate);
    setFlow(flowrate);
    console.log(flowrate);

    const density = substance.density;
    setDensity(density);
    const velocity = substance.velocity;
    setVelocity(velocity);
    const viscosity = substance.viscosity;
    setViscosity(viscosity);
    const re = (density * velocity * diam) / viscosity;
    setReynolds(re);
    setRey(re);

    const data = { re: re, roughness: roughness };
    console.log(data);
    var frict = 0;
    try {
      const response = await axios.post(
        "https://desireeDianne.pythonanywhere.com/friction",
        data
      );
      console.log(response.data * 10);
      frict = response.data * 10;
      setFriction(frict);
      setFr(frict);
    } catch (err) {}
    const pressure =
      (frict * length * Math.pow(velocity, 2)) / (2 * 9.81 * diam);
    console.log(pressure);
    setPressureDrop(pressure);
    setPr(pressure);
  };

  useEffect(() => {
    solveFlowRate();
  }, []);

  return (
    <>
    <h1 className="font-Poppins font-semibold">Calculations</h1>
    <div className="flex flex-wrap gap-[90px] px-[50px] justify-around">
      <h1 className="flex items-center gap-10 font-Poppins font-semibold border-[1px] border-slate-200 bg-white p-5 rounded-xl shadow-black shadow-md hover:scale-[1.2] duration-[0.4s] hover:rotate-[360deg]">
        Area:{" "}
        <span className="flex flex-col">
          <img src={are} alt="" className="h-[70px] mx-2" />
          <ul className="flex flex-col">
            <li>d = {diameterr} m</li>
            <li>r = {radiuss} m</li>
            <li>A = {area1} m²</li>
          </ul>{" "}
        </span>
      </h1>

      <h1 className="flex items-center gap-10 font-Poppins font-semibold border-[1px] border-slate-200 bg-white p-5 rounded-xl shadow-black shadow-md hover:scale-[1.2] duration-[0.4s] hover:rotate-[-360deg]">
        Flow Rate:{" "}
        <span className="flex flex-col">
          <img src={flow} alt="" className="h-[70px] mx-2" />
          <ul className="flex flex-col">
            <li>d = {velocityy} m/s</li>
            <li>A = {area1} m²</li>
            <li>Q = {flowRate} m³/s</li>
          </ul>{" "}
        </span>
      </h1>
      <h1 className="flex items-center gap-10 font-Poppins font-semibold border-[1px] border-slate-200 bg-white p-5 rounded-xl shadow-black shadow-md hover:scale-[1.2] duration-[0.4s] hover:rotate-[360deg]">
        Reynolds:{" "}
        <span className="flex flex-col">
          <img src={reyn} alt="" className="h-[80px] mx-2" />
          <ul>
            <li>ρ = {densityy} kg/m³</li>
            <li>d = {diameterr} m</li>
            <li>V = {velocityy} m/s</li>
            <li>μ = {viscosityy} cP</li>
            <li>Re = {reynolds}</li>
          </ul>
        </span>
      </h1>
      <h1 className="flex items-center gap-10 font-Poppins font-semibold border-[1px] border-slate-200 bg-white p-5 rounded-xl shadow-black shadow-md hover:scale-[1.2] duration-[0.4s] hover:rotate-[-360deg]">
        Friction:{" "}
        <span className="flex flex-col">
          <img src={fri} alt="" className="h-[80px] mx-2" />
          <ul>
            <li>k = {roughness} m</li>
            <li>d = {diameterr} m</li>
            <li>Re = {reynolds}</li>
            <li>f = {friction}</li>
          </ul>
        </span>
      </h1>
      <h1 className="flex items-center gap-10 font-Poppins font-semibold border-[1px] border-slate-200 bg-white p-5 rounded-xl shadow-black shadow-md hover:scale-[1.2] duration-[0.4s] hover:rotate-[360deg]">
        Pressure Drop:{" "}
        <span className="flex flex-col">
          <img src={pre} alt="" className="h-[80px] mx-2" />
          <ul>
            <li>f = {friction}</li>
            <li>L = {length} m</li>
            <li>V = {velocityy} m/s</li>
            <li>g = 9.81 m/s</li>
            <li>d = {diameterr} m</li>
            <li>ΔP = {pressureDrop} Pa</li>
          </ul>
        </span>
      </h1>
    </div>
    </>
  );
}

export default Calculation;
