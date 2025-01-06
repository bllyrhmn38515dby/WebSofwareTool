import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaDesktop, FaCloud, FaChartLine, FaHeadset } from 'react-icons/fa';

const ServicesPage = () => {
  const services = [
    {
      icon: <FaCode />,
      title: "Web Development",
      description: "Pembuatan website profesional dengan teknologi terkini seperti React, Vue.js, dan Node.js",
      features: [
        "Responsive Design",
        "SEO Friendly",
        "Custom CMS",
        "E-commerce Integration"
      ]
    },
    {
      icon: <FaMobile />,
      title: "Mobile Development",
      description: "Pengembangan aplikasi mobile untuk Android dan iOS dengan React Native dan Flutter",
      features: [
        "Cross-platform Development",
        "Native Performance",
        "Offline Capability",
        "Push Notifications"
      ]
    },
    {
      icon: <FaDesktop />,
      title: "UI/UX Design",
      description: "Desain antarmuka yang menarik dan pengalaman pengguna yang optimal",
      features: [
        "User Research",
        "Wireframing",
        "Prototyping",
        "Usability Testing"
      ]
    },
    {
      icon: <FaCloud />,
      title: "Cloud Solutions",
      description: "Layanan cloud computing dan infrastruktur teknologi",
      features: [
        "Cloud Migration",
        "Server Management",
        "Data Backup",
        "Security Solutions"
      ]
    },
    {
      icon: <FaChartLine />,
      title: "Digital Marketing",
      description: "Strategi pemasaran digital untuk meningkatkan presence online",
      features: [
        "SEO Optimization",
        "Social Media Marketing",
        "Content Strategy",
        "Analytics & Reporting"
      ]
    },
    {
      icon: <FaHeadset />,
      title: "IT Consulting",
      description: "Konsultasi teknologi untuk transformasi digital bisnis Anda",
      features: [
        "Technology Assessment",
        "Digital Strategy",
        "Process Optimization",
        "IT Training"
      ]
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-secondary text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Layanan Kami</h1>
            <p className="text-xl max-w-3xl mx-auto">
              Solusi teknologi komprehensif untuk membantu bisnis Anda berkembang di era digital
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="text-primary text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-2 h-2 bg-primary rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Siap Memulai Project?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Konsultasikan kebutuhan teknologi Anda dengan tim kami dan dapatkan solusi terbaik untuk bisnis Anda
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition-colors"
            >
              Hubungi Kami
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Proses Kerja Kami</h2>
            <p className="text-gray-600">Bagaimana kami mengerjakan setiap project</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "Memahami kebutuhan dan tujuan project" },
              { step: "02", title: "Planning", desc: "Menyusun strategi dan timeline" },
              { step: "03", title: "Development", desc: "Eksekusi dan pengembangan solusi" },
              { step: "04", title: "Delivery", desc: "Testing dan implementasi final" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-primary text-4xl font-bold mb-4">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;