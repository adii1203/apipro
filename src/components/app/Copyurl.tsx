import { Check, Copy } from "lucide-react";
import { useState } from "react";

const Copyurl = ({ text }: { text: string }) => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      `https://api.apipro.xyz/metadata?url=${text}`
    );
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 3000);
  };

  return (
    <div className="mt-2 text-center font-Poppins w-fit mx-auto bg-background/40 px-4 py-3 border-border border rounded-full flex items-center gap-3">
      <p className="text-sm">
        https://api.apipro.xyz/metadata?url=
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
