import { useState, useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { FaTrash, FaCamera } from "react-icons/fa";
import img_profile from "../assets/images/d8a46679-6c1f-4a3e-afb3-d2e57e3d2784.png";

const UpdateProfile = () => {
  const [file, setFile] = useState<File & { preview?: string } | null>(null);
  const onDrop = useCallback((accepted: File[]) => {
    const selectedFile = accepted[0];
    if (selectedFile) {
      const img = Object.assign(selectedFile, {
        preview: URL.createObjectURL(selectedFile),
      });
      setFile(img);
    }
  }, []);

  const { getRootProps, getInputProps, open } = useDropzone({
    onDrop,
    noClick: true,
    noKeyboard: true,
    accept: { "image/*": [] },
  });

  const removeImage = () => setFile(null);

  return (
    <div className="min-h-screen bg-[#f7f9fc] flex justify-center p-4 sm:p-6 overflow-y-auto pb-24">
      <div className="bg-white shadow-2xl rounded-3xl w-full max-w-3xl p-6 sm:p-10">
        <h2 className="text-3xl font-bold text-[#1f2937] mb-8 text-center">
         
        </h2>

      {/* Profile Picture */}
        <div className="flex flex-col items-center mb-8 gap-4">
          <div
            className="relative w-40 h-40 rounded-full border-4 border-[#e5e7eb] flex items-center justify-center overflow-hidden bg-[#f9fafb] shadow-lg"
            style={{
              backgroundImage: file ? `url(${file.preview})` : "none",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!file && (
              <img
                src={img_profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            )}
          </div>

         {/*  Control Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={open}
              className="flex items-center gap-2 bg-[#3b82f6] hover:bg-[#2563eb] text-white px-6 py-1 rounded-full font-semibold shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
            >
              <FaCamera size={18} />
              <span>Change Photo</span>
            </button>
            <button
              type="button"
              onClick={removeImage}
              disabled={!file}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300 ${
                file
                  ? "bg-[#ef4444] hover:bg-[#dc2626] text-white hover:shadow-lg hover:scale-105 cursor-pointer"
                  : "bg-[#e5e7eb] text-[#9ca3af] cursor-not-allowed"
              }`}
            >
              <FaTrash size={16} />
              <span>Remove</span>
            </button>
          </div>
          <input {...getInputProps()} />
        </div>

        {/* The FOrm  */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* User Name */}
            <div>
              <label className="block text-sm font-semibold text-[#4b5563] mb-2 text-left">
                User Name
              </label>
              <input
                type="text"
                defaultValue="Ahmed Mohamed"
                className="w-full px-4 py-4 border-2 border-[#e5e7eb] rounded-2xl 
                focus:ring-4 focus:ring-[#93c5fd] focus:border-[#3b82f6] 
                focus:outline-none text-center text-[#1f2937] font-medium 
                transition-all duration-300"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-semibold text-[#4b5563] mb-2 text-left">
                Email
              </label>
              <input
                type="email"
                defaultValue="ahmed@example.com"
                className="w-full px-4 py-4 border-2 border-[#e5e7eb] rounded-2xl 
                focus:ring-4 focus:ring-[#93c5fd] focus:border-[#3b82f6] 
                focus:outline-none text-center text-[#1f2937] font-medium 
                transition-all duration-300"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Country */}
            <div>
              <label className="block text-sm font-semibold text-[#4b5563] mb-2 text-left">
                Country
              </label>
              <input
                type="text"
                defaultValue="Egypt"
                className="w-full px-4 py-4 border-2 border-[#e5e7eb] rounded-2xl 
                focus:ring-4 focus:ring-[#93c5fd] focus:border-[#3b82f6] 
                focus:outline-none text-center text-[#1f2937] font-medium 
                transition-all duration-300"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-semibold text-[#4b5563] mb-2 text-left">
                Phone Number
              </label>
              <input
                type="tel"
                defaultValue="+20123456789"
                className="w-full px-4 py-4 border-2 border-[#e5e7eb] rounded-2xl 
                focus:ring-4 focus:ring-[#93c5fd] focus:border-[#3b82f6] 
                focus:outline-none text-center text-[#1f2937] font-medium 
                transition-all duration-300"
              />
            </div>
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-semibold text-[#4b5563] mb-2 text-left">
              Confirm Password
            </label>
            <input
              type="password"
              defaultValue="********"
              className="w-full px-4 py-4 border-2 border-[#e5e7eb] rounded-2xl 
            focus:ring-4 focus:ring-[#93c5fd] focus:border-[#3b82f6] 
            focus:outline-none text-center text-[#1f2937] font-medium 
            transition-all duration-300"
            />
          </div>

         {/* Save Button */}
          <div className="text-center pt-4 pb-2">
            <button
              type="button"
              className="bg-[#3b82f6] hover:bg-[#2563eb] text-white px-12 py-4 
                         rounded-full font-bold uppercase shadow-lg 
                         hover:shadow-2xl hover:scale-105 active:scale-95 
                         transition-all duration-300 focus:outline-none 
                         focus:ring-4 focus:ring-[#93c5fd]"
            >
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
