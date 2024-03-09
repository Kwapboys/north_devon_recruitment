import Image from "next/image";
import NavBar from "../sections/Navbar";

const OurServices = () => (
    
  <>
  
    <section className="overflow-hidden h-[527px]">
      <video
        src="/plane.mp4"
        autoPlay={true}
        loop
        height={100}
        muted
        className="z-0 w-auto
              min-w-full min-h-[200px] max-w-none"
      ></video>
    </section>
  </>
);

export default OurServices;
