import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-bold text-center mb-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent"
      >
        About The Book Haven
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-lg sm:text-xl text-gray-300 text-center max-w-3xl mx-auto leading-relaxed"
      >
        Welcome to <span className="font-semibold text-white">The Book Haven</span> — your
        digital escape into the world of stories, knowledge, and imagination.
        Here, readers can explore the latest releases, timeless classics, and
        handpicked recommendations, all designed to make reading more enjoyable
        and inspiring.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="mt-10 flex justify-center"
      >
        <button className="px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-indigo-500  to-purple-500 text-white py-2 rounded-xl font-medium hover:opacity-90 transition">
          Explore Our Collection
        </button>
      </motion.div>
    </section>
  );
};

export default AboutSection;
