import CsvToJson from "@/components/csv-to-json";
import Main from "@/components/Main";
import PageHeader from "@/components/PageHeader";

const Page = () => {
  return (
    <Main>
      <section>
        <PageHeader
          title="CSV to JSON"
          description="Convert CSV to JSON with our free and fast tool."
        />
      </section>

      <section className="container px-4 mt-10">
        <CsvToJson />
      </section>
    </Main>
  );
};

export default Page;
