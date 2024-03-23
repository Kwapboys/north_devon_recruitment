"use client";
import React from "react";
import Card from "@/components/Card";
import Heading from "@/components/Heading";
import { Image } from "@nextui-org/react";
import Button from "@/components/Button";

import Forms from "@/components/forms";

import AhodwoMapSearch from "../../../components/AhodwoMapSearch";
import useEmblaCarousel from "embla-carousel-react";
import VancanciesPage from "./Vacancies";

const Vacancies = () => {
  let vacancies;

  if (typeof window !== "undefined") {
    vacancies = <VancanciesPage />;
  }

  return { vacancies };
};

export default Vacancies;
