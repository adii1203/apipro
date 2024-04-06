import { CornerDownLeft, Loader, Unlink2 } from "lucide-react";
import { Input } from "../ui/input";

const UrlInput = ({
  url,
  setUrl,
  isLoading,
  handelClick,
}: {
  url: string;
  setUrl: (url: string) => void;
  isLoading: boolean;

  handelClick: () => void;
}) => {
  const handelEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && url) handelClick();
  };

  return (
    <div
      className="flex items-center justify-between px-2
max-w-[30rem] mx-auto bg-background rounded-lg mt-4
">
      <Unlink2 size={18} className="text-accent-foreground" />
      <Input
        onKeyDown={handelEnter}
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="https://example.com"
        type="url"
        className="max-w-[28rem] border-none font-Poppins text-foreground"
      />
      {isLoading ? (
        <Loader className="animate-spin" />
      ) : (
        <button onClick={handelClick}>
          <CornerDownLeft size={18} className="text-accent-foreground" />
        </button>
      )}
    </div>
  );
};

export default UrlInput;
