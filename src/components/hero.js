import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import photo1 from '../assets/ytss1.jpg';
import photo2 from '../assets/ytss2.jpg';
import photo3 from '../assets/ytss3.jpg';
import photo4 from '../assets/ytss4.jpg'; // Ganti dengan path foto Anda

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const photos = [photo1, photo2, photo3, photo4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, 5000); 
    return () => clearInterval(interval);
  }, [photos.length]);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url(${photos[currentIndex]})` }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col items-center justify-center text-center text-white">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
           YTSS <br/>
           (Youth Tiger Soccer School)
          </h1>
          <p className="text-xl md:text-2xl">
          Membentuk Bintang Sepak Bola Masa Depan <br/>Temukan bakatmu, kembangkan skill, dan raih impianmu bersama Youth Tiger Soccer School.
          </p>
          <meta name="description" content="Pelatihan sepak bola profesional untuk anak-anak dan remaja di Bogor." />

        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
