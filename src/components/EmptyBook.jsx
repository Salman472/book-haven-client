import { BookOpenCheck } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';
import { motion } from "framer-motion";

const EmptyBook = () => {
    return (
         <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center h-[50vh] bg-gradient-to-b from-slate-900 to-indigo-900 text-white text-center px-4"
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 120, delay: 0.3 }}
      >
        <BookOpenCheck size={70} className="text-purple-400 mb-4" />
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="text-3xl font-bold mb-2"
      >
        No Books Found
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="text-gray-300 mb-6"
      >
        Your collection is empty right now. Start adding some books!
      </motion.p>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.9 }}
      >
        <Link
          to={"/add-book"}
          className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-2 px-6 rounded-lg font-medium hover:opacity-90 transition"
        >
          Add Your First Book
        </Link>
      </motion.div>
    </motion.div>
    );
};

export default EmptyBook;