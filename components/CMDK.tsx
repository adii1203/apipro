"use client";

import React, { useEffect, useState } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "./ui/command";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

const CMDK = () => {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handelKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen(true);
      }
    };

    document.addEventListener("keydown", handelKeyDown);

    return () => {
      document.removeEventListener("keydown", handelKeyDown);
    };
  }, []);
  return (
    <>
      <div
        onClick={() => setOpen(true)}
        className="cursor-pointer w-64 py-2 px-2 rounded-md bg-muted flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Search size={16} />
          <p className="text-muted-foreground text-sm">Search for tools.</p>
        </div>
        <kbd className="pointer-events-none space-x-1 select-none items-center gap-1 rounded border bg-secondary-foreground text-primary-foreground px-1.5 font-mono text-[10px] font-medium opacity-100">
          <span className="text-xs">ctrl</span>
          <span>k</span>
        </kbd>
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput className="text-sm" placeholder="Search for tools" />
        <CommandList>
          <CommandEmpty>No tools found.</CommandEmpty>
          <CommandGroup heading="tools.">
            <CommandItem
              onSelect={() => router.push("/csv-to-json")}
              className="h-8 text-sm">
              <span>csv to json</span>
            </CommandItem>
            <CommandItem
              onSelect={() => router.push("/json-to-csv")}
              className="h-8 text-sm">
              <span>json to csv</span>
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  );
};

export default CMDK;
