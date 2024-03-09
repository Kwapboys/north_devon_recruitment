"use client";

const Home = () => (
  <>
    <section className=" h-[527px] overflow-hidden">
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

export default Home;
