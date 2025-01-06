import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import photo1 from '../assets/about1.jpg';
import photo2 from '../assets/about2.jpg';
import photo3 from '../assets/about3.jpg';
import photo4 from '../assets/about4.jpg';
import photo5 from '../assets/about5.jpg';
import photo6 from '../assets/about6.jpg';

const About = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [photo1, photo2, photo3, photo4, photo5, photo6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [photos.length]);
  const features = [
    "Pelatihan sepak bola tingkat dasar hingga lanjutan",
    "Fasilitas pelatihan yang lengkap dan modern",
    "Pelatih berlisensi dengan pengalaman lebih dari 10 tahun",
    "Pendekatan individual untuk setiap perkembangan peserta",
    "Pendidikan nilai sportivitas dan kerja sama tim",
    "Kesempatan mengikuti kompetisi dan turnamen lokal"
  ];

  return (
    <section className="py-20 bg-[#fff2e6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Slider Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="swiper-container">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <img src={photos[currentIndex]} alt="Foto Tentang YTSS" className="rounded-lg shadow-xl" />
                </div>
              </div>
              <div className="swiper-pagination"></div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold" style={{color:'#7a3f08'}} >Tentang Youth Tiger School Soccer</h2>
            <p style={{color: '#7a3f08'}}>
              Youth Tiger School Soccer (YTSS) adalah sekolah sepak bola yang didirikan pada 14 November 2022 dan berlokasi 
              di Stadion Elang Bondol, Lanud Atang Sendjaja, Bogor.
            </p>
            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 text-white">
                  <FaCheckCircle style={{color:'#77cc5f'}} />
                  <span style={{color:'#7a3f08'}}>{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
