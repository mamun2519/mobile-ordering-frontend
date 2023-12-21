import { useState } from "react";
import { IMobile } from "../../interface/mobile";
import { useAllMobileQuery } from "../../redux/api/mobileApi";
import Mobile from "./Mobile";
import { IoIosArrowDown } from "react-icons/io";

import { IoChevronUpSharp } from "react-icons/io5";

const AllMobiles = () => {
  const [brandCollaps, setBrandCollapse] = useState(true);
  const [ramCollaps, setRamCollapse] = useState(true);
  const [romCollaps, setRomCollapse] = useState(false);
  const [colorCollaps, setColorCollapse] = useState(false);
  const [butteryCollaps, setBatteryCollapse] = useState(false);
  const { data } = useAllMobileQuery({ limit: 10 });

  return (
    <div className="my-20 container mx-auto lg:px-0 px-4">
      <h3 className="text-center text-3xl ">All Mobiles</h3>

      <div className="flex gap-5 mt-20">
        <div className=" w-96 border h-full shadow-sm rounded ">
          <div className=" my-3">
            {" "}
            <div className="p-2">
              <input
                className="w-full h-12 border outline-blue-300 rounded p-2 text-xl"
                type="text"
                placeholder="Search by name"
              />
            </div>
            <div className="mt-1 px-3">
              <div className=" flex justify-between items-center">
                <h3 className=" text-xl">Top Brand</h3>
                <button
                  onClick={() => setBrandCollapse(!brandCollaps)}
                  className="text-xl"
                >
                  {brandCollaps ? <IoIosArrowDown /> : <IoChevronUpSharp />}
                </button>
              </div>
              {brandCollaps &&
                data?.brand?.map((brand: { title: string }) => (
                  <div className="pt-1 flex gap-4" key={brand.title}>
                    <input type="checkbox" name="" id="" />
                    {brand.title}
                  </div>
                ))}
            </div>
            <div className="mt-3 px-3">
              <h3 className=" text-xl"></h3>
              <div className=" flex justify-between items-center">
                <h3 className=" text-xl">Category By Ram</h3>
                <button
                  onClick={() => setRamCollapse(!ramCollaps)}
                  className="text-xl"
                >
                  {ramCollaps ? <IoIosArrowDown /> : <IoChevronUpSharp />}
                </button>
              </div>
              {ramCollaps &&
                data?.ram?.map((ram: { title: string }) => (
                  <div className="pt-1 flex gap-4" key={ram.title}>
                    <input type="checkbox" name="" id="" />
                    {ram.title}
                  </div>
                ))}
            </div>
            <div className="mt-3 px-3">
              <div className=" flex justify-between items-center">
                <h3 className=" text-xl">Category By Rom</h3>
                <button
                  onClick={() => setRomCollapse(!romCollaps)}
                  className="text-xl"
                >
                  {romCollaps ? <IoIosArrowDown /> : <IoChevronUpSharp />}
                </button>
              </div>
              {romCollaps &&
                data?.rom?.map((rom: { title: string }) => (
                  <div className="pt-1 flex gap-4" key={rom.title}>
                    <input type="checkbox" name="" id="" />
                    {rom.title}
                  </div>
                ))}
            </div>
            <div className="mt-3 px-3">
              <div className=" flex justify-between items-center">
                <h3 className=" text-xl">Category By Color</h3>
                <button
                  onClick={() => setColorCollapse(!colorCollaps)}
                  className="text-xl"
                >
                  {colorCollaps ? <IoIosArrowDown /> : <IoChevronUpSharp />}
                </button>
              </div>
              {colorCollaps &&
                data?.color?.map((color: { title: string }) => (
                  <div className="pt-1 flex gap-4" key={color.title}>
                    <input type="checkbox" name="" id="" />
                    {color.title}
                  </div>
                ))}
            </div>
            <div className="mt-3 px-3">
              <div className=" flex justify-between items-center">
                <h3 className=" text-xl">Category By Battery</h3>
                <button
                  onClick={() => setBatteryCollapse(!butteryCollaps)}
                  className="text-xl"
                >
                  {butteryCollaps ? <IoIosArrowDown /> : <IoChevronUpSharp />}
                </button>
              </div>
              <h3 className=" text-xl"></h3>
              {butteryCollaps &&
                data?.battery?.map((battery: { title: string }) => (
                  <div className="pt-1 flex gap-4" key={battery.title}>
                    <input type="checkbox" name="" id="" />
                    {battery.title}
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="  grid lg:grid-cols-4 gap-5 grid-cols-1 w-full">
          {data?.mobile?.map((mobile: IMobile) => (
            <Mobile key={mobile._id} mobile={mobile} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMobiles;
