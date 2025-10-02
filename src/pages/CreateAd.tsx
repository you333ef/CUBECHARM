import Header from "../components/Header";
import Input from "../components/Input";
import Textarea from "../components/Textarea";
import Button from "../components/Button";
import CategoryDropdown from "../components/CategoryDropdown";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ImageUpload from "../components/ImageUpload";
import { useState } from "react";
import VideoUpload from "../components/VideoUpload";
import Image360Upload from "../components/Image360Upload";

const CreateAd = () => {
  const [files, setFiles] = useState<any>([]);
  const [images, setImages] = useState<any>([]); // 360° images
  const [message, setMessage] = useState<any>(null);

  const schemaValidation = yup.object().shape({
    title: yup.string().required("Title is required."),
    description: yup.string().required("Description is required."),
    category: yup.string().required("Category is required."),
    city: yup.string().required("City is required."),
    address: yup.string().required("Address is required."),
    size: yup
      .number()
      .required("Size is required.")
      .typeError("Size must be a number"),
    rooms: yup
      .number()
      .typeError("Rooms must be a number")
      .required("Rooms is required."),
    bathrooms: yup
      .number()
      .typeError("Rooms must be a number")
      .required("Bathrooms is required."),
    price: yup
      .number()
      .typeError("Price must be a number")
      .required("Price is required."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });

  const handleFile = (event: any) => {
    const selectedFiles = Array.from(event.target.files);

    setFiles((prevFiles: any) => [...prevFiles, ...selectedFiles]);
    setMessage(null);
  };

  // 360° images
  const handleImages = (event: any) => {
    const selectedFiles = Array.from(event.target.files);

    setImages((prevFiles: any) => [...prevFiles, ...selectedFiles]);
  };

  const submitHandler = (data: any) => {
    if (files.length === 0) {
      return setMessage("Please select at least one file");
    }
    console.log(data);
    reset();
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="container max-w-screen-xl mx-auto md:mt-[2%] md:mb-0 lg:mb-0 lg:mt-[2%] mt-[12%] mb-6">
          <div>
            <div className="bg-white rounded-lg shadow-md p-10 mb-8">
              <div className="grid gap-8 gap-y-4 text-lg grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-700">
                  <p className="font-bold text-2xl">Create an Announcement</p>
                  <p>Please fill out all the required fields.</p>
                </div>

                <div className="lg:col-span-2">
                  <form onSubmit={handleSubmit(submitHandler)}>
                    <div className="grid gap-8 gap-y-4 text-lg grid-cols-1 md:grid-cols-5">
                      <div className="md:col-span-5">
                        <Input
                          placeholder="Title"
                          type="text"
                          {...register("title")}
                          className={`p-3 mb-1 ${
                            errors.title && "border border-red-500 outline-none"
                          } border mt-2 rounded px-6 w-full bg-gray-50`}
                        />
                        {errors.title && (
                          <p className="text-red-500 text-sm">
                            {errors.title?.message}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-5">
                        <Textarea
                          placeholder="Description"
                          rows={4}
                          {...register("description")}
                          className={`p-3 mb-1 ${
                            errors.description && "border border-red-500"
                          } border mt-2 rounded px-6 w-full bg-gray-50`}
                        />
                        {errors.description && (
                          <p className="text-red-500 text-sm">
                            {errors.description?.message}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-5">
                        <CategoryDropdown {...register("category")} />
                        {errors.category && (
                          <p className="text-red-500 text-sm">
                            {errors.category?.message}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-5">
                        <Input
                          placeholder="Price"
                          type="nulber"
                          {...register("price")}
                          className={`p-3 mb-1 ${
                            errors.price && "border border-red-500 outline-none"
                          } border mt-2 rounded px-6 w-full bg-gray-50`}
                        />
                        {errors.price && (
                          <p className="text-red-500 text-sm">
                            {errors.price?.message}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-3">
                        <Input
                          placeholder="Address"
                          type="text"
                          {...register("address")}
                          className={`p-3 mb-1 ${
                            errors.address &&
                            "border border-red-500 outline-none"
                          } border mt-2 rounded px-6 w-full bg-gray-50`}
                        />
                        {errors.address && (
                          <p className="text-red-500 text-sm">
                            {errors.address.message}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <Input
                          placeholder="City"
                          type="text"
                          {...register("city")}
                          className={`p-3 mb-1 ${
                            errors.title && "border border-red-500 outline-none"
                          } border mt-2 rounded px-6 w-full bg-gray-50`}
                        />
                        {errors.city && (
                          <p className="text-red-500 text-sm">
                            {errors.city.message}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <Input
                          placeholder="Size"
                          type="number"
                          {...register("size")}
                          className={`p-3 mb-1 ${
                            errors.size && "border border-red-500 outline-none"
                          } border mt-2 rounded px-6 w-full bg-gray-50`}
                        />
                        {errors.size && (
                          <p className="text-red-500 text-sm">
                            {errors.size?.message}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-1">
                        <Input
                          placeholder="Rooms"
                          type="number"
                          {...register("rooms")}
                          className={`p-3 mb-1 ${
                            errors.rooms && "border border-red-500 outline-none"
                          } border mt-2 rounded px-6 w-full bg-gray-50`}
                        />
                        {errors.rooms && (
                          <p className="text-red-500 text-sm">
                            {errors.rooms?.message}
                          </p>
                        )}
                      </div>

                      <div className="md:col-span-2">
                        <div className="md:col-span-2">
                          <Input
                            placeholder="Bathrooms"
                            type="number"
                            {...register("bathrooms")}
                            className={`p-3 mb-1 ${
                              errors.bathrooms &&
                              "border border-red-500 outline-none"
                            } border mt-2 rounded px-6 w-full bg-gray-50`}
                          />
                          {errors.bathrooms && (
                            <p className="text-red-500 text-sm">
                              {errors.bathrooms?.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="md:col-span-5 md:mt-2 md:mb-2">
                        <ImageUpload
                          files={files}
                          handleFiles={handleFile}
                          setFiles={setFiles}
                          message={message}
                        />
                      </div>

                      <div className="md:col-span-5 md:mt-2 md:mb-2 w-full">
                        <VideoUpload
                          files={files}
                          handleFiles={handleFile}
                          setFiles={setFiles}
                          message={message}
                        />
                      </div>
                      <div className="md:col-span-5 md:mt-2 md:mb-2 w-full">
                        <Image360Upload
                          images={images}
                          handleImages={handleImages}
                          setImages={setImages}
                        />
                      </div>
                      <div className="md:col-span-5 text-right">
                        <Button
                          name="Create Announcement"
                          className="bg-skyline-blue hover:bg-sky-blue text-white py-3 px-6 rounded-xl w-full"
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateAd;
