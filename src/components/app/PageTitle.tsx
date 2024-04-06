const PageTitle = ({ title }: { title: string }) => {
  return (
    <div className="text-center pt-32">
      <h1 className="text-5xl font-bold font-Poppins text-foreground">
        {title}{" "}
        <span
          style={{
            WebkitTextFillColor: "transparent",
            WebkitBackgroundClip: "text",
          }}
          className="bg-gradient-to-r from-[#FFBE0B] to-[#FF006E] italic">
          Api.
        </span>
      </h1>
    </div>
  );
};

export default PageTitle;
