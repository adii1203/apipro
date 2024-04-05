import { MetaDataContext } from "@/context/MetaDataContext";
import { useContext } from "react";

export const useMeta = () => {
  const data = useContext(MetaDataContext);
  if (data === undefined) {
    throw new Error("useMeta must be used within a MetaDataProvider");
  }
  return data;
};
