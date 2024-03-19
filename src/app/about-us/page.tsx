import Image from "next/image";
import { MdOutlineUnfoldMore } from "react-icons/md";
import { TbScanEye } from "react-icons/tb";

const AboutUs = () => {
  return (
    <>
      <section className="h-[650px] overflow-hidden relative bg-[url('/images/new-about-us.jpg')] bg-no-repeat bg-center bg-cover opacity-90">
        <p className="text-9xl w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70 absolute bottom-0 left-10 mb-0 pb-0">
          About Us
        </p>
      </section>
      {/* Code goes here below here */}

      <section className="grid grid-cols-2  px-10 pt-20 gap-12 bg-[#F1F5F5]">
        {/* #########################################################################################################
        flex the section into two half's....................... 
        with the images on the left and about us info on the right
        ##########################################################################################################*/}
        <div className="images_left grid grid-cols-2 grid-rows-2 gap-4 bg-[#ffffff] rounded-3xl h-3/4 px-5 pt-5">
          {/* #########################################################################################################
          images section with two images on a row and a single image spanning to take two spaces on a row
          ##########################################################################################################*/}
          {/* Top Left Box #*/}
          <div className="flex gap-4">
            <Image
              width={1150}
              height={1150}
              className="w-auto h-auto object-cover rounded-2xl"
              src="/images/image01_left.jpg"
              alt={"image01"}
            />
            <Image
              width={656}
              height={432}
              className="w-auto h-auto object-cover rounded-2xl"
              src="/images/image02_right.jpg"
              alt={"image02"}
            />
          </div>

          {/* Bottom merged Box #*/}
          <div className="col-span-2 row-span-1 -mb-10">
            <Image
              width={5184}
              height={3456}
              className="w-full h-full object-cover rounded-2xl"
              src="/images/image03_span_bottom.jpg"
              alt={"image03"}
            />
          </div>
        </div>

        {/* #########################################################################################################
        this is the about us info section...............
        ##########################################################################################################*/}
        <div className="aboutus_info ">
          {/* ##########################
        Our Core values
        ###########################*/}
          <div className="coreValues">
            <h4 className="text-xl font-medium pb-4">More About Us</h4>
            <h1 className="text-4xl font-bold pb-4">Our Core Values</h1>
            <p className="text-lg font-regular pb-9">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure do
            </p>
          </div>

          {/* ##########################
        Mission Statement
        ###########################*/}
          <div className="missionStatement">
            <h1 className="text-4xl font-bold pb-4">Mission Statement</h1>
            <p className="text-lg font-regular pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure do
            </p>
            <p className="text-lg font-regular">
              eiusmod tempor incididunt ut labore et dolore ma gna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure do
            </p>
          </div>
        </div>
      </section>

      <section className="visionStatement px-10 pb-8 bg-[#F1F5F5]">
        <div className="visionContainer flex flex-row px-14 py-14 bg-[#ffffff] rounded-2xl">
          <div className="eyeIcon">
            <TbScanEye className="w-12 h-auto color-[E9722B]" />
          </div>
          <div className="textNinfo mx-16">
            <h1 className="text-4xl font-bold pb-2 pt-1">Vision Statement</h1>
            <p className="text-xl font-regular pb-9">
              enestado de desarrollo. Muchas versioneshan evolucion ado a través
              de los añosalgunas veces por accidente, otras veces apropósito
              (por ejemplo insertándole humor y cosas por el estilo). leer.
              Muchos paquetes de autoedicióny editores de páginas web usan el
              Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de
              "Lorem Ipsum va a dar por resultado muchos sitios web que usan
              este texto si se encuentran ene stado de
            </p>
            <p className="text-xl font-regular">
              apropósito (por ejemplo insertándole humor y cosas por el estilo).
              leer. Muchos paquetes de autoedicióny editores de páginas web usan
              el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda
              de "Lorem Ipsum va a dar por resultado muchos sitios web que usan
              este texto si se encuentran ene stado de
            </p>
          </div>
          <div className="Null_icon">
            <MdOutlineUnfoldMore className="w-8 h-auto color-[E9722B]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
