import { MdOutlineGridOn, MdOutlineOndemandVideo } from "react-icons/md";
import { useState, useMemo, useEffect } from "react";
import { mediaItems } from "../../../utils/mediaItems";
import { FaAngleLeft, FaAngleRight, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion"; 

const ADsAndVideos = () => {
  const [display, setDisplay] = useState("ads");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for prev, 1 for next

  const ads = useMemo(() => mediaItems.filter(item => !item.isVideo), []);
  const videos = useMemo(() => mediaItems.filter(item => item.isVideo), []);
  const currentMedia = display === "ads" ? ads : videos;
  
  const openModal = (index:number) => {
    setSelectedItemIndex(index);
    setIsModalOpen(true);
    setDirection(0); 
  }; 
   const handlePrev = () => {
    setDirection(-1); // Set direction for previous animation
    setSelectedItemIndex((prevIndex) => (prevIndex - 1 + currentMedia.length) % currentMedia.length);
  };
 const handleNext = () => {
    setDirection(1); // Set direction for next animation
    setSelectedItemIndex((prevIndex) => (prevIndex + 1) % currentMedia.length);
  };
  useEffect(() => {
    if (!currentMedia) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsModalOpen(false);
      }
      if (e.key === "ArrowLeft") {
        handlePrev();
      }
      if (e.key === "ArrowRight") {
        handleNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [ handlePrev, handleNext]);
 
  


  // Variants for the slide animation
  const slideVariants = {
    enter: (direction:number) => ({
      x: direction > 0 ? 1000 : -1000, // Starts off-screen to the right or left
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1, // On-screen
    },
    exit: (direction:number) => ({
      x: direction < 0 ? 1000 : -1000, // Exits off-screen to the right or left
      opacity: 0,
      transition: { duration: 0.3 } // Quicker exit transition
    }),
  };

  return (
    <section aria-label="Ads and Videos" className="my-10">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center gap-20 mb-6">
          <button
            aria-label="Grid view"
            className={`cursor-pointer p-2 text-gray-500 ${display === "ads" ? "text-[#000] border-b-2 border-black" : ""}`}
            onClick={() => setDisplay("ads")}
          >
            <MdOutlineGridOn size={30} />
          </button>
          <button
            aria-label="Video view"
            className={`cursor-pointer p-2 text-gray-500 ${display === "videos" ? "text-[#000] border-b-2 border-black" : ""}`}
            onClick={() => setDisplay("videos")}
          >
            <MdOutlineOndemandVideo size={30} />
          </button>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-3 gap-[1px] w-full">
            {currentMedia.length > 0 ? (
              currentMedia.map((item, idx) => {
                if (display === "ads") {
                  return (
                    <img
                      key={item.src + idx}
                      src={item.src}
                      alt={`Ad ${idx + 1}`}
                      className="w-full h-[150px] md:h-[300px] lg:h-[500px] object-cover cursor-pointer"
                      onClick={() => openModal(idx)}
                    />
                  );
                } else {
                  return (
                    <video
                      key={item.src + idx}
                      src={item.src}
                      className="w-full h-[150px] md:h-[300px] lg:h-[550px] object-cover cursor-pointer"
                      aria-label={`Video ${idx + 1}`}
                      onClick={() => openModal(idx)}
                    />
                  );
                }
              })
            ) : (
              <div className="col-span-3 text-center py-10 text-gray-500">No media available.</div>
            )}
          </div>
        </div>
      </div>
      
      {/* The Modal */}
      <AnimatePresence> 
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
          >
            <button onClick={()=> setIsModalOpen(false)} className="absolute top-5 right-5 text-white">
              <FaTimes size={30} />
            </button>
            
            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
              {/* Previous Button */}
              <button onClick={handlePrev} className="absolute left-4 z-10 text-white bg-gray-800 p-2 rounded-full">
                <FaAngleLeft size={20} />
              </button>
              
              {/* The Media Item with slide animation */}
              <AnimatePresence initial={false} custom={direction} mode="wait"> 
                <motion.div
                  key={currentMedia[selectedItemIndex]?.src} 
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="w-full h-full flex items-center justify-center" 
                >
                  {currentMedia[selectedItemIndex]?.isVideo ? (
                    <video 
                      src={currentMedia[selectedItemIndex].src} 
                      controls
                      className="md:max-w-[800px] w-[90%] md:max-h-[500px] h-[80%]  object-cover"
                    />
                  ) : (
                    <img 
                      src={currentMedia[selectedItemIndex].src} 
                      alt={`Media ${selectedItemIndex + 1}`}
                      className="md:max-w-[800px] w-[90%] md:max-h-[500px] h-[80%] object-cover"
                    />
                  )}
                </motion.div>
              </AnimatePresence>
              
              {/* Next Button */}
              <button onClick={handleNext} className="absolute right-4 z-10 text-white bg-gray-800 p-2 rounded-full">
                <FaAngleRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ADsAndVideos;