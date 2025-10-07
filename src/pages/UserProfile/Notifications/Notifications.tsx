import { useState } from "react";
import { FaBell, FaTimes, FaHeart, FaUserPlus, FaComment } from "react-icons/fa";

// dummy notify
const dummyNotifications = [
  { id: 1, type: "like", user: "sarah_jones", message: "liked your post", time: "2m ago", avatar: "https://i.pravatar.cc/150?img=1" },
  { id: 2, type: "follow", user: "mike_wilson", message: "started following you", time: "5m ago", avatar: "https://i.pravatar.cc/150?img=2" },
  { id: 3, type: "comment", user: "emma_davis", message: "commented: Nice shot!", time: "10m ago", avatar: "https://i.pravatar.cc/150?img=3" },
  { id: 4, type: "like", user: "alex_brown", message: "liked your post", time: "15m ago", avatar: "https://i.pravatar.cc/150?img=4" },
  { id: 5, type: "follow", user: "lisa_anderson", message: "started following you", time: "1h ago", avatar: "https://i.pravatar.cc/150?img=6" },
  { id: 6, type: "comment", user: "david_lee", message: "commented: Amazing!", time: "2h ago", avatar: "https://i.pravatar.cc/150?img=7" },
];

const Notifications = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [notifications, setNotifications] = useState(dummyNotifications);

  const getIcon = (type: string) => {
    switch (type) {
      case "like":
        return <FaHeart className="text-[#ff3b30]" size={20} />;
      case "follow":
        return <FaUserPlus className="text-[#0095f6]" size={20} />;
      case "comment":
        return <FaComment className="text-[#34c759]" size={20} />;
      default:
        return <FaBell size={20} />;
    }
  };

  return (
    <div className="relative">
      {/* dummy notify */}
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className="relative p-2 hover:bg-[#f0f0f0] rounded-full transition-colors"
        aria-label="Notifications"
      >
        <FaBell size={24} className="text-black" />
        {notifications.length > 0 && (
          <span className="absolute top-1 right-1 bg-[#ff3b30] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
            {notifications.length > 9 ? "9+" : notifications.length}
          </span>
        )}
      </button>

      {showDropdown && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setShowDropdown(false)}
          />
          <div className="absolute right-0 top-12 bg-white rounded-2xl shadow-2xl md:w-[400px] w-[90vw] max-h-[500px] overflow-hidden z-50 border border-gray-200">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-black">Notifications</h2>
              <button onClick={() => setShowDropdown(false)}>
                <FaTimes size={20} className="text-black" />
              </button>
            </div>
            <div className="overflow-y-auto max-h-[440px]">
              {notifications.length > 0 ? (
                notifications.map((notif) => (
                  <div
                    key={notif.id}
                    className="flex items-center gap-3 p-4 hover:bg-[#f7f7f7] transition-colors border-b border-gray-100 last:border-0"
                  >
                    <img
                      src={notif.avatar}
                      alt={notif.user}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="text-black text-sm">
                        <span className="font-bold">{notif.user}</span>{" "}
                        {notif.message}
                      </p>
                      <p className="text-gray-500 text-xs mt-1">{notif.time}</p>
                    </div>
                    <div>{getIcon(notif.type)}</div>
                  </div>
                ))
              ) : (
                <div className="p-8 text-center text-gray-500">
                  No notifications yet
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Notifications;
