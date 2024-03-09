import {CountryCode} from "libphonenumber-js";
import { Country, getCountryCallingCode } from "react-phone-number-input";



export interface IconType {
  className?: string;
}

export type ICountryCode = CountryCode & "ZZ"; 


export interface ICountry {
  name: string;
  iso: string;
  code?: string;
  flag?: string;
}

export interface IRequestErrorResponse {
  message?: string,
  description?: string;
  status: number;
  code?: number;
}

export type IAgeType = "Adult" | "Child";

export interface ISupportedCountry {
  name: string;
  iso: Country;
  code: ReturnType<typeof getCountryCallingCode>;
  flag: string;
  cities?: Array<{
    name: string;
    state?: string;
  }>
}

