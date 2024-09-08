import Main from "@/components/Main";
import PageHeader from "@/components/PageHeader";
import RGBtoHEX from "@/components/rgb-to-hex";

const Page = () => {
  return (
    <Main>
      <section>
        <PageHeader
          description="Convert RGB values to hexadecimal strings for web design and CSS."
          title="RGB to HEX"
        />
      </section>
      <section className="container mt-10">
        <RGBtoHEX />
      </section>
    </Main>
  );
};

export default Page;
