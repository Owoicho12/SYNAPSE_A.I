import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';

// Button component for better code organization
import { ReactNode } from 'react';

interface CustomCSSProperties extends React.CSSProperties {
  '--neon-blue'?: string;
}

const NeonButton = ({ href, children, style = {} }: { href: string; children: ReactNode; style?: CustomCSSProperties }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="neon-button relative z-10" // Ensure the button is positioned correctly
    style={style}
  >
    {children}
  </a>
);

export const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.hero-title', {
        duration: 1.5,
        y: 100,
        opacity: 0,
        ease: 'power4.out',
      });
      gsap.from('.hero-description', {
        duration: 1.5,
        y: 50,
        opacity: 0,
        ease: 'power4.out',
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--neon-blue)_0%,_transparent_50%)] opacity-20" />
      
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          className="hero-title text-6xl md:text-8xl font-bold mb-8 neon-text"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          SYNAPSE A.I
        </motion.h1>
        
        <motion.p
          className="hero-description text-xl md:text-2xl mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Discover the future of AI-powered NFTs with our exclusive collection of 5,555 unique digital assets.
        </motion.p>

        <motion.div
          className="flex flex-col md:flex-row gap-6 justify-center relative" // Added 'relative'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <NeonButton href="https://presale.synapseai.com">
            Join Presale
          </NeonButton>
          <NeonButton 
            href="https://opensea.io/collection/synapseai" 
            style={{ '--neon-blue': 'var(--neon-purple)' }}
          >
            View Collection
          </NeonButton>
        </motion.div>
      </div>
    </div>
  );
};