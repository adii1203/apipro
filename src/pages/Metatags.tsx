import PageTitle from "@/components/app/PageTitle";
import { Preview } from "@/components/app/Preview";
import UrlInput from "@/components/app/UrlInput";
import { useMeta } from "@/hooks/useMetaData";
import PreviewLoader from "@/components/app/Loader";
import Copyurl from "@/components/app/Copyurl";
import { useEffect } from "react";

const MetaTags = () => {
  const { url, setUrl, isLoading, metaTags, setIsLoading, setMetaTags } =
    useMeta();

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
    getMetaTags("https://github.com/adii1203");
  }, []);

  return (
    <div className="h-screen bg-background">
      <div className="relative z-50">
        <PageTitle title="Metatags" />
        <UrlInput
          url={url}
          setUrl={setUrl}
          isLoading={isLoading}
          handelClick={handelClick}
        />
        {isLoading ? <PreviewLoader /> : <Preview metaTags={metaTags} />}

        <Copyurl text={`/metadata?url=${url}`} />
      </div>
    </div>
  );
};

export default MetaTags;
