import { ToastContainer } from "react-toastify";
import "./App.css";
import MainLayout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import MobileDetails from "./components/home/MobileDetails";

function App() {
  return (
    <MainLayout>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mobile/details/:id" element={<MobileDetails />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
