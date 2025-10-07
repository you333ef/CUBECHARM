import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { profileData } from "../../utils/stories";
import { AnimatePresence, motion } from "framer-motion";
import { FaAngleLeft, FaAngleRight, FaPause, FaPlay, FaTimes } from "react-icons/fa";
import { RxDotsHorizontal } from "react-icons/rx";
import { MoonLoader } from "react-spinners";

// Story image type
type StoryImage = {
  src: string;
  duration?: number;
};
// Story object type
type Story = {
  id: string | number;
  date: string;
  images: StoryImage[];
};

const StoriesAcc = () => {
  // Read seen stories from localStorage
  const readSeenFromStorage = (): (string | number)[] => {
    try {
      const raw = localStorage.getItem("seenStories");
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      return Array.isArray(parsed) ? parsed : [];
    } catch {
      return [];
    }
  };

  // States
  const [seenStoryIds, setSeenStoryIds] = useState<(string | number)[]>(() => readSeenFromStorage());
  const [loading, setLoading] = useState(true); // Story loading state
  const [isPaused, setIsPaused] = useState(false); // Story  state
  const [currentDay, setCurrentDay] = useState<number | null>(null); // Active story index
  const [progress, setProgress] = useState(0); // Progress bar value
  const [currentIndex, setCurrentIndex] = useState(0); // Current image index
  const [menuOpen, setMenuOpen] = useState(false); // Edit/Delete menu toggle
  // Refs
  const timeRef = useRef<number | null>(null); // Animation timer ref
  const startTimeRef = useRef<number | null>(null); // Start time ref
  const pauseTimeRef = useRef<number>(0); // Pause time ref
  const modalRef = useRef<HTMLDivElement>(null); // Modal focus ref

  // Sort stories by date
  const sortedStories = useMemo<Story[]>(
    () =>
      [...profileData.stories].sort(
        (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
      ),
    []
  );

  // Get current story object
  const currentStory = useMemo<Story | null>(() => {
    if (currentDay === null) return null;
    return sortedStories[currentDay] ?? null;
  }, [currentDay, sortedStories]);

  // Check if story seen
  const isStorySeen = (id: string | number) => seenStoryIds.includes(id);

  // Close modal and reset
  const closeModal = useCallback(() => {
    setCurrentDay(null);
    setCurrentIndex(0);
    setProgress(0);
    setIsPaused(false);
    setMenuOpen(false);
  }, []);

  // Go to next image
  const handleNextImage = useCallback(() => {
    cancelAnimationFrame(timeRef.current!);
    if (!currentStory) return;
    if (currentIndex < currentStory.images.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
      setLoading(true);
      pauseTimeRef.current = 0;
    } else {
      closeModal();
    }
  }, [currentStory, currentIndex, closeModal]);

  // Go to previous image
  const handlePrevImage = useCallback(() => {
    cancelAnimationFrame(timeRef.current!);
    if (!currentStory) return;
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
      setLoading(true);
      pauseTimeRef.current = 0;
    }
  }, [currentStory, currentIndex]);

  // Pause story playback
  const handlePause = useCallback(() => {
    if (!isPaused) {
      const elapsedSincePlay = Date.now() - (startTimeRef.current ?? 0);
      setIsPaused(true);
      pauseTimeRef.current += elapsedSincePlay;
      cancelAnimationFrame(timeRef.current!);
    }
  }, [isPaused]);

  // Resume story playback
  const handlePlay = useCallback(() => {
    if (isPaused) {
      setIsPaused(false);
      startTimeRef.current = Date.now();
      timeRef.current = requestAnimationFrame(animateProgress);
    }
  }, [isPaused]);

  // Animate progress bar
  const animateProgress = useCallback(() => {
    if (!currentStory) return;
    const img = currentStory.images[currentIndex];
    const duration = img?.duration && img.duration > 0 ? img.duration : 1000;
    const elapsed = Date.now() - (startTimeRef.current ?? 0);
    const totalElapsed = elapsed + pauseTimeRef.current;
    const percentage = Math.min((totalElapsed / duration) * 100, 100);
    setProgress(percentage);

    if (percentage < 100 && !isPaused) {
      timeRef.current = requestAnimationFrame(animateProgress);
    } else if (percentage >= 100) {
      pauseTimeRef.current = 0;
      handleNextImage();
    }
  }, [currentStory, currentIndex, handleNextImage, isPaused]);

  // Handle image load & animation start
  useEffect(() => {
    if (loading || !currentStory) return;
    if (!isPaused) {
      startTimeRef.current = Date.now();
      pauseTimeRef.current = 0;
      setProgress(0);
      timeRef.current = requestAnimationFrame(animateProgress);
    }
    return () => {
      if (timeRef.current) cancelAnimationFrame(timeRef.current);
    };
  }, [currentStory, currentIndex, loading, isPaused, animateProgress]);

  // Load seen stories from storage
  useEffect(() => {
    const saved = localStorage.getItem("seenStories");
    if (saved) {
      setSeenStoryIds(JSON.parse(saved));
    }
  }, []);

  // Save seen stories to storage
  useEffect(() => {
    localStorage.setItem("seenStories", JSON.stringify(seenStoryIds));
  }, [seenStoryIds]);

  // Keyboard navigation handler
  useEffect(() => {
    if (!currentStory) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") handlePrevImage();
      if (e.key === "ArrowRight") handleNextImage();
      if (e.key === " " || e.key === "Spacebar") isPaused ? handlePlay() : handlePause();
    };
    window.addEventListener("keydown", handleKeyDown);
    modalRef.current?.focus();
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStory, handlePrevImage, handleNextImage, closeModal, isPaused, handlePause, handlePlay]);

  return (
    // Main section container
    <section aria-label="user stories" className="mt-10">
      {/* Story thumbnails list */}
      <div className="flex justify-start max-w-3xl mx-auto gap-3 overflow-x-auto">
        {sortedStories.map((story, index) => (
          <div
            className="flex flex-col items-center cursor-pointer"
            key={story.id}
            tabIndex={0}
            onClick={() => {
              setCurrentDay(index);
              setCurrentIndex(0);
              setProgress(0);
              setLoading(true);
              setSeenStoryIds((prev) => (prev.includes(story.id) ? prev : [...prev, story.id]));
            }}
          >
            {/* Story image preview */}
            <motion.div
              transition={{ duration: 4, ease: "easeInOut" }}
              className={`border-4 rounded-3xl p-1 ${
                isStorySeen(story.id) ? "border-gray-300" : "border-skyline-blue"
              }`}
            >
              <img
                src={story.images[0]?.src}
                alt={`story-${story.id}`}
                className="md:h-20 md:w-20 h-16 w-16 rounded-2xl object-cover"
              />
            </motion.div>
            {/* Story date text */}
            <span className="text-xs text-gray-500 mt-1">
              {new Date(story.date).toLocaleDateString("en-US")}
            </span>
          </div>
        ))}
      </div>

      {/* Story modal view */}
      <AnimatePresence>
        {currentStory && currentStory.images.length > 0 && (
          <motion.div
            className="fixed inset-0 bg-black flex items-center justify-center z-[1000]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            ref={modalRef}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white p-1 rounded-full z-[1050]"
            >
              <FaTimes size={30} />
            </button>

            {/* Options menu button */}
            <div className="absolute top-2 right-12 z-[1050]">
              <button
                onClick={() => setMenuOpen((prev) => !prev)}
                className="text-white p-2 rounded-full hover:bg-black/30"
              >
                <RxDotsHorizontal size={28} />
              </button>

              {/* Dropdown menu */}
              {menuOpen && (
                <div className="absolute right-0 mt-2 bg-white text-black rounded-lg shadow-lg overflow-hidden w-28 z-[1100]">
                  <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      setMenuOpen(false);
                      alert("Edit clicked");
                    }}
                  >
                    Edit
                  </button>
                  <button
                    className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100"
                    onClick={() => {
                      setMenuOpen(false);
                      alert("Delete clicked");
                    }}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>

            {/* Story display area */}
            <div className="relative md:w-[500px] md:h-[520px] h-[80%] w-[90%]">
              {/* Loading spinner */}
              {loading && (
                <div className="absolute inset-0 flex items-center justify-center z-[1040]">
                  <MoonLoader color="#3498db" size={50} />
                </div>
              )}

              {/* Story image animation */}
              <AnimatePresence mode="wait">
                <motion.img
                  key={currentStory.images[currentIndex]?.src}
                  onLoad={() => setLoading(false)}
                  onError={() => setLoading(false)}
                  src={currentStory.images[currentIndex]?.src}
                  alt="story"
                  className={`w-full h-full object-contain rounded-2xl ${
                    loading ? "blur-sm" : "blur-0"
                  } transition-filter duration-300`}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.4 }}
                />
              </AnimatePresence>

              {/* Progress bars */}
              <div className="absolute top-2 left-2 right-2 flex gap-1 z-[1040]">
                {currentStory.images.map((img, i) => (
                  <div key={i} className="flex-1 h-1 bg-gray-300 rounded">
                    <motion.div
                      className="h-1 bg-skyline-blue rounded"
                      initial={{ width: i < currentIndex ? "100%" : 0 }}
                      animate={{
                        width:
                          i < currentIndex
                            ? "100%"
                            : i === currentIndex
                            ? `${progress}%`
                            : "0%",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* Navigation buttons */}
              <div className="block z-[1040]">
                {/* Previous image */}
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white h-7 w-7 flex items-center justify-center"
                >
                  <FaAngleLeft />
                </button>

                {/* Play / Pause */}
                <button
                  onClick={isPaused ? handlePlay : handlePause}
                  className="absolute top-4 right-10 text-white p-1 rounded-full"
                >
                  {isPaused ? <FaPlay size={15} /> : <FaPause size={15} />}
                </button>

                {/* Next image */}
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full text-white h-7 w-7 flex items-center justify-center"
                >
                  <FaAngleRight />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StoriesAcc;
