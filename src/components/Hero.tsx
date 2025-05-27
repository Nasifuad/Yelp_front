import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/solid";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-800 via-purple-800 to-blue-600 text-white py-24 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-blue-400 mix-blend-soft-light filter blur-3xl"></div>
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 rounded-full bg-indigo-400 mix-blend-soft-light filter blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Organize Your <span className="text-indigo-200">Thoughts</span> &
            <br />
            Master Your <span className="text-blue-200">Tasks</span>
          </h1>

          <motion.p
            className="text-lg sm:text-xl md:text-2xl mb-10 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Capture your daily experiences, track progress, and manage tasks
            effectively in one beautiful, distraction-free space designed for
            clarity.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <button className="group relative inline-flex items-center justify-center px-8 py-4 sm:px-10 sm:py-4 bg-white text-indigo-600 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              <span>Start Journaling</span>
              <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </motion.div>

        {/* Stats preview */}
        <motion.div
          className="mt-16 grid grid-cols-3 gap-4 max-w-xl mx-auto text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <div className="p-4 backdrop-blur-sm bg-white/10 rounded-lg">
            <div className="text-2xl font-bold">10K+</div>
            <div className="text-sm opacity-80">Daily Journals</div>
          </div>
          <div className="p-4 backdrop-blur-sm bg-white/10 rounded-lg">
            <div className="text-2xl font-bold">95%</div>
            <div className="text-sm opacity-80">Productivity Boost</div>
          </div>
          <div className="p-4 backdrop-blur-sm bg-white/10 rounded-lg">
            <div className="text-2xl font-bold">4.9★</div>
            <div className="text-sm opacity-80">User Rating</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
