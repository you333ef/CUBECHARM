import {
  MdOutlineGridOn,
  MdOutlineOndemandVideo,
} from "react-icons/md";
import {
  FaAngleLeft,
  FaAngleRight,
  FaTimes,
  FaHeart,
  FaComment,
  FaEllipsisV,
} from "react-icons/fa";
import { useState, useMemo, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { mediaItems } from "../../utils/mediaItems";

const ADsAnd_Videos = () => {
  const [display, setDisplay] = useState("ads");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const ads = useMemo(() => mediaItems.filter((item) => !item.isVideo), []);
  const videos = useMemo(() => mediaItems.filter((item) => item.isVideo), []);
  const currentMedia = display === "ads" ? ads : videos;

  const openModal = (index: number) => {
    setSelectedItemIndex(index);
    setIsModalOpen(true);
    setDirection(0);
    setMenuOpen(false);
  };

  const handlePrev = () => {
    setDirection(-1);
    setSelectedItemIndex(
      (prevIndex) => (prevIndex - 1 + currentMedia.length) % currentMedia.length
    );
  };
  const handleNext = () => {
    setDirection(1);
    setSelectedItemIndex(
      (prevIndex) => (prevIndex + 1) % currentMedia.length
    );
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      transition: { duration: 0.3 },
    }),
  };

  return (
    <section aria-label="Ads and Videos" className="mt-10 mb-10 pb-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-center gap-20 mb-6">
          <button
            aria-label="Grid view"
            className={`cursor-pointer p-2 text-gray-500 ${
              display === "ads" ? "text-[#000] border-b-2 border-black" : ""
            }`}
            onClick={() => setDisplay("ads")}
          >
            <MdOutlineGridOn size={30} />
          </button>
          <button
            aria-label="Video view"
            className={`cursor-pointer p-2 text-gray-500 ${
              display === "videos" ? "text-[#000] border-b-2 border-black" : ""
            }`}
            onClick={() => setDisplay("videos")}
          >
            <MdOutlineOndemandVideo size={30} />
          </button>
        </div>

        <div className="grid grid-cols-3 gap-[1px] w-full">
          {currentMedia.length > 0 ? (
            currentMedia.map((item, idx) => (
              <div
                key={item.src + idx}
                className="relative group cursor-pointer"
                onClick={() => openModal(idx)}
              >
                {item.isVideo ? (
                  <video
                    src={item.src}
                    className="w-full h-[150px] md:h-[300px] lg:h-[500px] object-cover"
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={`Ad ${idx + 1}`}
                    className="w-full h-[150px] md:h-[300px] lg:h-[500px] object-cover"
                  />
                )}

                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="flex gap-5 text-white text-lg font-semibold">
                    <div className="flex items-center gap-2">
                      <FaHeart className="text-red-500" />
                      <span>5K</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaComment />
                      <span>4</span>
                    </div>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-3 text-center py-10 text-gray-500">
              No media available.
            </div>
          )}
        </div>
      </div>

      {/* Modal View */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-[9999]"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-white z-[70]"
            >
              <FaTimes size={30} />
            </button>

            <div className="absolute top-5 right-16 text-white z-[80]">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen((prev) => !prev);
                }}
                className="p-2 rounded-full hover:bg-white/10 pointer-events-auto"
              >
                <FaEllipsisV size={22} />
              </button>

              {menuOpen && (
                <div
                  className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg overflow-hidden w-28 z-[90]"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => alert('Update clicked')}
                  >
                    Update
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => alert('Delete clicked')}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>

            <div className="relative w-full max-w-4xl h-full flex items-center justify-center">
              <button
                onClick={handlePrev}
                className="absolute left-4 z-10 text-white bg-gray-800 p-2 rounded-full"
              >
                <FaAngleLeft size={20} />
              </button>

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
                    opacity: { duration: 0.2 },
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  {currentMedia[selectedItemIndex]?.isVideo ? (
                    <video
                      src={currentMedia[selectedItemIndex].src}
                      controls
                      className="md:max-w-[800px] w-[90%] md:max-h-[500px] h-[80%] object-contain"
                    />
                  ) : (
                    <img
                      src={currentMedia[selectedItemIndex].src}
                      alt={`Media ${selectedItemIndex + 1}`}
                      className="md:max-w-[800px] w-[90%] md:max-h-[500px] h-[80%] object-contain"
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              <button
                onClick={handleNext}
                className="absolute right-4 z-10 text-white bg-gray-800 p-2 rounded-full"
              >
                <FaAngleRight size={20} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ADsAnd_Videos;
