import JsonToCsv from "@/components/json-to-csv";
import PageHeader from "@/components/PageHeader";

const Page = () => {
  return (
    <main
      className="before:content-['']
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
                w-full
                h-screen">
      <section>
        <PageHeader
          title="JSON to CSV"
          description="Seamlessly convert JSON to CSV for easy data handling."
        />
      </section>
      <section className="container px-4 mt-10">
        <JsonToCsv />
      </section>
    </main>
  );
};

export default Page;
