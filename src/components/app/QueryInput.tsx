import { Info } from "lucide-react";
import { Input } from "../ui/input";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

const QueryInput = ({
  value,
  onChange,
  name,
  type,
  isRequired,
  info,
  isSelectable,
  values,
}: {
  value: string | number;
  onChange: (e) => void;
  name: string;
  type: string;
  isRequired: boolean;
  info: string;
  isSelectable: boolean;
  values?: string[];
}) => {
  return (
    <div className="px-3 py-2 font-Poppins flex items-center gap-1">
      {isSelectable === true ? (
        <>
          <Select onValueChange={(value) => onChange(value)}>
            <SelectTrigger className="w-full outline-none">
              <SelectValue placeholder={name} />
            </SelectTrigger>
            <SelectContent className="z-[9999]">
              <SelectGroup>
                <SelectLabel>{name}</SelectLabel>
                {values?.map((v) => {
                  return (
                    <SelectItem key={v} value={v}>
                      {v}
                    </SelectItem>
                  );
                })}
              </SelectGroup>
            </SelectContent>
          </Select>
          <QueryInfo
            name={name}
            type={type}
            isRequired={isRequired}
            info={info}
          />
        </>
      ) : (
        <>
          <Input
            value={value}
            onChange={onChange}
            className=""
            placeholder={name}
          />
          <QueryInfo
            name={name}
            type={type}
            isRequired={isRequired}
            info={info}
          />
        </>
      )}
    </div>
  );
};

export function QueryInfo({
  name,
  type,
  isRequired,
  info,
}: {
  name: string;
  type: string;
  isRequired: boolean;
  info: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <button>
            <Info size={16} />
          </button>
        </TooltipTrigger>
        <TooltipContent className="max-w-64 border border-purple-300">
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between border-b py-2">
              <div className="">{name}</div>
              <div className="text-sm flex items-center gap-2">
                <code className="bg-accent px-3 py-[0.8] rounded">{type}</code>
                {isRequired && (
                  <div className="bg-destructive w-fit px-2 rounded text-destructive-foreground">
                    required
                  </div>
                )}
              </div>
            </div>
            <div>
              <p>{info}</p>
            </div>
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default QueryInput;
