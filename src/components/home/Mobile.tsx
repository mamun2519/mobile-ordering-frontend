import React from "react";
import { IMobile } from "../../interface/mobile";

const Mobile = ({ mobile }: { mobile: IMobile }) => {
  return (
    <div className="w-full h-full border rounded-2xl shadow">
      <div className="  h-44  p-3 rounded-xl">
        <img src={mobile.url} className=" rounded-xl h-44 w-full p-2" alt="" />
      </div>
      <div className="p-3 mt-3 h-44 border-t">
        <h3 className="text-xl">{mobile.name}</h3>
        <div className="mt-1 flex  ">
          <div className=" w-28">
            <p>Release</p>
          </div>
          <p className="text-gray-600">{mobile.release}</p>
        </div>
        <div className="mt-1 flex ">
          <div className=" w-28">
            <p>Price</p>
          </div>
          <p className="text-red-500 font-bold">{mobile.price} BDT</p>
        </div>
        <div className="mt-1 flex ">
          <div className=" w-28">
            <p>Ram</p>
          </div>
          <p>{mobile.ram}</p>
        </div>
        <div className="mt-1 flex ">
          <div className=" w-28">
            <p>Rom</p>
          </div>
          <p>{mobile.rom}</p>
        </div>
        <div className="mt-1 flex ">
          <div className=" w-28">
            <p>Color</p>
          </div>
          <p>{mobile.color}</p>
        </div>
      </div>
      <div className="p-3 mt-1 ">
        <div
          // onClick={() => enrolledmobileHandler(mobile?._id)}
          className="w-full h-8 cursor-pointer bg-red-500 text-white rounded flex justify-center items-center"
        >
          <button>Enrolled Now</button>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
