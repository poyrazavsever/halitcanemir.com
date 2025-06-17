import { FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        {/* Profil Fotoğrafı */}
        <img
          src="/profile.jpg" // public klasörüne profile.jpg eklemeyi unutma
          alt="Halitcan Emir"
          className="w-40 h-40 mx-auto rounded-full object-cover border-4 border-white shadow-lg grayscale"
        />

        {/* İsim */}
        <h1 className="mt-6 text-3xl font-bold text-gray-800">Halitcan Emir</h1>

        {/* Kısa Tanıtım */}
        <p className="mt-2 text-gray-600 max-w-md mx-auto">
          Merhaba! Ben Halitcan, modern yapay zeka teknolojileriyle çalışan bir yazılım geliştiricisiyim. Tutkulu bir şekilde öğrenmeye devam ediyorum. Benimle iletişime geçmek için;
        </p>

        {/* Sosyal İkonlar */}
        <div className="mt-6 flex justify-center gap-6 text-gray-600 text-2xl">
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
        </div>
      </div>
    </div>
  );
}
