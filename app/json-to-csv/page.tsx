import JsonToCsv from "@/components/json-to-csv";
import PageHeader from "@/components/PageHeader";
import Main from "@/components/Main";

const Page = () => {
  return (
    <Main>
      <section>
        <PageHeader
          title="JSON to CSV"
          description="Seamlessly convert JSON to CSV for easy data handling."
        />
      </section>
      <section className="container px-4 mt-10">
        <JsonToCsv />
      </section>
    </Main>
  );
};

export default Page;
