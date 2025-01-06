import { motion } from 'framer-motion';

const AboutPage = () => {

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#f88f4d] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Kami</h1>
            <p className="text-xl text-white max-w-3xl mx-auto">
            Membangun Talenta Sepak Bola Profesional untuk Generasi Mendatang.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-20 bg-[#fff2e6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#f88f4d]">Visi</h2>
              <p className="text-gray-700">
                Menjadikan Youth Tiger Soccer School sebagai pusat pembinaan bola usia dini yang terbaik di Indonesia, dengan program latihan profesional dari usia dini hingga remaja.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
            >
              <h2 className="text-2xl font-bold mb-4 text-[#f88f4d]">Misi</h2>
              <ul className="text-gray-700 space-y-3">
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                >
                  • Pembinaan usia dini untuk membentuk karakter, sikap yang baik, dan keterampilan / skill.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                >
                  • Memiliki program dan fasilitas latihan yang memadai (profesional).
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                >
                  • Menyiapkan mental pemain dalam bertanding di kompetisi level junior hingga remaja.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  • Menjadikan Youth Tiger Soccer School sebagai wadah pembinaan bakat bola usia dini hingga remaja terbaik di Indonesia.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  • Mengikuti kompetisi Nasional hingga Internasional.
                </motion.li>
                <motion.li
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7, duration: 0.6 }}
                >
                  • Membentuk fisik pemain dengan program latihan dan asupan gizi yang baik.
                </motion.li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
