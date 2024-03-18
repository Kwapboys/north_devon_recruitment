"use client";
import React from "react";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import Checkbox from "@/components/forms/Checkbox";
import Button from "@/components/Button";
import IconButton from "@/components/Button/IconButton";
import Avatar from "@/components/avatars/Avatar";
import AvatarGroup from "@/components/avatars/AvatarGroup";
import Textarea from "@/components/forms/Textarea";
import Tabs from "@/components/Tabs";
import UserAvatar from "@/components/avatars/UserAvatar";
import Input from "@/components/forms/Input";
import Select from "@/components/forms/Select";
import SplitButton from "@/components/Button/SplitButton";
import {Link} from "@nextui-org/react";
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  CameraIcon,
  ClockIcon,
  FacebookIcon,
  TelephoneIcon,
} from "@/icons/index";
import CountrySelect from "@/components/forms/PhoneInput/CountrySelect";
import PhoneInput from "@/components/forms/PhoneInput/index";
import Accordion from "@/components/Accordion";
import NextImage from "next/image";
import { Chip, Image, } from "@nextui-org/react";
import {
  BsFillTelephoneFill,
  BsMailbox,
  BsTelephoneFill,
} from "react-icons/bs";
import { MdAllInbox } from "react-icons/md";
import { ImInstagram } from "react-icons/im";
import { CiMail } from "react-icons/ci";
import { IoMdMail } from "react-icons/io";
import { TbClockFilled } from "react-icons/tb";
import { GoClockFill } from "react-icons/go";
import { Table } from "@/components/ui/table";
import Topbar from "../sections/Topbar";
import Footer from "../sections/Footer";
import NavBar from "../sections/Navbar";

export default function Components() {
  
  return (
    <React.Fragment>
      <div className="min-h-screen p-24 pb-48 space-y-20">
        <section id="cards" className="w-full space-y-4">
          <Heading variant="h3">Cards</Heading>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Card className="w-full h-60" shadow padded={false}>
                Shadowed card
              </Card>
            </div>
            <div>
              <Card className="w-full h-60" bordered padded={false}>
                Bordered Card
              </Card>
            </div>
            <div>
              <Card className="w-full h-60" bordered shadow>
                Padded Card
              </Card>
            </div>
          </div>
        </section>

        <section id="buttons" className="w-full space-y-4">
          <Heading variant="h3">Buttons</Heading>

          <div className="grid grid-cols-6 gap-4">
            {/* Variants */}
            <div className="space-y-2">
              <Button fullWidth>Solid</Button>

              <Button fullWidth variant="faded">
                Faded
              </Button>

              <Button fullWidth variant="ghost">
                Ghost
              </Button>

              <Button fullWidth variant="link" color="secondary">
                Link
              </Button>

              <Button fullWidth variant="outline" color="secondary">
                Outline
              </Button>

              <Button fullWidth variant="outlined-solid" color="secondary">
                Outline-solid
              </Button>
            </div>

            {/* Sizes */}
            <div className="space-y-2">
              <Button fullWidth size="sm">
                Small Size
              </Button>

              <Button fullWidth variant="faded" size="md">
                Medium Size
              </Button>

              <Button fullWidth variant="ghost" size="lg">
                Large Size
              </Button>
            </div>

            {/* Variants */}
            <div className="space-y-2">
              <Button fullWidth disabled>
                Disabled
              </Button>

              <Button fullWidth loading color="secondary">
                Loading
              </Button>

              <Button
                fullWidth
                variant="ghost"
                endIcon={<ArrowRightIcon className="stroke-1" />}
              >
                Icon
              </Button>

              <Button
                fullWidth
                variant="link"
                color="secondary"
                startIcon={<ArrowLeftIcon className="stroke-1" />}
              >
                Icon
              </Button>

              <Button fullWidth variant="outline" color="secondary" rounded>
                Rounded
              </Button>

              <Button
                fullWidth
                variant="outlined-solid"
                color="secondary"
                description="description"
                title="Detailed"
              ></Button>
            </div>

            {/* Icon Buttons */}
            <div className="space-y-2">
              <div className="space-x-2">
                <IconButton>
                  <CameraIcon className="w-5 h-5" />
                </IconButton>

                <IconButton color="secondary">
                  <CameraIcon className="w-5 h-5" />
                </IconButton>
              </div>

              <div className="space-x-2">
                <IconButton variant="outline" rounded>
                  <CameraIcon className="w-5 h-5" />
                </IconButton>

                <IconButton variant="outline" rounded color="secondary">
                  <CameraIcon className="w-5 h-5" />
                </IconButton>
              </div>

              <div className="space-x-2">
                <IconButton variant="ghost" radius="lg">
                  <CameraIcon className="w-5 h-5" />
                </IconButton>

                <IconButton variant="ghost" radius="lg" color="secondary">
                  <CameraIcon className="w-5 h-5" />
                </IconButton>
              </div>

              <div className="space-x-2">
                <IconButton variant="faded" radius="none">
                  <CameraIcon className="w-5 h-5" />
                </IconButton>

                <IconButton variant="faded" radius="none" color="secondary">
                  <CameraIcon className="w-5 h-5" />
                </IconButton>
              </div>

              <div className="space-x-2">
                <IconButton variant="outlined-solid" radius="sm">
                  <CameraIcon className="w-5 h-5" />
                </IconButton>

                <IconButton
                  variant="outlined-solid"
                  radius="sm"
                  color="secondary"
                >
                  <CameraIcon className="w-5 h-5" />
                </IconButton>
              </div>

              <div className="space-x-2">
                <IconButton variant="link" radius="md">
                  <CameraIcon className="w-5 h-5" />
                </IconButton>

                <IconButton variant="link" radius="md" color="secondary">
                  <CameraIcon className="w-5 h-5" />
                </IconButton>
              </div>
            </div>

            {/* Split Buttons */}
            <div className="space-y-2 col-span-2">
              <SplitButton
                buttons={[
                  {
                    label: "Bit",
                  },
                  {
                    label: "Slip",
                  },
                ]}
              ></SplitButton>
            </div>
          </div>
        </section>

        <section id="headings" className="w-full space-y-4">
          <Heading variant="h3">Headings / Labels</Heading>

          <Heading variant="h1">Heading 1</Heading>
          <Heading variant="h2">Heading 2</Heading>
          <Heading variant="h3">Heading 3</Heading>
          <Heading variant="h4">Heading 4</Heading>
          <Heading variant="h5">Heading 5</Heading>
          <Heading variant="h6">Heading 6</Heading>
        </section>

        <section id="checkbox" className="w-full space-y-4">
          <Heading variant="h3">Checkbox</Heading>

          <div>
            <Checkbox defaultChecked size="md">
              Option
            </Checkbox>
          </div>
          <div>
            <Checkbox color="secondary" size="md">
              Option
            </Checkbox>
          </div>
        </section>

        <section id="avatar" className="w-full space-y-4">
          <Heading variant="h3">Avatar</Heading>

          <div className="grid grid-cols-4 gap-4">
            <div className="space-y-3">
              <Avatar color="primary" />
              <Avatar color="secondary" />
              <Avatar color="primary" bordered initials="JK" />
              <Avatar color="secondary" bordered initials="MJ" />
            </div>

            <div className="space-y-2">
              <Avatar bordered />
              <Avatar />
              <Avatar radius="none" />
              <Avatar radius="sm" />
              <Avatar radius="md" />
              <Avatar radius="lg" />
            </div>

            <div className="space-y-3">
              <Avatar bordered initials="AB" disabled />

              <Avatar
                placeholder={<CameraIcon className="w-5 h-5" />}
                onClick={() => {
                  alert("Avatar !!!");
                }}
              />

              <UserAvatar
                name="John Doe"
                initials="JD"
                description="johndoe@email.com"
              />

              <AvatarGroup
                avatars={[
                  {
                    initials: "ABC",
                  },
                  {},
                ]}
                bordered
                rounded
                className="justify-start"
              />
            </div>
          </div>
        </section>

        <section id="Tabs" className="w-full space-y-4">
          <Heading variant="h3">Tabs</Heading>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <Tabs
                tabList={[
                  {
                    id: "tab_1",
                    label: "Tab 1",
                  },
                  {
                    id: "tab_2",
                    label: "Tab 2",
                  },
                  {
                    id: "tab_3",
                    label: "Tab 3",
                  },
                ]}
                color="primary"
              />

              <Tabs
                tabList={[
                  {
                    id: "tab_1",
                    label: "Tab 1",
                  },
                  {
                    id: "tab_2",
                    label: "Tab 2",
                  },
                  {
                    id: "tab_3",
                    label: "Tab 3",
                  },
                ]}
                color="secondary"
              />
            </div>

            <div>
              <Tabs
                tabList={[
                  {
                    id: "tab_1",
                    label: "Tab 1",
                  },
                  {
                    id: "tab_2",
                    label: "Tab 2",
                  },
                  {
                    id: "tab_3",
                    label: "Tab 3",
                  },
                ]}
                color="primary"
                variant="bordered"
              />

              <Tabs
                tabList={[
                  {
                    id: "tab_1",
                    label: "Tab 1",
                  },
                  {
                    id: "tab_2",
                    label: "Tab 2",
                  },
                  {
                    id: "tab_3",
                    label: "Tab 3",
                  },
                ]}
                color="secondary"
                variant="pill"
              />
            </div>
            <div></div>
          </div>
        </section>
              
            <Card className="h-[80px] w-[50px] bg-primary">Location</Card>

        <Heading>Phone and Country Inputs</Heading>
        <section id="Tabs" className="grid grid-cols-4 gap-2 ">
          <CountrySelect />
          <PhoneInput />
        </section>

        <Heading variant="h3">Accordions</Heading>
        <section
          id="inputs"
          className="w-full grid grid-cols-4 gap-2 space-y-4"
        >
          <Accordion
            items={[
              {
                id: "1",
                content: (
                  <p>
                    {" "}
                    id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.";
                  </p>
                ),
                label: "Accordion 1",
              },
              {
                id: "2",
                content: (
                  <p>
                    {" "}
                    id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.";
                  </p>
                ),
                label: "Accordion 1",
              },
              {
                id: "3",
                content: (
                  <p>
                    {" "}
                    id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.";
                  </p>
                ),
                label: "Accordion 1",
              },
            ]}
            variant="underlined"
          />
          <Accordion
            items={[
              {
                id: "1",
                content: (
                  <p>
                    {" "}
                    id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.";
                  </p>
                ),
                label: "Accordion 1",
              },
              {
                id: "2",
                content: (
                  <p>
                    {" "}
                    id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.";
                  </p>
                ),
                label: "Accordion 1",
              },
              {
                id: "3",
                content: (
                  <p>
                    {" "}
                    id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.";
                  </p>
                ),
                label: "Accordion 1",
              },
            ]}
            variant="shadow"
          />
          <Accordion
            items={[
              {
                id: "1",
                content: (
                  <p>
                    {" "}
                    id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.";
                  </p>
                ),
                label: "Accordion 1",
              },
              {
                id: "2",
                content: (
                  <p>
                    {" "}
                    id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.";
                  </p>
                ),
                label: "Accordion 1",
              },
              {
                id: "3",
                content: (
                  <p>
                    {" "}
                    id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.";
                  </p>
                ),
                label: "Accordion 1",
              },
            ]}
            variant="pills"
          />
          <Accordion
            items={[
              {
                id: "1",
                content: (
                  <p>
                    {" "}
                    id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.";
                  </p>
                ),
                label: "Accordion 1",
              },
              {
                id: "2",
                content: (
                  <p>
                    {" "}
                    id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.";
                  </p>
                ),
                label: "Accordion 1",
              },
              {
                id: "3",
                content: (
                  <p>
                    {" "}
                    id: "1", label: "Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat.";
                  </p>
                ),
                label: "Accordion 1",
              },
            ]}
            variant="bordered"
          />
        </section>
        <section id="inputs" className="w-full space-y-4">
          <Heading variant="h3">Inputs</Heading>

          <div className="space-y-2">
            <Textarea label="Textarea" />

            <Input label="Input" />
            <Input variant="underlined" label="Input" />

            <Select variant="underlined" label="Select" />
          </div>
          <section id="cards">
            <Card className="bg-primary h-[150px] w-[200px]"><p>card</p></Card>
          </section>
        </section>
        <section id="navbar" className="w-full space-y-4">
          <Heading variant="h3">Nav bar</Heading>
            <NavBar/>
         
          <Heading variant="h3">Top NavBar</Heading>
         <Topbar/>
        </section>
        <Heading variant="h3">Footer</Heading>
        <Footer/>

      </div>
    </React.Fragment>

  
  );
  
  
  
}
