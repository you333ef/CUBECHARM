import { FaBookOpen, FaCamera, FaUsers, FaShieldAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
const Help = () => {





const NAVI=useNavigate()

    const Contact_Support=():void=>{
        NAVI("/contact")
    }
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f9fc] to-[#e8f0fe] text-gray-900">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Need Help with CUBECHARM?
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Your guide to exploring, connecting, and sharing in the world of real estate.
          </p>

      <button className="px-8 py-3 text-lg rounded-2xl bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#2563eb] hover:to-[#3b82f6] text-white shadow-lg transition-all duration-300">
  Watch Tutorial Video
</button>

{/* YouTube Video Placeholder */}
<div className="mt-12 max-w-4xl mx-auto">
  <div className="relative aspect-video bg-white rounded-2xl shadow-2xl overflow-hidden">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube.com/embed/QEVTx1as1jo"
      title="CUBECHARM Tutorial Video"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  </div>
</div>


        </div>
      </section>

      {/* Quick Help Topics Section */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            Explore Common Help Topics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaBookOpen className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Getting Started with CUBECHARM
              </h3>
              <p className="text-gray-600">
                Learn the basics of navigating our platform and setting up your
                profile.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaCamera className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                How to Post Properties with 360° View
              </h3>
              <p className="text-gray-600">
                Create immersive property listings with our interactive 360°
                viewing feature.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaUsers className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Connecting with Other Members
              </h3>
              <p className="text-gray-600">
                Build your network and engage with the real estate community.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-all duration-300 group">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FaShieldAlt className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2">
                Managing Your Account & Privacy
              </h3>
              <p className="text-gray-600">
                Control your settings, security, and privacy preferences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About & Support Section */}
      <section className="py-20 px-4 bg-white/50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About CUBECHARM</h2>
          <p className="text-lg text-gray-700 mb-8 leading-relaxed">
            At CUBECHARM, we're redefining how real estate is shared and
            discovered. Our mission is to empower users to post, connect, and
            experience properties like never before  in an interactive and
            social way.
          </p>

          <button onClick={Contact_Support} className="px-8 py-3 text-lg rounded-2xl bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#2563eb] hover:to-[#3b82f6]  text-white shadow-lg transition-all duration-300">
            Contact Support
          </button>
        </div>
      </section>

      {/* Privacy & Security Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-12">
            <FaShieldAlt className="w-16 h-16 mx-auto mb-6 text-blue-500" />
            <h2 className="text-3xl font-bold mb-4">Privacy & Security</h2>
            <p className="text-lg text-gray-700 mb-8">
              Learn more about how we protect your data and ensure a safe
              experience.
            </p>

            <Link to="/privacy">
              <button className="px-8 py-3 text-lg rounded-2xl bg-gradient-to-r from-[#3b82f6] to-[#60a5fa] hover:from-[#2563eb] hover:to-[#3b82f6] text-white shadow-lg transition-all duration-300">
                View Privacy & Security Policy
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-white/30 border-t border-gray-200 text-center">
        <p className="text-gray-600 mb-4">
          © 2025 CUBECHARM — All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <Link
            to="/"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            About
          </Link>
          <Link
            to="/privacy"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Privacy
          </Link>
          <Link
            to="/contact"
            className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
          >
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Help;
