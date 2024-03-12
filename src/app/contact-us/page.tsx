"use client";
import Card from "@/components/Card";
import React from "react";
import Heading from "@/components/Heading";
import Accordion from "@/components/Accordion";
import Button from "@/components/Button";
import Textarea from "@/components/forms/Textarea";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import PhoneInput from "@/components/forms/PhoneInput/index";


const ContactUs = () => {
  return (
    <>
      <section className="h-[527px] overflow-hidden relative bg-[url('/images/new-contact-us.jpg')] bg-no-repeat bg-center bg-cover opacity-90 ">
        <p className="text-9xl w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70 absolute bottom-0 left-10 mb-0 pb-0">
          Contact Us
        </p>
      </section>
      {/* Code goes below here */}
      <section className="p-32 flex justify-start ">
        <Card className="h-[390px] w-[530px] bg-primary">
          <div className="flex flex-col h-full">
            <Heading variant="h2" className="mb-3, text-white">Kumasi Office</Heading><br />
            <p className="text-white text-2xl">
              The Lancaster Kumasi City<br />
              The Former Golden Tulip Hotel

            </p><br /> <br />

            <Heading variant="h2" className="mb-3, text-white">Work Hours</Heading><br />
            <p className="text-white text-2xl">
              Mondays - Friday: 8:00am - 5:00pm
            </p>
            <p className="text-white text-2xl">
              Saturdays: 10:00am - 4:00pm
            </p>

          </div>
        </Card>
      </section>

      <section className="p-32 flex justify-end bg-[url('/images/sunset-orange-airplane-airplane-wing-wallpaper-preview.jpg')] bg-no-repeat bg-center bg-cover opacity-90 ">
        <Card className="h-[390px] w-[530px] bg-primary">
          <div className="flex flex-col h-full">
            <Heading variant="h2" className="mb-3, text-white">Accra Office</Heading><br />
            <p className="text-white text-2xl">
              City Galleria, 4th Floor opposite the<br />
              Accra Mail off the Spintex Road

            </p><br /> <br />

            <Heading variant="h2" className="mb-3, text-white">Work Hours</Heading>
            <p className="text-white text-2xl">
              Mondays - Friday: 8:00am - 5:00pm
            </p>
            <p className="text-white text-2xl">
              Saturdays: 10:00am - 4:00pm
            </p>

          </div>
        </Card>
      </section>


      <section className="p-20 bg-white flex justify-around">


        <section className=" flex justify-between bg-gray p-5 rounded-lg">

          <section className=" bg-white p-20 flex justify-around rounded-lg">
            <Card className="h-[490px] w-[470px] bg-primary mr-10">

              <div className="py-5 ">

                <p className="text-2xl text-white ">Reach out on other Social </p>
                <p className="text-2xl text-white ">Media Platforms </p>

              </div>  <br />
              <div className="flex items-center">
                <svg
                  fill="white"
                  viewBox="0 0 16 16"
                  height="4em"
                  width="4em"
                >
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                </svg>
                <p className="text-white text-2xl ml-2">Facebook</p>
              </div><br />

              <div className="flex items-center">
                <svg
                  fill="white"
                  viewBox="0 0 16 16"
                  height="4em"
                  width="4em"
                >
                  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 00-1.417.923A3.927 3.927 0 00.42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 001.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 00-.923-1.417A3.911 3.911 0 0013.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 01-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 01-.92-.598 2.48 2.48 0 01-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 100 1.92.96.96 0 000-1.92zm-4.27 1.122a4.109 4.109 0 100 8.217 4.109 4.109 0 000-8.217zm0 1.441a2.667 2.667 0 110 5.334 2.667 2.667 0 010-5.334z" />
                </svg>
                <p className="text-white text-2xl ml-2">Instagram</p>
              </div>

            </Card>



            <div className="">

              <Heading className="" variant="h2">
                Filling Forms to Book Appointment

              </Heading>

              <Input className="ml-2 mt-10 py-8" variant="underlined" label="Enter Name" />
              <div className="flex items-center">
                <Input className="ml-2 mt-10" variant="underlined" label="Enter Email" />
                <Input className="ml-8 mt-10" variant="underlined" label="Phone" />
              </div>

              <div className="flex items-center">
                <Input className="ml-2 mt-10" variant="underlined" label="Pick Date and Time" />
                <Select className="ml-8 mt-10" variant="underlined" label="Select our office" />
              </div>
              <div className="mt-10">
                <Button className="rounded-full " fullWidth size="lg">Submit</Button>
              </div>
            </div>
          </section>
        </section>
      </section>



      <section className="p-15 bg-gray">

        <Heading className="ml-20 pt-5" variant="h1">Frequently Asked Questions</Heading>



        <Accordion

          items={[
            {
              id: "1",

              content: (
                <p>
                  id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
              ),
              label: (
                <div className="flex items-center h-16">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    className="mr-2"

                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                  </svg>
                  <Heading variant="h2"> Sample of a frequently asked question</Heading>
                </div>
              ),
            },
            {
              id: "1",
              content: (
                <p>
                  id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
              ),
              label: (
                <div className="flex items-center h-16">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    className="mr-2"

                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                  </svg>
                  <Heading variant="h2"> Sample of a frequently asked question</Heading>
                </div>
              ),
            },
            {
              id: "1",
              content: (
                <p>
                  id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
              ),
              label: (
                <div className="flex items-center h-16">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    className="mr-2"

                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                  </svg>
                  <Heading variant="h2"> Sample of a frequently asked question</Heading>
                </div>
              ),
            },
            {
              id: "1",
              content: (
                <p>
                  id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
              ),
              label: (
                <div className="flex items-center h-16">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    className="mr-2"

                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                  </svg>
                  <Heading variant="h2"> Sample of a frequently asked question</Heading>
                </div>
              ),
            },
            {
              id: "1",
              content: (
                <p>
                  id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis
                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                  commodo consequat.
                </p>
              ),
              label: (
                <div className="flex items-center h-16">
                  <svg
                    viewBox="0 0 1024 1024"
                    fill="currentColor"
                    height="2em"
                    width="2em"
                    className="mr-2"

                  >
                    <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                    <path d="M623.6 316.7C593.6 290.4 554 276 512 276s-81.6 14.5-111.6 40.7C369.2 344 352 380.7 352 420v7.6c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V420c0-44.1 43.1-80 96-80s96 35.9 96 80c0 31.1-22 59.6-56.1 72.7-21.2 8.1-39.2 22.3-52.1 40.9-13.1 19-19.9 41.8-19.9 64.9V620c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8v-22.7a48.3 48.3 0 0130.9-44.8c59-22.7 97.1-74.7 97.1-132.5.1-39.3-17.1-76-48.3-103.3zM472 732a40 40 0 1080 0 40 40 0 10-80 0z" />
                  </svg>
                  <Heading variant="h2"> Sample of a frequently asked question</Heading>
                </div>
              ),
            },

          ]}
          variant="pills"
          className=""


        />

      </section>






    </>
  );
};

export default ContactUs;
