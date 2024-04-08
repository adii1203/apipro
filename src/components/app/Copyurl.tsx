import { Check, Copy } from "lucide-react";
import { useState } from "react";

const Copyurl = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`https://api.apipro.xyz${text}`);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="my-2 text-center font-Poppins max-w-[30rem] text-wrap mx-auto bg-background/40 px-4 py-3 border-border border rounded-full flex items-center gap-3">
      <p className="text-sm w-full text-nowrap overflow-x-auto">
        {`https://api.apipro.xyz`}
        <span className="text-green-600">{text}</span>
      </p>
      {isCopied ? (
        <Check size={18} />
      ) : (
        <button onClick={copyToClipboard}>
          <Copy size={18} />
        </button>
      )}
    </div>
  );
};

export default Copyurl;
