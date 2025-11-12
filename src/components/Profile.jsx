import { motion } from "framer-motion";
import { Edit3, Mail, MapPin } from "lucide-react";
import { use } from "react";
import { AuthContext } from "../constext/AuthContext";

const Profile = () => {
    const {user}=use(AuthContext)
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="max-w-sm mx-auto mt-20 bg-white/10 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 overflow-hidden p-6 text-center"
    >
      <motion.img
        src={user?.photoURL || "https://i.ibb.co/2FxYgcz/default-avatar.png"}
        alt={user?.name || "User"}
        className="w-24 h-24 mx-auto rounded-full border-4 border-indigo-400 object-cover shadow-md"
        whileHover={{ scale: 1.1, rotate: 2 }}
        transition={{ duration: 0.3 }}
      />

      <h2 className="mt-4 text-2xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
        {user?.displayName || "John Doe"}
      </h2>

      <p className="text-gray-300 text-sm mb-2">{user?.role || "Frontend Developer"}</p>

      <div className="flex justify-center items-center gap-2 text-gray-400 text-sm mb-4">
        <Mail size={16} className="text-indigo-400" />
        <span>{user?.email || "john@example.com"}</span>
      </div>

      <div className="flex justify-center items-center gap-2 text-gray-400 text-sm">
        <MapPin size={16} className="text-pink-400" />
        <span>{user?.location || "Dhaka, Bangladesh"}</span>
      </div>

      <p className="mt-4 text-gray-300 text-sm leading-relaxed px-4">
        {user?.bio ||
          "A passionate developer who loves building elegant web experiences and exploring new technologies."}
      </p>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-6 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-xl font-medium shadow hover:opacity-90 transition"
      >
        <Edit3 className="inline mr-2" size={16} />
        Edit Profile
      </motion.button>
    </motion.div>
  );
};

export default Profile;
