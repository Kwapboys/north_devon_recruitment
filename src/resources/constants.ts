import { getCountryCallingCode } from "react-phone-number-input/input";
import countryNames from "react-phone-number-input/locale/en.json";
import {CountryCode} from "libphonenumber-js";

import { ISupportedCountry } from "./types/index";



export const SUPPORTED_COUNTRIES: Array<ISupportedCountry> = [
  {
    name: countryNames["EG" as CountryCode],
    iso: "EG",
    code: getCountryCallingCode("EG" as CountryCode),
    flag: "https://flagcdn.com/eg.svg",
    cities: [
      {name: "Cairo"},
      {name: "Aswan"},
      {name: "Damietta"},
      {name: "Alexandria"},
      {name: "Giza"},
      {name: "Luxor"},
    ]
  }, {
    name: countryNames["GH" as CountryCode],
    iso: "GH",
    code: getCountryCallingCode("GH" as CountryCode),
    flag: "https://flagcdn.com/gh.svg",
    cities: [
      // GREATER ACCRA
      {name: "Accra"},
      {name: "Tema"},
      {name: "Kumasi"}
    ]
  }, {
    name: countryNames["RW" as CountryCode],
    iso: "RW",
    code: getCountryCallingCode("RW" as CountryCode),
    flag: "https://flagcdn.com/rw.svg",
    cities: [
      {name: "Kigali"},
      {name: "Ruhengeri"},
      {name: "Bukavu"},
      {name: "Musanze"},
    ]
  }, {
    name: countryNames["GB" as CountryCode],
    iso: "GB",
    code: getCountryCallingCode("GB" as CountryCode),
    flag: "https://flagcdn.com/gb.svg",
    cities: [
      {name: "London"},
      {name: "Manchester"},
      {name: "Leeds"},
      {name: "Merseyside"},
      {name: "Colchester"},
      {name: "Newcastle"},
    ]
  }, {
    name: countryNames["US" as CountryCode],
    iso: "US",
    code: getCountryCallingCode("US" as CountryCode),
    flag: "https://flagcdn.com/us.svg",
    cities: [
      // GREATER ACCRA
      {name: "Oklahoma City", state: "Oklahoma"},
      {name: "Phoenix",  state: "Arizona"},
      {name: "Indianapolis", state: "Indiana"},
      {name: "Atlanta", state: "Georgia"},
      {name: "Columbus", state: "Ohia"},
      {name: "Austin", state: "Texas"},
      {name: "Sacramento", state: "California"},
      {name: "Springfield", state: "Illinois"},
      {name: "Lincoln City", state: "Nebraska"},
      {name: "Philadelphia", state: "Pennsylvania"},
      {name: "New York City", state: "New York"},
      {name: "Los Angeles", state: "California"},
      {name: "Houston", state: "Texas"},
      {name: "Seattle", state: "Washington"},
      {name: "Chicago", state: "Illinois"},
      {name: "Minneapolis", state: "Minnesota"},
      {name: "Las Vegas", state: "Nevada"},
      {name: "Las Vegas", state: "Nevada"},
      {name: "Oakland", state: "San Francisco"},
      {name: "Tucson", state: "Arizona"},
    ]
  }
];

export const RELATION_TYPES = ["Family", "Relative", "Guest"];
export const SUFFIXES = ["II", "III", "IV", "V", "JR"];
export const RELATIONSHIPS = [
  "Father", 
  "Mother", 
  "Brother", 
  "Sister", 
  "Son",
  "Daughter",
  "Spouse",
  "Parental Grandfather",
  "Parental Grandmother",
  "Maternal Grandfather",
  "Maternal Grandmother",
  "Past Spouse",
  "Child Father",
  "Child Mother",
  "Other"
];


export const TOKEN_KEYS = {
  token: "__FC_TK",
  refreshToken: "__FC_RTK"
}

export  const statusColorMap: { [key: string]: "success" | "danger" } = {
  Attending: "success",
  "Fully Paid": "success",
  "Not Paid": "danger",
  "Due Refund": "danger",
  "Pending": "danger"
};

// Iana Time Zones
export const TimeZones = Intl.supportedValuesOf("timeZone");

export const Attires = [
  "Black Tie",
  "Casual",
  "Cocktail",
  "Festive",
  "White Tie",
  "Formal",
  "Dressy Resort",
  "Lounge",
];

export const FeesTypes = [
  {
    title: "Fee per family unit",
    value: "family_unit",
  },
  {
    title: "Fee per person",
    value: "ageGroups"
  }
];

export const AgeGroups = [
  {
    title: "Infant",
    min: 0,
    max: 5,
    key: "infant"
  },
  {
    title: "Child",
    min: 6,
    max: 12,
    key: "child"
  },
  {
    title: "Teen",
    min: 13,
    max: 17,
    key: "teen"
  },
  {
    title: "Adult",
    min: 18,
    max: 54,
    key: "adult"
  },
  {
    title: "Senior",
    min: 55,
    max: "+",
    key: "senior"
  },
]

