import React, { ReactNode, useState } from "react";
import Image from "next/image";
import { toast } from "react-toastify";
import clsx from "clsx";

import UploadIcon from "@/icons/UploadIcon";
import { fileSizeConversion } from "@/utilities";
import { IImage } from "@/resources/types/states";



interface FileUploadProps {
  id?: string;
  className?: string;
  description?: string;
  showPreview?: boolean;
  selectMultiple?: boolean;
  name?: string;
  placeholder?: string | ReactNode;
  fileType?: "IMAGE" | "DOCUMENT" | "VIDEO" | "AUDIO";
  required?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  autoFocus?: boolean;
  value?: IImage | Array<IImage>;
  maxSize?: number;
  onFileSelected?: (files: FileList) => void;
  onChange?: (value: IImage | Array<IImage>) => void;
  onBlur?: (e: React.FocusEvent<any, Element>) => void;
  error?: string;
  onClick?:()=>void;
}


const FileUpload: React.FC<FileUploadProps> = ({
  selectMultiple,
  fileType = "IMAGE",
  className,
  maxSize,
  description,
  showPreview,
  name,
  disabled,
  error,
  id,
  onBlur,
  onChange,
  onClick,
  placeholder,
  required,
  value
}) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isDraggedOver, setDraggedOver] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");


  const fileTypeHandler = (fileType: string): string => {
    switch (fileType) {
      case "DOCUMENT":
        return "application/*";
      case "VIDEO":
        return "video/*";
      case "AUDIO":
        return "audio/*";
            
      case "IMAGE":
      default:
        return "image/*";
    }
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    if(!disabled) {
      e.preventDefault();
      setDraggedOver(true);
    }
  };

  const handleDragLeave = () => {
    if(!disabled) 
      setDraggedOver(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleChange = (files: FileList) => {
    try {
      if(selectMultiple) {
        const urls: Array<IImage> = [];

        for(let i = 0; i < files.length; i++) {
          const file = files?.[i];

          if(maxSize && file.size > maxSize) {
            continue;
          }

          if(file.type.split("/")[0] !== fileTypeHandler(fileType).split("/")[0]) {
            continue
          }

          const url = window.URL.createObjectURL(file);
          urls.push({
            src: url,
            name: file.name,
            size: file.size,
            type: file.type
          });
        }
        onChange && onChange(urls);
        
      } else {
        const file = files?.[0];

        if(maxSize && file.size > maxSize) {
          toast.warning("File size is bigger than expected!!");
          return;
        }

        if(file.type.split("/")[0] !== fileTypeHandler(fileType).split("/")[0]) {
          toast.warning("File type not supported");
          return;
        }

        const url = window.URL.createObjectURL(file);
        onChange && onChange({
          src: url,
          name: file.name,
          size: file.size,
          type: file.type
        });
      }
    }	finally {
      setDraggedOver(false);
      if(inputRef.current) inputRef.current.value = "";
    }
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDraggedOver(false);

    const files = e.dataTransfer.files;
    handleChange(files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files) {
      handleChange(files)
    }
  };

  

  return (
    <div className="space-y-2">
      <div
        className={clsx(
          "rounded-xl border-2 h-36 border-dashed",
          error? "border-danger-error" : "border-[#d4d4d5]",
          disabled? "bg-gray cursor-not-allowed grayscale" : "bg-primary-lighter cursor-pointer",
          "text-center flex flex-col justify-center",
          { "border-2 border-dashed border-[#2185d0]": isDraggedOver },
          className
        )}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onClick={() => {
          if(!disabled) {
            inputRef.current?.focus();
            inputRef.current?.click();
          }
        }}
      >
        <input
          id={id}
          name={name}
          ref={inputRef}
          type="file"
          accept={fileTypeHandler(fileType)}
          onChange={handleFileInputChange}
          className="hidden"
          // hidden
          multiple={selectMultiple}
          onBlur={onBlur}
        />
        
        {value && ((value as IImage).src || (value as Array<IImage>)?.[0]?.src) && showPreview? (
          <>
            {Array.isArray(value)? (
              <div className="scroll-smooth snap-x ">
                {value.map((v, index) =>(
                  <div key={`img-${index}`} className="snap-start scroll-ml-5 relative">
                    <Image
                      src={v.src}
                      alt={(v.name??"image-name-")+index}
                      height={100}
                      width={180}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <>{value.src && (
                <div className="relative w-full h-full rounded-[inherit]">
                  <Image
                    src={value.src}
                    alt={(value.name??"image-name")}
                    fill
                    className="w-auto h-auto object-cover rounded-[inherit]"
                  />
                </div>
              )}
              </>
            )}
          </>
        ) : (
          <div className="text-gray-500">
            {/* Placeholder */}
            {isDraggedOver? (
              <div className="w-full h-[inherit] flex justify-center items-center text-lg font-semibold">
                Drop file here
              </div>
            ) : (
              <>
                {placeholder?? (
                  <>
                    <p className="font-poppins inline-flex gap-2">
                      <span className={clsx(disabled? "text-gray-700" : "text-primary")}>Click</span> or drag the file
                      here to upload
                      <span>
                        <UploadIcon className="w-5 h-5" />
                      </span>
                    </p>
  
                    <div className="text-xs font-poppins font-light">
                      {description && <p>{description}</p>}
                      {maxSize && <p>Maximum file size {fileSizeConversion(maxSize)}</p>}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        )}
  
      </div>
  
      {/* Helper Text */}
      {required && error && (
        <div className={clsx(
          "text-[10px] text-gray-500 pl-2",
          { ["!text-danger"]: error && !disabled },
        )}>
          {error}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
