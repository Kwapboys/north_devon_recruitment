"use client";
import React, { useState } from "react";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import Image from "next/image";
import Button from "@/components/Button";
import Input from "@/components/forms/Input";
import Forms from "@/components/forms";


const Vacancies = () => {
  const [value, setValue] = React.useState('fruit');

 const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {

   setValue(event.target.value);

 };
    return (
      
      <>
        <section className="h-[527px] overflow-hidden relative bg-[url('/images/vacancies.jpg')] bg-no-repeat bg-center bg-cover opacity-90">
          <p className="text-9xl w-full bg-transparent font-black subpixel-antialiased tracking-wide text-gray opacity-70 absolute bottom-0 left-10 mb-0 pb-0">
            Vacancies
          </p>
        </section>
       {/* New section with the left text and image on the right */}
      <section className="flex justify-center items-center space-x-8 mt-8 px-32">
        {/* Text on the left */}
        <div className="flex-1">
          
          <Heading variant="h4">Are you based in the UK?</Heading>
          <p>Are you a Nurse or a Midwife who relocated to the UK on the occupational shortage list as a carer or a Senior career?.</p><br/>
          <p>NDR is introducing an ONLINE OET CLASS tailored around your needs. Tap on button to Register</p><br/>
          <Button> Register </Button>

         
        </div>

        {/* Image with shadowed card on the right */}
        <div className="flex-1">
        <Card className="w-[585.99px] h-[494px]" bordered ={false} padded={true}>
            <div className="relative w-full h-full overflow-hidden rounded">
            <Image
              src="/images/vacanciesImage.jpg"
              alt="Your Image Alt Text"
              layout="fill"
              objectFit="cover"
              className="rounded"
            />
            </div>
          </Card>
        </div>
      </section>

      {/* Horizontal Scroll Cards */}
<section id="horizontal-scroll" className="w-full space-y-6 py-24 pl-32">

<Heading variant="h2">Our Vacancies Available</Heading><br/>
  <div className="flex overflow-x-auto space-x-9 p-4">
    {/* Card 1 */}
    <div className="w-[370.3px]">
      <Card className="w-full h-[290px] bg-gray">
        <div className="flex flex-col h-full justify-between">
        <Heading variant="h4">Banking & non-banking Professionals</Heading>
          <p>The worlds leading financial services firm, BARCLAYS, is hiring banking & non-banking Professionals at various levels.
            Those roles are oepn to all, including applicants based outside the UK.
          </p>
          <Button onClick={() => window.location.href='/appointmentForm'}> Book </Button>
        </div>
      </Card>
    </div>

     {/* Card 2 */}
     <div className="flex-shrink-0 w-[370.3px]">
      <Card className="w-full h-[290px] bg-gray">
        <div className="flex flex-col h-full justify-between">
        <Heading variant="h3">Are you based in the UK?</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button>Button</Button>
        </div>
      </Card>
    </div>
  
     {/* Card 3 */}
     <div className="flex-shrink-0 w-[370.3px]">
      <Card className="w-full h-[290px] bg-gray">
        <div className="flex flex-col h-full justify-between">
        <Heading variant="h3">Are you based in the UK?</Heading>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <Button  size="md">Button</Button>
        </div>
      </Card>
    </div>
  </div>
</section>

{/* forms */}
<section className="flex justify-center items-center space-x-4 mt-8 pb-16">
  <Card className="w-full h-[749px] bg-gray grid grid-cols-2 gap-8"  bordered ={false}>
    <div className="col-span-1 p-8">
      <Heading variant="h2">Our Standardized Test</Heading>
      <br />
      <p>
        We are into 5 standardized tests which are OET,GMAT,GRE,TOFEL and IELT. Our State of the Art Training Center offers the best Classroom and 
        online tuition and learning experience which leads to excellence performance.
      </p>
      <br /> 
    
      <p>GRE (Graduate Record Examination) is a general test that is often required for admission to graduate programs
         (master's and doctoral degrees) in various disciplines. Individuals interested in pursuing graduate education, including business,
         humanities, social sciences, natural sciences, and engineering, commonly take the GRE.</p>
      <br />
     
      <p> GMAT (Graduate Management Admission) is specifically designed for individuals applying to graduate management programs, such as MBA. 
        However, it is generally taken by individuals who aspire to pursue a graduate degree in business or management.</p>
      <br />
      <p>IELTS (International English Language Testing System) - Measures English language proficiency for non-native English speakers.</p>
      <br />
      <p>OET (Occupational English Test) - Assesses English language skills of healthcare professionals.</p>
      <br />
      <p>TOEFL (Test of English as a Foreign Language) - Another common test for English language proficiency, often required for admission to English-speaking universities.</p>
     
    </div>

    <div className="col-span-1 flex justify-center items-center">
      <Card className="w-full h-[500px] bg-white p-28">
        <Heading variant="h4">Fill forms to register for a standardized test</Heading>
        <Forms />
        <br/>
        <Button className="text-center">Proceed to payment</Button>

      </Card>
    </div>
  </Card>
</section>




<section className="flex justify-center items-center space-x-4 mt-8 px-32 pb-32">
  {/* Card on the left */}
  <div className="flex-1">
    <Card className="w-[698px] h-[571px] bg-gray">
      <div className="flex flex-col h-full justify-between">
      
      </div>
    </Card>
  </div>

  {/* Two Vertical Cards on the right */}
  <div className="flex-shrink-0 space-y-10">
    <Card className="h-[290px] w-[430px] bg-primary">
      <div className="flex flex-col h-full">
        <Heading variant="h2" className="mb-3">Kumasi Training Center</Heading>
        <p>
          NorthDevon Training center,<br/>
          Ahodwo Roundabout, 3rd floor,<br/>
          Nyarko Plaza
        </p><br/>

        <Heading variant="h2" className="mb-3">Working Hours</Heading>
        <p>
          Monday - Friday: 8:00am - 5:00am
        </p>
      
      </div>
    </Card>

    {/* Vertical Card 2 */}
    <Card className="w-[430px] h-[239px] bg-gray">
  <div className="relative w-full h-full overflow-hidden">
    {/* Your Image */}
    <Image
      src="/images/Training center.jpg"  
      alt="Your Image Alt Text"
      layout="fill"
      objectFit="cover"
    />
  </div>
</Card>


  </div>
</section>

{/* Continue with other content or components... */}
</>
);
};

export default Vacancies;