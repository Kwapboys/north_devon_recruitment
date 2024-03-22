import { Skeleton } from "@nextui-org/react";
import { LoadingSkeleton } from "../../sections/LoadingSkeleton";

function Loading() {
  return (
    <>
    <Skeleton>
      <div className="w-full mx-10 h-[550px]"></div>
    </Skeleton>
   
    </>
  );
}

export default Loading;
