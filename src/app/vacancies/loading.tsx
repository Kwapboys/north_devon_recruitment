import { Skeleton } from "@nextui-org/react";
import { LoadingSkeleton } from "../sections/LoadingSkeleton";

function Loading() {
  return (
    <>
      <Skeleton>
        <div className="w-full mx-10 h-full rounded-full"></div>
      </Skeleton>
      <LoadingSkeleton />
    </>
  );
}

export default Loading;
