
import { motion } from 'framer-motion';
import { FaTwitter, FaDiscord, FaMedium, FaTelegram } from 'react-icons/fa';

export const Footer = () => {
  const socialLinks = [
    { icon: FaTwitter, url: 'https://twitter.com/synapseai', label: 'Twitter' },
    { icon: FaDiscord, url: 'https://discord.gg/synapseai', label: 'Discord' },
    { icon: FaMedium, url: 'https://medium.com/synapseai', label: 'Medium' },
    { icon: FaTelegram, url: 'https://t.me/synapseai', label: 'Telegram' }
  ];

  return (
    <footer className="bg-black/90 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <h3 className="text-2xl font-bold neon-text mb-4">Join Our Community</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex space-x-6 mb-8"
          >
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-white hover:text-[var(--neon-blue)] transition-colors duration-300"
                >
                  <Icon size={24} />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              );
            })}
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-gray-400"
          >
            <p>&copy; {new Date().getFullYear()} SYNAPSE A.I. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};