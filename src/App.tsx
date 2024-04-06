import "./App.css";
import { useEffect, useState } from "react";
import UrlInput from "./components/app/UrlInput";
import { Preview } from "./components/app/Preview";
import Loader from "./components/app/Loader";
import { useMeta } from "./hooks/useMetaData";

import { Check, Copy } from "lucide-react";

function App() {
  const { url, isLoading, metaTags, setIsLoading, setMetaTags, setUrl } =
    useMeta();

  const [isCopied, setIsCopied] = useState(false);

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

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://api.apipro.xyz/metadata?url=${url}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
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

          <div className="mt-2 text-center font-Poppins w-fit mx-auto bg-background/40 px-4 py-3 border-border border rounded-full flex items-center gap-3">
            <p className="text-sm">
              https://api.apipro.xyz/metadata?url=
              <span className="text-green-600">{url}</span>
            </p>
            {isCopied ? (
              <Check size={18} />
            ) : (
              <button onClick={copyToClipboard}>
                <Copy size={18} />
              </button>
            )}
          </div>

          <div className="text-center mt-6">
            <p className="text-xs font-Poppins text-foreground">
              Made with ❤️ by{" "}
              <a
                target="_blank"
                rel="noreferrer noopener"
                href="https://twitter.com/adiidev12" // Add your github link here
                className="text-blue-500 hover:underline">
                @adiidev12
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
