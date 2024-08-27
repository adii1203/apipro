import CsvToJson from "@/components/csv-to-json";
import PageHeader from "@/components/PageHeader";

const Page = () => {
  return (
    <main>
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
