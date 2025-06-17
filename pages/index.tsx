import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Profil Fotoğrafı */}
        <motion.img
          src="/profile.jpg"
          alt="Halitcan Emir"
          className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-white shadow-lg grayscale"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* İsim */}
        <motion.h1
          className="mt-6 text-3xl font-bold text-gray-800"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          Halitcan Emir
        </motion.h1>

        {/* Kısa Tanıtım */}
        <motion.p
          className="mt-2 text-gray-600 max-w-md mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
        >
          Merhaba! Ben Halitcan, modern yapay zeka teknolojileriyle çalışan bir yazılım geliştiricisiyim. Tutkulu bir şekilde öğrenmeye devam ediyorum. Benimle iletişime geçmek için;
        </motion.p>

        {/* Sosyal İkonlar */}
        <motion.div
          className="mt-6 flex justify-center gap-6 text-gray-600 text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <a
            href="https://github.com/kullaniciadiniz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/kullaniciadiniz"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
