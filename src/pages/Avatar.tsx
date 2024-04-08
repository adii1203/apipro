import Copyurl from "@/components/app/Copyurl";
import PageTitle from "@/components/app/PageTitle";
import QueryInput from "@/components/app/QueryInput";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const Avatar = () => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const [url, setUrl] = useState("");

  const removeQuery = (key: string) => {
    searchParams.delete(key);
    setSearchParams(searchParams, { replace: true });
  };

  useEffect(() => {
    setUrl(window.location.href.replace(window.location.origin, ""));
    console.log(url);
  }, [searchParams, url]);

  return (
    <div className="z-[99] relative p-4 min-w-screen max-h-screen">
      <PageTitle title="Avatar" />
      <div className="bg-primary-foreground max-w-[30rem] mx-auto mt-6 rounded-md border border-purple-400">
        <div className="px-4 py-2 border-b-[1px] font-Poppins font-semibold border-purple-400 bg-muted-foreground/10">
          <p>Query</p>
        </div>
        <QueryInput
          isSelectable={false}
          value={searchParams.get("name") || ""}
          onChange={(e) => {
            const t = e.target.value;
            if (t == "") {
              removeQuery("name");
            } else {
              setSearchParams(
                (prev) => {
                  prev.set("name", t);
                  return prev;
                },
                {
                  replace: true,
                }
              );
            }
          }}
          name="name"
          type="string"
          isRequired={true}
          info="The name used to generate the avatar."
        />

        <QueryInput
          isSelectable={false}
          value={searchParams.get("size") || ""}
          onChange={(e) => {
            const t = e.target.value;
            if (t == "") {
              removeQuery("size");
            } else {
              setSearchParams(
                (prev) => {
                  prev.set("size", t);
                  return prev;
                },
                {
                  replace: true,
                }
              );
            }
          }}
          name="size"
          type="number"
          isRequired={false}
          info="The size of the avatar. Accepted values are integers between 100 and 500. Default is 100."
        />
        <QueryInput
          isSelectable={false}
          value={searchParams.get("color") || ""}
          onChange={(e) => {
            const t = e.target.value;
            if (t == "") {
              removeQuery("color");
            } else {
              setSearchParams(
                (prev) => {
                  prev.set("color", t);
                  return prev;
                },
                {
                  replace: true,
                }
              );
            }
          }}
          name="color"
          type="string"
          isRequired={false}
          info="Background color of the avatar in hexadecimal format (e.g., 'fff' for white). Default is 'fff'."
        />

        <QueryInput
          isSelectable={false}
          value={searchParams.get("text") || ""}
          onChange={(e) => {
            const t = e.target.value;
            if (t == "") {
              removeQuery("text");
            } else {
              setSearchParams(
                (prev) => {
                  prev.set("text", t);
                  return prev;
                },
                {
                  replace: true,
                }
              );
            }
          }}
          name="text"
          type="string"
          isRequired={false}
          info='Color of the text (initial letter of the name) in hexadecimal format. Default is "000" (black).'
        />
        <QueryInput
          values={["true", "false"]}
          isSelectable={true}
          value={searchParams.get("is_uppercase") || ""}
          onChange={(e) => {
            const t = e;

            if (t == "") {
              removeQuery("is_uppercase");
            } else {
              setSearchParams(
                (prev) => {
                  prev.set("is_uppercase", t);
                  return prev;
                },
                {
                  replace: true,
                }
              );
            }
          }}
          name="is_uppercase"
          type="boolean"
          isRequired={false}
          info='Whether to convert the first letter of the name to uppercase. Accepted values are "true" or "false". Default is "true".'
        />
        <QueryInput
          isSelectable={true}
          values={["true", "false"]}
          value={searchParams.get("is_bold") || ""}
          onChange={(e) => {
            const t = e;
            if (t == "") {
              removeQuery("is_bold");
            } else {
              setSearchParams(
                (prev) => {
                  prev.set("is_bold", t);
                  return prev;
                },
                {
                  replace: true,
                }
              );
            }
          }}
          name="is_bold"
          type="boolean"
          isRequired={false}
          info="Whether to render the text in bold. Accepted values are 'true' or 'false'. Default is 'false'."
        />
        <QueryInput
          isSelectable={true}
          values={["png", "jpeg"]}
          value={searchParams.get("format") || ""}
          onChange={(e) => {
            const t = e;
            if (t == "") {
              removeQuery("format");
            } else {
              setSearchParams(
                (prev) => {
                  prev.set("format", t);
                  return prev;
                },
                {
                  replace: true,
                }
              );
            }
          }}
          name="format"
          type="string"
          isRequired={false}
          info="Image format of the generated avatar. Accepted values are 'png' (default) or 'jpeg'."
        />

        <Copyurl text={url} />
        <div className="flex items-center justify-center py-3">
          <img src={`https://api.apipro.xyz${url}`} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Avatar;
