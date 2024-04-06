import { Skeleton } from "../ui/skeleton";

const PreviewLoader = () => {
  return (
    <div className="max-w-[28rem] mx-auto mt-6 bg-background rounded-md overflow-hidden flex flex-col gap-2">
      <Skeleton className="aspect-video bg-foreground/10 rounded-none" />
      <div className="flex flex-col px-2 gap-1 pb-1">
        <Skeleton className="h-4 w-[200px] bg-foreground/20" />
        <Skeleton className="h-4 w-[200px] bg-foreground/20" />
        <Skeleton className="h-6 w-6 rounded-full bg-foreground/20" />
      </div>
    </div>
  );
};

export default PreviewLoader;
