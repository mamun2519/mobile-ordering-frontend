import { ToastContainer } from "react-toastify";
import "./App.css";
import MainLayout from "./layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";

function App() {
  return (
    <MainLayout>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </MainLayout>
  );
}

export default App;
