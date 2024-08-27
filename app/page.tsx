import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-background">
      <div className="space-y-4">
        <div className="border-[.6px] border-border px-4 py-3 rounded space-y-4">
          <p className="text-lg font-semibold">CSV to JSON</p>
          <p className="text-sm font-normal text-muted-foreground">
            Easily convert your CSV files to JSON with our free and fast tool.
            Perfect for developers and data professionals, it’s the quickest way
            to transform structured tabular data into JSON format.
          </p>
          <div>
            <Link
              href="/csv-to-json"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
              })}>
              Try it
            </Link>
          </div>
        </div>
        <div className="border-[.6px] border-border px-4 py-3 rounded space-y-4">
          <p className="text-lg font-semibold">JSON to CSV</p>
          <p className="text-sm font-normal text-muted-foreground">
            Effortlessly convert your JSON data to CSV format with our free JSON
            to CSV Converter. Quickly transform structured JSON into tabular CSV
            format.
          </p>
          <div>
            <Link
              href="/json-to-csv"
              className={buttonVariants({
                variant: "outline",
                size: "sm",
              })}>
              Try it
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
