import CMDK from "@/components/CMDK";
import { ThemeToggle } from "@/components/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main
      className="
    before:content-['']
    before:absolute
    before:w-full
    before:h-full
    before:top-0
    before:z-[-1]
    before:opacity-[0.2]
    before:bg-[url('../public/grid.svg')]
    dark:before:bg-[url('../public/grid-dark.svg')]
    
    relative
    z-[1]
    flex min-h-screen flex-col items-center justify-between py-10 bg-background">
      <div
        className="
      after:content-['']
      after:absolute
      after:bg-gradient
      after:w-full
      after:h-full
      after:top-0
      after:left-0
      after:z-[-1]
      after:blur-[100px]
      after:saturate-50
      after:opacity-[0.2]
      container md:w-[80%] space-y-10">
        <div className="flex justify-end gap-2">
          <CMDK />
          <ThemeToggle />
        </div>
        <div className=" flex flex-wrap items-center gap-4 justify-center">
          <div className="bg-card border-[.6px] border-border px-4 py-3 rounded space-y-4 md:w-96">
            <p className="text-lg font-semibold">CSV to JSON</p>
            <p className="text-sm font-normal text-muted-foreground">
              Easily convert your CSV files to JSON with our free and fast tool.
              it’s the quickest way to transform structured tabular data into
              JSON format.
            </p>
            <div>
              <Link
                href="/csv-to-json"
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                })}>
                Try it
              </Link>
            </div>
          </div>
          <div className="bg-card border-[.6px] border-border px-4 py-3 rounded space-y-4 md:w-96">
            <p className="text-lg font-semibold">JSON to CSV</p>
            <p className="text-sm font-normal text-muted-foreground">
              Effortlessly convert your JSON data to CSV format with our free
              JSON to CSV Converter. Quickly transform structured JSON into
              tabular CSV format.
            </p>
            <div>
              <Link
                href="/json-to-csv"
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                })}>
                Try it
              </Link>
            </div>
          </div>
          <div className="bg-card border-[.6px] border-border px-4 py-3 rounded space-y-4 md:w-96">
            <p className="text-lg font-semibold">RGB to HEX</p>
            <p className="text-sm font-normal text-muted-foreground">
              Effortlessly convert your JSON data to CSV format with our free
              JSON to CSV Converter. Quickly transform structured JSON into
              tabular CSV format.
            </p>
            <div>
              <Link
                href="/rgb-to-hex"
                className={buttonVariants({
                  variant: "default",
                  size: "sm",
                })}>
                Try it
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
