
import { Skeleton } from "@/components/ui/skeleton";

export const ProjectSkeleton = () => {
  return (
    <div className="bg-gray-900/50 backdrop-blur-lg border-gray-800 rounded-lg p-6 space-y-4">
      <Skeleton className="h-48 w-full bg-gray-800" />
      <Skeleton className="h-6 w-3/4 bg-gray-800" />
      <Skeleton className="h-4 w-full bg-gray-800" />
      <Skeleton className="h-4 w-2/3 bg-gray-800" />
      <div className="flex gap-2">
        <Skeleton className="h-6 w-16 bg-gray-800" />
        <Skeleton className="h-6 w-20 bg-gray-800" />
        <Skeleton className="h-6 w-12 bg-gray-800" />
      </div>
    </div>
  );
};

export const AboutSkeleton = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-center">
        <Skeleton className="w-80 h-80 rounded-2xl bg-gray-800" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-8 w-48 bg-gray-800" />
        <Skeleton className="h-4 w-full bg-gray-800" />
        <Skeleton className="h-4 w-4/5 bg-gray-800" />
        <Skeleton className="h-4 w-3/4 bg-gray-800" />
      </div>
    </div>
  );
};
