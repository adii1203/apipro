import { MetaTageTypes } from "@/lib/tpyes";
import { createContext, useState } from "react";

interface MetaDataContextTypes {
  url: string;
  setUrl: (url: string) => void;
  metaTags: MetaTageTypes;
  setMetaTags: (metaTags: MetaTageTypes) => void;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
}

export const MetaDataContext = createContext<MetaDataContextTypes | undefined>(
  undefined
);

export const MetadataContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [url, setUrl] = useState("https://github.com/adii1203");

  const [metaTags, setMetaTags] = useState<MetaTageTypes>({
    title: "",
    description: "",
    image: "",
    url: "",
    icon: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  return (
    <MetaDataContext.Provider
      value={{
        url,
        setUrl,
        metaTags,
        setMetaTags,
        isLoading,
        setIsLoading,
      }}>
      {children}
    </MetaDataContext.Provider>
  );
};
