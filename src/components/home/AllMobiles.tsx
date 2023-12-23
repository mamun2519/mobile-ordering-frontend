import { useState } from "react";
import { IMobile } from "../../interface/mobile";
import { useAllMobileQuery } from "../../redux/api/mobileApi";
import Mobile from "./Mobile";
import { IoIosArrowDown } from "react-icons/io";

import { IoChevronUpSharp } from "react-icons/io5";

const AllMobiles = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageLimit, setLimit] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [brandSelect, setBrand] = useState("");
  const [ramSelect, setRam] = useState("");
  const [romSelect, setRom] = useState("");
  const [colorSelect, setColor] = useState("");
  const [batterySelect, setBattery] = useState("");
  const [brandCollops, setBrandCollapse] = useState(true);
  const [ramCollops, setRamCollapse] = useState(true);
  const [romCollops, setRomCollapse] = useState(false);
  const [colorCollops, setColorCollapse] = useState(false);
  const [butteryCollops, setBatteryCollapse] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const query: Record<string, any> = {};
  // const handlePageChange = (_event: string, page: number) => {
  //   setCurrentPage(page);
  // };
  query["page"] = currentPage;
  query["limit"] = pageLimit;
  //   query["sortBy"] = sortBy;
  if (searchTerm) {
    query["searchTerm"] = searchTerm;
  }
  if (brandSelect) {
    query["brand"] = brandSelect;
  }
  if (ramSelect) {
    query["ram"] = ramSelect;
  }
  if (romSelect) {
    query["rom"] = romSelect;
  }
  if (colorSelect) {
    query["color"] = colorSelect;
  }
  if (batterySelect) {
    query["battery"] = batterySelect;
  }

  const { data } = useAllMobileQuery(query);

  console.log(searchTerm);
  return (
    <div className="my-20 container mx-auto lg:px-0 px-4">
      <h3 className="text-center text-3xl ">All Mobiles</h3>

      <div className="flex gap-5 mt-20">
        <div className=" w-96 border h-full shadow-sm rounded ">
          <div className=" my-3">
            {" "}
            <div className="p-2">
              <input
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                onClick={(e: any) => setSearchTerm(e.target.value)}
                className="w-full h-12 border outline-blue-300 rounded p-2 text-xl"
                type="text"
                placeholder="Search by name"
              />
            </div>
            <div className="mt-1 px-3">
              <div className=" flex justify-between items-center">
                <h3 className=" text-xl">Top Brand</h3>
                <button
                  onClick={() => setBrandCollapse(!brandCollops)}
                  className="text-xl"
                >
                  {brandCollops ? <IoChevronUpSharp /> : <IoIosArrowDown />}
                </button>
              </div>
              {brandCollops &&
                data?.brand?.map((brand: { title: string }) => (
                  <div
                    onClick={() => setBrand(brand.title)}
                    className="pt-1 flex gap-4  cursor-pointer"
                    key={brand.title}
                  >
                    <input
                      checked={brandSelect == brand.title ? true : false}
                      type="checkbox"
                      className=" cursor-pointer"
                      name=""
                      id=""
                    />
                    {brand.title}
                  </div>
                ))}
            </div>
            <div className="mt-3 px-3">
              <h3 className=" text-xl"></h3>
              <div className=" flex justify-between items-center">
                <h3 className=" text-xl">Category By Ram</h3>
                <button
                  onClick={() => setRamCollapse(!ramCollops)}
                  className="text-xl"
                >
                  {ramCollops ? <IoChevronUpSharp /> : <IoIosArrowDown />}
                </button>
              </div>
              {ramCollops &&
                data?.ram?.map((ram: { title: string }) => (
                  <div
                    onClick={() => setRam(ram.title)}
                    className="pt-1 flex gap-4 cursor-pointer"
                    key={ram.title}
                  >
                    <input
                      checked={ramSelect == ram.title ? true : false}
                      type="checkbox"
                      name=""
                      id=""
                    />
                    {ram.title}
                  </div>
                ))}
            </div>
            <div className="mt-3 px-3">
              <div className=" flex justify-between items-center">
                <h3 className=" text-xl">Category By Rom</h3>
                <button
                  onClick={() => setRomCollapse(!romCollops)}
                  className="text-xl"
                >
                  {romCollops ? <IoChevronUpSharp /> : <IoIosArrowDown />}
                </button>
              </div>
              {romCollops &&
                data?.rom?.map((rom: { title: string }) => (
                  <div
                    onClick={() => setRom(rom.title)}
                    className="pt-1 flex gap-4    cursor-pointer"
                    key={rom.title}
                  >
                    <input
                      checked={romSelect == rom.title ? true : false}
                      type="checkbox"
                      name=""
                      className="cursor-pointer"
                      id=""
                    />
                    {rom.title}
                  </div>
                ))}
            </div>
            <div className="mt-3 px-3">
              <div className=" flex justify-between items-center">
                <h3 className=" text-xl">Category By Color</h3>
                <button
                  onClick={() => setColorCollapse(!colorCollops)}
                  className="text-xl"
                >
                  {colorCollops ? <IoChevronUpSharp /> : <IoIosArrowDown />}
                </button>
              </div>
              {colorCollops &&
                data?.color?.map((color: { title: string }) => (
                  <div
                    onClick={() => setColor(color.title)}
                    className="pt-1 flex gap-4 cursor-pointer"
                    key={color.title}
                  >
                    <input
                      checked={colorSelect == color.title ? true : false}
                      type="checkbox"
                      name=""
                      className="cursor-pointer"
                      id=""
                    />
                    {color.title}
                  </div>
                ))}
            </div>
            <div className="mt-3 px-3">
              <div className=" flex justify-between items-center">
                <h3 className=" text-xl">Category By Battery</h3>
                <button
                  onClick={() => setBatteryCollapse(!butteryCollops)}
                  className="text-xl"
                >
                  {butteryCollops ? <IoChevronUpSharp /> : <IoIosArrowDown />}
                </button>
              </div>
              <h3 className=" text-xl"></h3>
              {butteryCollops &&
                data?.battery?.map((battery: { title: string }) => (
                  <div
                    onClick={() => setBattery(battery.title)}
                    className="pt-1 flex gap-4 cursor-pointer"
                    key={battery.title}
                  >
                    <input
                      checked={batterySelect == battery.title ? true : false}
                      type="checkbox"
                      name=""
                      id=""
                      className="cursor-pointer"
                    />
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
