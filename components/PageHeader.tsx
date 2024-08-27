const PageHeader = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <header>
      <div className="container pt-10 text-center">
        <h1 className="font-bold text-2xl text-foreground">{title}</h1>
        <p className="font-normal text-base text-muted-foreground">
          {description}
        </p>
      </div>
    </header>
  );
};

export default PageHeader;
