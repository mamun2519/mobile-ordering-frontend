import { useParams } from "react-router-dom";
import { useMobileDetailsQuery } from "../../redux/api/mobileApi";
import Loading from "../shared/Loading";
import { IMobile } from "../../interface/mobile";

const MobileDetails = () => {
  const { id } = useParams();
  const { data, isLoading } = useMobileDetailsQuery(id as string);
  if (isLoading) {
    return <Loading />;
  }
  const mobile: IMobile = data;
  console.log(data);
  return (
    <div className=" max-w-3xl mx-auto my-20 px-4">
      <div className="w-full h-full border rounded-2xl shadow">
        <div className="  h-96  p-3 rounded-xl">
          <img
            src={mobile.url}
            className=" rounded-xl  h-96  w-full p-2"
            alt=""
          />
        </div>
        <div className="p-3 mt-3 h-full border-t">
          <h3 className="text-xl">{mobile.name}</h3>
          <h5 className="text-lg mt-4">Additional Info</h5>
          <div className="mt-1 grid grid-cols-2  ">
            <div className=" w-28 lg:w-80">
              <p>Release</p>
            </div>
            <p className="text-gray-600">{mobile.release}</p>
          </div>
          <div className="mt-1 grid grid-cols-2 ">
            <div className=" w-28 lg:w-80">
              <p>Price</p>
            </div>
            <p className="text-red-500 font-bold">{mobile.price} BDT</p>
          </div>
          <div className="mt-1 grid grid-cols-2 ">
            <div className=" w-28 lg:w-80">
              <p>Ram</p>
            </div>
            <p>{mobile.ram}</p>
          </div>
          <div className="mt-1 grid grid-cols-2 ">
            <div className=" w-28 lg:w-80">
              <p>Rom</p>
            </div>
            <p>{mobile.rom}</p>
          </div>
          <div className="mt-1 grid grid-cols-2 ">
            <div className=" w-28 lg:w-80">
              <p>Color</p>
            </div>
            <p>{mobile.color}</p>
          </div>
          <div className="mt-1 grid grid-cols-2 ">
            <div className=" w-28 lg:w-80">
              <p>Battery</p>
            </div>
            <p>{mobile.batteryCapacity}</p>
          </div>
          <div className="mt-1 grid grid-cols-2 ">
            <div className=" w-28 lg:w-80">
              <p>Processor</p>
            </div>
            <p>{mobile.processor}</p>
          </div>
          <div>
            <h5 className="text-lg mt-4">connectivity</h5>
            <div className="mt-1 grid grid-cols-2  ">
              <div className=" w-28 lg:w-80">
                <p>Network</p>
              </div>
              <p className="text-gray-600">{mobile.connectivity.network}</p>
            </div>
            <div className="mt-1 grid grid-cols-2 ">
              <div className=" w-28 lg:w-80">
                <p>SIM</p>
              </div>
              <p className=" font-bold">{mobile.connectivity.SIM}</p>
            </div>
            <div className="mt-1 grid grid-cols-2 ">
              <div className=" w-28 lg:w-80">
                <p>Bluetooth</p>
              </div>
              <p>{mobile.connectivity.bluetooth}</p>
            </div>
            <div className="mt-1 grid grid-cols-2 ">
              <div className=" w-28 lg:w-80">
                <p>GPS</p>
              </div>
              <p>{mobile.connectivity.GPS}</p>
            </div>
            <div className="mt-1 grid grid-cols-2 ">
              <div className=" w-28 lg:w-80">
                <p>Radio</p>
              </div>
              <p>{mobile.connectivity.radio}</p>
            </div>
          </div>
          <div>
            <h5 className="text-lg mt-4">Display</h5>
            <div className="mt-1 grid grid-cols-2  ">
              <div className=" w-28 lg:w-80">
                <p>Size</p>
              </div>
              <p className="text-gray-600">{mobile.display.size}</p>
            </div>
            <div className="mt-1 grid grid-cols-2 ">
              <div className=" w-28 lg:w-80">
                <p>Resolution</p>
              </div>
              <p className=" font-bold">{mobile.display.resolution}</p>
            </div>
            <div className="mt-1 grid grid-cols-2 ">
              <div className=" w-28 lg:w-80">
                <p>Technology</p>
              </div>
              <p>{mobile.display.technology}</p>
            </div>
          </div>
          <div>
            <h5 className="text-lg mt-4">Back Camera</h5>
            <div className="mt-1 grid grid-cols-2  ">
              <div className=" w-28 lg:w-80">
                <p>Resolution</p>
              </div>
              <p className="text-gray-600">{mobile.backCamera.resolution}</p>
            </div>
            <div className="mt-1 grid grid-cols-2 ">
              <div className=" w-28 lg:w-80">
                <p>Features</p>
              </div>
              <p className=" font-bold">{mobile.backCamera.features}</p>
            </div>
            <div className="mt-1 grid grid-cols-2 ">
              <div className=" w-28 lg:w-80">
                <p>VideoRecording</p>
              </div>
              <p>{mobile.backCamera.videoRecording}</p>
            </div>
          </div>
          <div>
            <h5 className="text-lg mt-4">Front Camera</h5>
            <div className="mt-1 grid grid-cols-2  ">
              <div className=" w-28 lg:w-80">
                <p>Resolution</p>
              </div>
              <p className="text-gray-600">{mobile.frontCamera.resolution}</p>
            </div>
            <div className="mt-1 grid grid-cols-2 ">
              <div className=" w-28 lg:w-80">
                <p>Features</p>
              </div>
              <p className=" font-bold">{mobile.frontCamera.features}</p>
            </div>
            <div className="mt-1 grid grid-cols-2 ">
              <div className=" w-28 lg:w-80">
                <p>VideoRecording</p>
              </div>
              <p>{mobile.frontCamera.videoRecording}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileDetails;
