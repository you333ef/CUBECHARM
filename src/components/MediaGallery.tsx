import Image from "./Image";
import { mediaItems } from "../utils/mediaItems";
import { ReactPhotoSphereViewer } from "react-photo-sphere-viewer";
import { useEffect, useState } from "react";

const MediaGallery = () => {
  const [viewerHeight, setViewerHeight] = useState("50vh");
  const [selectedMedia, setSelectedMedia] = useState(mediaItems[0]);

  const handleThumbnailClick = (media: any) => {
    setSelectedMedia(media);
  };

  // Function to handle screen size changes with 360° image
  const handleResize = () => {
    if (window.innerWidth < 640) {
      setViewerHeight("50vh"); // Mobile screens
    } else if (window.innerWidth >= 640 && window.innerWidth < 768) {
      setViewerHeight("60vh"); // Small screens
    } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
      setViewerHeight("80vh"); // Medium screens
    } else {
      setViewerHeight("calc(100vh - 100px)"); // Large screens
    }
  };

  // Attach resize event listener
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize(); // Call it once to set the initial height

    // Clean up event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      {selectedMedia.is360 && !selectedMedia.isVideo ? (
        <div style={{ width: "100%", height: viewerHeight }}>
          <ReactPhotoSphereViewer
            src={selectedMedia.src}
            width="100%"
            height="100%"
            defaultZoomLvl={0}
          />
        </div>
      ) : (
        <Image
          src={selectedMedia.src}
          alt=""
          className="w-full"
          loading="lazy"
        />
      )}
      {selectedMedia.isVideo && (
        <div className="mt-4 -mb-2 w-full">
          <iframe
            width="100%"
            height="480"
            src={selectedMedia.src}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
            loading="lazy"
          />
        </div>
      )}
  <div className="flex overflow-x-auto space-x-2 mt-2 p-2">
  {mediaItems.map((item: any, index: number) => (
    <div key={index}>
      {item.isVideo ? (
        <video
          width="100%"
          height="480"
          src={item.thumbnail}
          title="Embedded youtube"
          controls
          onClick={() => handleThumbnailClick(item)}
          className={`h-24 w-24 object-cover rounded-lg cursor-pointer border-2 border-transparent active:hover:border-blue-500 hover:border-blue-500 transition-transform duration-200 transform hover:scale-105 ${
            selectedMedia.src === item.src ? "border-blue-500" : ""
          }`}
        />
      ) : (
        <Image
          src={item.thumbnail}
          alt={`Thumbnail ${index + 1}`}
          onClick={() => handleThumbnailClick(item)}
          className={`h-24 w-24 object-cover rounded-lg cursor-pointer border-2 border-transparent active:hover:border-blue-500 hover:border-blue-500 transition-transform duration-200 transform hover:scale-105 ${
            selectedMedia === item.src ? "border-blue-500" : ""
          }`}
          loading="lazy"
        />
      )}
    </div>
  ))}
</div>

    </>
  );
};

export default MediaGallery;
