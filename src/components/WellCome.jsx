import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { Link } from "react-router";

const WelcomeSection = () => {
  return (
    <section className="relative   px-6 md:px-16 overflow-hidden z-0">
      {/* Floating background circles */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"
        animate={{ y: [0, 20, 0], x: [0, 10, 0], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl"
        animate={{ y: [0, -30, 0], x: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Glowing rotating ring for visual depth */}
      <motion.div
        className="absolute top-1/2 left-1/2 w-96 h-96 border border-purple-400/20 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Main content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -40, rotate: -10 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center mb-6"
        >
          <motion.div
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <BookOpen size={70} className="text-purple-400 drop-shadow-lg" />
          </motion.div>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Welcome to{" "}
          <motion.span
            animate={{ color: ["#a855f7", "#c084fc", "#a855f7"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="text-purple-400"
          >
            The Book Haven
          </motion.span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-2xl mx-auto leading-relaxed"
        >
          Your ultimate destination for exploring, sharing, and managing your
          favorite books. Discover new stories, organize your personal library,
          and connect with a world of readers — all in one place.
        </motion.p>

        <Link to={'/all-books'}>
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 20px rgba(168,85,247,0.5)",
          }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
          className="mt-8 bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-2xl font-semibold shadow-lg"
        >
          Explore Library
        </motion.button>
        </Link>
      </div>
    </section>
  );
};

export default WelcomeSection;
