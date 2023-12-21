export type IMobile = {
  _id: string;
  name: string;
  release: string;
  color: string;
  price: string;
  url: string;
  connectivity: {
    network: string;
    SIM: string;
    bluetooth: string;
    GPS: string;
    radio: string;
  };
  body: string;
  display: {
    size: string;
    resolution: string;
    technology: string;
  };
  backCamera: {
    resolution: string;
    features: string;
    videoRecording: string;
  };
  frontCamera: {
    resolution: string;
    features: string;
    videoRecording: string;
  };
  batteryCapacity: string;
  ram: string;
  rom: string;
  processor: string;
  brand: string;
};
