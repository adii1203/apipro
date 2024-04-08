import "./App.css";
import { Routes, Route } from "react-router-dom";
import MetaTags from "./pages/Metatags";
import Home from "./pages/Home";
import Footer from "./components/app/Footer";
import Avatar from "./pages/Avatar";

function App() {
  return (
    <>
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          opacity: "0.6",
          backgroundImage:
            "linear-gradient(rgb(239, 81, 109) 0%, rgba(239, 81, 109, 0) 100%), radial-gradient(94.51% 124.88% at 94.32% 94.43%, rgba(65, 244, 255, 0.78) 0%, rgba(131, 218, 255, 0.655) 32.29%, rgba(99, 175, 240, 0.396) 64.06%, rgba(43, 90, 211, 0) 100%), linear-gradient(313.04deg, rgb(52, 29, 101) 0.93%, rgb(96, 74, 234) 125.68%)",
          borderRadius: "100rem",
          filter: "blur(80px)",
          height: "100%",
          width: "100%",
          maxHeight: "500px",
          maxWidth: "500px",
        }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="metatags" element={<MetaTags />} />
        <Route path="avatar" element={<Avatar />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
