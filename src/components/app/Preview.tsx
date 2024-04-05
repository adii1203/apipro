import { MetaTageTypes } from "@/lib/tpyes";

export const Preview = ({ metaTags }: { metaTags: MetaTageTypes }) => {
  const extractDomain = (url: string) => {
    if (!url) return;
    let domain = url.replace(/(^\w+:|^)\/\/(www\.)?/, "");

    domain = domain.replace(/\/.*$/, "");

    return domain;
  };
  return (
    <div>
      <div className="max-w-[28rem] mx-auto mt-6 bg-background rounded-md overflow-hidden">
        <div className="w-full h-48">
          <img className="w-full h-full" src={metaTags?.image} alt="" />
        </div>
        <div className="font-Poppins px-2 py-1 flex flex-col gap-2">
          <h3 className="font-bold">
            {metaTags.title.length > 30
              ? metaTags.title?.slice(0, 30) + "..."
              : metaTags.title || "No Title"}
          </h3>

          <p className="text-sm text-foreground">
            {metaTags.description?.length ?? 0 > 100
              ? metaTags.description?.slice(0, 100) + "..."
              : metaTags.description || "No Description"}
          </p>

          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden object-cover">
              <img className="w-full h-full" src={metaTags.icon} alt="icon" />
            </div>
            <a
              className="text-sm font-Poppins font-medium text-blue-700"
              href={metaTags.url}>
              {extractDomain(metaTags.url || "")}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
