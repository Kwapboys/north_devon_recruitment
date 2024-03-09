import React, { useRef, useState } from "react";
import { Input as NextInput } from "@nextui-org/react";
import { getCountryCallingCode, formatPhoneNumberIntl } from "react-phone-number-input";
import { AsYouType, CountryCode, Extension, NumberType, PhoneNumber, parsePhoneNumber } from "libphonenumber-js";
import clsx from "clsx";

import { Poppins } from "@/resources/fonts";
import { IInputProps } from "../Input";
import CountrySelect from "./CountrySelect";
import styles from "../input.module.css";
import { ICountryCode } from "@/resources/types/index";




  
const parseNumber = (v: string, defaultCC?: CountryCode) => {  
  const asYouType = new AsYouType(defaultCC);

  try {
    return parsePhoneNumber(v);

  } catch (error) {
    asYouType.input(v);

    const resp: PhoneNumber = {
      countryCallingCode: asYouType.getCallingCode()??"",
      nationalNumber: asYouType.getNationalNumber(),
      number: v,
      country: asYouType.country,
      setExt: function (ext: Extension): void {
        throw new Error("Function not implemented.");
      },
      getPossibleCountries: function (): CountryCode[] {
        throw new Error("Function not implemented.");
      },
      isPossible: function (): boolean {
        throw new Error("Function not implemented.");
      },
      isValid: function (): boolean {
        throw new Error("Function not implemented.");
      },
      getType: function (): NumberType {
        throw new Error("Function not implemented.");
      },
      format: () => "",
      formatNational: () => "",
      formatInternational: () => "",
      getURI: () => "",
      isNonGeographic: function (): boolean {
        throw new Error("Function not implemented.");
      },
      isEqual: function (phoneNumber: PhoneNumber): boolean {
        throw new Error("Function not implemented.");
      }
    }
    return resp;
  }
}

interface IPhoneInputProps extends Omit<IInputProps, "type" | "prepend" | "onChange"> {
  countryCode?: boolean;
  defaultCountryCode?: ICountryCode;
  onChange?: (value: string)=> void;
  defaultValue?: string | number;
}

function PhoneInput({
  id,
  onChange,
  onBlur,
  required,
  error,
  disabled,
  variant = "outlined",
  description,
  label,
  placeholder,
  value,
  className,
  name,
  rounded,
  autoFocus,
  readonly,
  radius,
  size,
  append,
  defaultCountryCode
}: IPhoneInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const innerVariant = variant == "outlined"? "bordered" : variant;
  const [animateLabel, setAnimateLabel] = useState(false);
  const plus_value = value? (value?.charAt(0) == "+"? value : `+${value}`) : ""; 
  const parsedValue = parseNumber(plus_value, defaultCountryCode);
  const innerValue = formatPhoneNumberIntl(parsedValue.number)? formatPhoneNumberIntl(parsedValue.number) : parsedValue.number;
  

  const handleChange = (val: string) => {
    onChange && onChange(val);
    shiftCursorToEnd();
  }

  const handleIsoChange = (val: never) => {
    const iso = val as ICountryCode;

    if(iso) {
      const cc = iso !== "ZZ"? getCountryCallingCode(iso) : "";
      const cc_plus = cc? `+${cc}` : cc;
      onChange && onChange(`${cc_plus}${parsedValue.nationalNumber}`);
      shiftCursorToEnd();
    }
  }

  const shiftCursorToEnd = () =>{
    // const len = value?.length??0;
    const inputElem = inputRef.current;
    
    if(inputElem) {
      inputElem.focus();
    //   inputElem.setSelectionRange(len, len);
    }
  }
  

  return (
    <NextInput
      id={id}
      ref={inputRef}
      type="tel"
      name={name}
      label={label}
      placeholder={placeholder}
      startContent={
        <CountrySelect 
          value={(parsedValue.country? parsedValue.country : "ZZ") as ICountryCode}
          onChange={handleIsoChange}
          onFocus={shiftCursorToEnd}
        />
      }
      description={description}
      isReadOnly={readonly}
      isRequired={required}
      isDisabled={disabled}
      autoFocus={autoFocus}
      radius={rounded? "full" : radius}
      size={size}
      variant={innerVariant}
      className={clsx(
        "text-secondary",
        Poppins.className,
        className,
      )}
      endContent={append}
      value={innerValue}
      onValueChange={handleChange}
      onBlur={(e) => {
        if(!value) {
          setAnimateLabel(false); 
        }
    
        onBlur && onBlur(e);
      }}
      onFocus={() =>{setAnimateLabel(true)}}
      errorMessage={error}
      classNames={{
        inputWrapper: "border-gray-neutral focus:bg-secondary",
        label: clsx(
          animateLabel? "!-translate-y-6 bg-white w-fit px-1 !text-secondary" : styles.phoneLabel
        ),
        innerWrapper: "!items-center pt-0"
      }}
      isInvalid={Boolean(error)}
    />
  );
}

export default PhoneInput;