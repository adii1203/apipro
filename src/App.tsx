import "./App.css";
import { useEffect, useState } from "react";
import UrlInput from "./components/app/UrlInput";
import { Preview } from "./components/app/Preview";
import Loader from "./components/app/Loader";
import { MetaTageTypes } from "./lib/tpyes";

function App() {
  const [url, setUrl] = useState("https://github.com");
  const [metaTags, setMetaTags] = useState<MetaTageTypes>({
    title: "",
    description: "",
    image: "",
    url: "",
    icon: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const getMetaTags = async (url: string) => {
    try {
      setIsLoading(true);
      const res = await fetch(`https://api.apipro.xyz/metadata?url=${url}`);
      const data = await res.json();
      console.log(data);
      if (data.success === true) {
        setMetaTags(data.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handelClick = () => {
    if (!url) {
      console.log("Please enter a valid url");
      return;
    }
    getMetaTags(url);
  };

  useEffect(() => {
    getMetaTags(url);
  }, []);

  return (
    <>
      <svg
        className="absolute inset-0 z-10"
        width="100%"
        height="100%"
        xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="smallGrid"
            width="10"
            height="10"
            patternUnits="userSpaceOnUse">
            <path
              d="M 10 0 L 0 0 0 10"
              fill="none"
              stroke-width="1.6"
              opacity={1}
              className="stroke-border/20"
            />
          </pattern>
          <pattern
            id="grid"
            width="100"
            height="100"
            patternUnits="userSpaceOnUse">
            <rect width="100" height="100" fill="url(#smallGrid)" />
            <path
              d="M 100 0 L 0 0 0 100"
              fill="none"
              stroke-width="2.6"
              opacity={1}
              className="stroke-border/50"
            />
          </pattern>
        </defs>

        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
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
      <div className="w-screen h-screen bg-background">
        <div className="relative z-50">
          {/* 
          /// Header Section
          */}

          <div className="text-center pt-32">
            <h1 className="text-5xl font-bold font-Poppins text-foreground">
              Metatags{" "}
              <span
                style={{
                  WebkitTextFillColor: "transparent",
                  WebkitBackgroundClip: "text",
                }}
                className="bg-gradient-to-r from-[#FFBE0B] to-[#FF006E] italic">
                Api.
              </span>
            </h1>
          </div>

          <UrlInput
            url={url}
            setUrl={setUrl}
            isLoading={isLoading}
            handelClick={handelClick}
          />

          {isLoading ? <Loader /> : <Preview metaTags={metaTags} />}
        </div>
      </div>
    </>
  );
}

export default App;
