import React from "react";
import { RiCloseFill } from "react-icons/ri";
import Input from "./Input";

interface ImageUploadProps {
  files: any[];
  setFiles: any;
  message: string;
  handleFiles: (e: any) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  files,
  setFiles,
  handleFiles,
  message,
}) => {
  const removeImage = (name: string) => {
    setFiles(files.filter((file: any) => file.name !== name));
  };

  return (
    <div className="flex justify-center items-center px-3">
      <div className="rounded-lg shadow-sm bg-gray-50 md:w-full lg:w-full w-full p-6">
        <div className="mb-4">
          {message && (
            <span className="flex justify-center items-center text-sm mb-2 text-red-500">
              {message}
            </span>
          )}
          <div className="flex items-center justify-center w-full">
            <label
              className={`flex cursor-pointer flex-col ${
                message && "border-red-500 hover:border-red-500"
              } w-full h-36 border-2 border-gray-300 rounded-lg border-dashed hover:bg-gray-50 hover:border-gray-400 transition`}
            >
              <div className="flex flex-col items-center justify-center pt-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`w-12 h-12 text-gray-400 ${
                    message && "text-red-400 hover:text-red-300"
                  } hover:text-gray-600`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                    clipRule="evenodd"
                  />
                </svg>
                <p
                  className={`pt-1 text-base ${
                    message && "text-red-400 hover:text-red-300"
                  } tracking-wider text-gray-400`}
                >
                  Select a photo
                </p>
              </div>
              <Input
                type="file"
                onChange={handleFiles}
                className="opacity-0 w-full"
                multiple
                name="files[]"
              />
            </label>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 w-full">
            {files.map((file: any, key: any) => (
              <div key={key} className="relative w-20 h-20">
                <button
                  onClick={() => removeImage(file.name)}
                  className="absolute top-0 right-0 text-red-500 rounded-full p-1 hover:bg-white"
                >
                  <RiCloseFill />
                </button>
                <img
                  className="object-cover w-full h-full rounded-md"
                  src={URL.createObjectURL(file)}
                  alt="preview"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageUpload;
