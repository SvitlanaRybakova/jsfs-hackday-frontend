import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EditCollection from "./pages/EditCollection";
import Gallery from "./pages/Gallery";
import SharedCollection from "./pages/SharedCollection";
import UploadPhoto from "./pages/UploadPhoto";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/edit-collection/:title" element={<EditCollection />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/gallery/:title" element={<SharedCollection />} />
        <Route path="/upload-photo" element={<UploadPhoto />} />
      </Routes>
    </>
  );
}

export default App;
