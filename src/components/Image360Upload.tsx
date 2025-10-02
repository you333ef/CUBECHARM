import React from "react";
import Input from "./Input";
import { RiCloseFill } from "react-icons/ri";
import { SiInsta360 } from "react-icons/si";

interface Image360UploadProps {
  images: any[];
  setImages: any;
  handleImages: (e: any) => void;
}

const Image360Upload: React.FC<Image360UploadProps> = ({
  images,
  setImages,
  handleImages,
}) => {
  const removeImage = (name: string) => {
    setImages(images.filter((image: any) => image.name !== name));
  };

  return (
    <div className="flex justify-center items-center px-3">
      <div className="rounded-lg shadow-sm bg-gray-50 md:w-full lg:w-full w-full p-6">
        <div className="mb-4">
          <div className="flex items-center justify-center w-full">
            <label
              className={`flex cursor-pointer flex-col w-full h-36 border-2 border-gray-300 rounded-lg border-dashed hover:bg-gray-50 hover:border-gray-400 transition`}
            >
              <div className="flex flex-col items-center justify-center pt-6">
                <SiInsta360 className="text-4xl mb-1 mt-1.5 text-gray-500" />
                <p className="pt-1 text-base tracking-wider text-gray-400">
                  Select a 360° photo (optional)
                </p>
              </div>
              <Input
                type="file"
                onChange={handleImages}
                className="opacity-0 w-full"
                multiple
                name="files[]"
              />
            </label>
          </div>
          <div className="flex flex-wrap gap-2 mt-4 w-full">
            {images.map((file: any, key: any) => (
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

export default Image360Upload;
