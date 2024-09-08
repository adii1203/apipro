const Main = ({ children }: { children: React.ReactNode }) => {
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
      {children}
    </main>
  );
};

export default Main;
