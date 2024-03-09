import { CircularProgress, Skeleton } from "@nextui-org/react";
import { Chip, Link, Image } from "@nextui-org/react";
import { LoadingSkeleton } from "./sections/LoadingSkeleton";

function Loading() {
  return (
    <>
      <Skeleton>
        <div className="w-full mx-10 h-[250px] rounded-full"></div>
      </Skeleton>
      <LoadingSkeleton />
    </>
  );
}

export default Loading;
