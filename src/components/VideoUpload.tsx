import React from "react";
import Input from "./Input";
import { FaCloudUploadAlt } from "react-icons/fa";

interface VideoUploadProps {
  files: any[];
  setFiles: any;
  message: string;
  handleFiles: (e: any) => void;
}

interface VideoUploadProps {}

const VideoUpload: React.FC<VideoUploadProps> = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [sources, setSources] = React.useState<string[]>([]);

  // Handle file changes and create object URLs for each video
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);

    const videoURLs = selectedFiles.map((file) => URL.createObjectURL(file));

    // Store all videos including previously selected ones
    setSources((prevSources) => [...prevSources, ...videoURLs]);
  };

  const handleChoose = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-50 border border-gray-100 rounded-lg shadow-xs w-full mx-auto">
      {/* Upload Area */}
      <div
        className="flex flex-col items-center justify-center w-full p-6 border-2 border-dashed rounded-lg cursor-pointer transition hover:border-gray-300"
        onClick={handleChoose}
      >
        <FaCloudUploadAlt className="text-4xl text-gray-400 mb-4" />
        <p className="text-gray-600 text-center">Select videos (optional)</p>
        <p className="text-sm text-gray-500 mt-2">
          Supported formats: .mov, .mp4
        </p>
        <Input
          name="video"
          type="file"
          ref={inputRef}
          onChange={handleFileChange}
          className="hidden"
          accept=".mov, .mp4"
          multiple
        />
      </div>

      {/* Video Display */}
      {sources.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6 w-full">
          {sources.map((source, index) => (
            <div key={index} className="w-full">
              <video
                className="h-60 w-full rounded-lg"
                width="100%"
                controls
                src={source}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default VideoUpload;
