import { motion } from 'framer-motion';
import { FaDumbbell, FaTrophy, FaHandsHelping, FaChartLine, FaChild, FaFutbol } from 'react-icons/fa';

const services = [
  {
    icon: <FaFutbol size={40} />, // Ikon untuk latihan fisik
    title: "Pengembangan Keterampilan Dasar Sepak Bola",
    description: "Program ini memberikan pengajaran keterampilan dasar sepak bola secara menyeluruh. Anak-anak akan belajar menggiring bola (dribbling), menendang bola (shooting), passing, dan bertahan (defending) melalui latihan yang terstruktur dan menyenankan. Setiap keterampilan akan diajarkan melalui teknik yang benar agar dapat diterapkan dalam situasi pertandingan yang nyata."
  },
  {
    icon: <FaDumbbell size={40} />, // Ikon untuk kerja sama atau sparring
    title: "Pelatihan Fisik dan Mental",
    description: "Pelatihan fisik mencakup latihan untuk meningkatkan kebugaran, kecepatan, kelincahan, daya tahan, serta koordinasi tubuh secara keseluruhan. Selain aspek fisik, program ini juga fokus pada penguatan mental pemain dengan mengedepankan kerja sama tim, membangun kepercayaan diri, serta mengajarkan nilai-nilai sportivitas seperti disiplin, rasa hormat, dan etika dalam bertanding. Program ini dirancang untuk mempersiapkan pemain menghadapi tantangan dalam pertandingan dan kehidupan."
  },
  {
    icon: <FaChild size={40} />, // Ikon untuk turnamen
    title: "Pendekatan Usia dan Tingkat Kemampuan",
    description: "Program pelatihan dibagi berdasarkan kelompok usia dan tingkat kemampuan individu, memastikan setiap anak mendapatkan materi dan tantangan yang sesuai dengan kapasitas mereka. Anak-anak yang lebih muda atau dengan kemampuan yang lebih dasar akan diberikan latihan yang lebih fokus pada pengembangan teknik dasar, sementara anak yang lebih tua atau dengan kemampuan lebih tinggi akan lebih difokuskan pada penerapan teknik dalam situasi yang lebih kompleks dan pertandingan."
  },
  {
    icon: <FaTrophy size={40} />, // Ikon untuk kesehatan dan gizi
    title: "Kompetisi dan Turnamen",
    description: "Pemain akan diberi kesempatan untuk mengasah keterampilan mereka dengan mengikuti pertandingan atau turnamen, baik yang bersifat internal (diadakan oleh sekolah atau klub sendiri) maupun eksternal (kompetisi dengan tim lain atau event resmi). Keikutsertaan dalam turnamen bertujuan untuk memberikan pengalaman pertandingan nyata, meningkatkan keberanian pemain, dan memperkuat semangat kompetitif dalam diri mereka. Setiap pertandingan menjadi pelajaran berharga untuk bertumbuh, baik dari segi teknik maupun mental."
  },
  {
    icon: <FaHandsHelping size={40} />, // Ikon untuk fisioterapi
    title: "Pendidikan Nilai Positif",
    description: "Selain penguasaan keterampilan teknis, program ini mengintegrasikan pendidikan karakter yang sangat penting dalam perkembangan seorang atlet. Anak-anak dilatih untuk memiliki sikap disiplin, bekerja keras untuk mencapai tujuan, menjunjung tinggi fair play, menghargai lawan, serta mengembangkan rasa persaudaraan dan kebersamaan dalam tim. Nilai-nilai ini diajarkan melalui contoh dan penerapan langsung dalam setiap sesi latihan dan pertandingan."
  },
  {
    icon: <FaChartLine size={40} />, // Ikon untuk fisioterapi
    title: "Pemantauan Perkembangan Individu",
    description: "Pemantauan terus-menerus terhadap perkembangan keterampilan, fisik, dan mental setiap peserta. Pelatih memberikan evaluasi berkala untuk melihat sejauh mana anak-anak telah berkembang, serta memberikan saran yang konstruktif agar setiap individu dapat terus meningkatkan diri dan mengatasi tantangan baru dalam perjalanan mereka di dunia sepak bola."
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-[#f88f4d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-white">Program Kami</h2>
          <p className="mt-4 text-xl text-white">Mendukung Setiap Langkah Menuju Impianmu di Dunia Sepak Bola!</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-[#f88f4d] mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
