import CsvToJson from "@/components/csv-to-json";
import PageHeader from "@/components/PageHeader";

const Page = () => {
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
    
    relative
    z-[1]
    w-full
    h-screen
    ">
      <section>
        <PageHeader
          title="CSV to JSON"
          description="Convert CSV to JSON with our free and fast tool."
        />
      </section>

      <section className="container px-4 mt-10">
        <CsvToJson />
      </section>
    </main>
  );
};

export default Page;
