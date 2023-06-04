import { Skeleton } from "../../components/ui/skeleton";

export default function Loading() {
  return (
    <main className="m-24 rounded-md grid grid-cols-4 gap-8">
      {Array.from({ length: 12 }, (_, i) => i + 1).map((id) => (
        <div
          className="bg-white p-8 sm:col-span-4 md:col-span-2 xl:col-span-1"
          key={id}
        >
          <Skeleton className="h-6 w-1/2 bg-gray-200 mb-2"></Skeleton>
          <Skeleton className="h-6 w-1/4 bg-gray-200 mb-2"></Skeleton>
          <Skeleton className="rounded-md w-full h-60 bg-gray-400"></Skeleton>
        </div>
      ))}
    </main>
  );
}
