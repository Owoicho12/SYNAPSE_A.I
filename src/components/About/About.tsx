import React from 'react';
import { motion } from 'framer-motion';

const aboutContent = {
  title: "About SYNAPSE A.I",
  paragraphs: [
    "SYNAPSE A.I represents a groundbreaking fusion of artificial intelligence and blockchain technology, creating a unique ecosystem where digital art meets machine learning. Our collection of 5,555 NFTs is not just a set of digital assets; it's a gateway to an AI-powered future where each piece is uniquely generated using advanced neural networks and deep learning algorithms.",
    "Each NFT in our collection serves as both a piece of digital art and a key to our expanding ecosystem. Holders gain exclusive access to our AI tools, participate in community governance, and receive priority access to future SYNAPSE A.I developments. Our mission is to democratize AI technology while creating a sustainable, community-driven platform that rewards innovation and creativity.",
    "The SYNAPSE A.I token powers our ecosystem, facilitating seamless transactions, staking rewards, and community governance. By combining cutting-edge AI technology with blockchain innovation, we're creating a new paradigm for digital asset ownership and utility."
  ]
};

export const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--neon-purple)_0%,_transparent_70%)] opacity-10" />
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-8 neon-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {aboutContent.title}
          </motion.h2>
          
          <div className="space-y-6 text-lg">
            {aboutContent.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="leading-relaxed"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};