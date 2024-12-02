// Code for Roadmap section of the website
import { motion } from 'framer-motion';

const roadmapData = [
  {
    phase: 'Phase 1',
    title: 'Foundation',
    items: [
      'Community Building and Social Media Expansion',
      'Strategic Partnerships with AI Research Institutions',
      'Security Audit and Smart Contract Deployment',
      'Website Launch and Whitepaper Release'
    ]
  },
  {
    phase: 'Phase 2',
    title: 'Token Launch and NFTs',
    items: [
      'Token Launch and Initial DEX Offering (IDO)',
      'Launch of Genesis NFT Collection',
      'Community Airdrop Program',
      'Exchange Listings',
      'Implementation of Machine Learning Models'
    ]
  },
  {
    phase: 'Phase 3',
    title: 'Ecosystem Expansion',
    items: [
      'Cross-chain Integration and Bridges',
      'Launch of SYNAPSE Marketplace',
      'Mobile App Development',
      'Global Marketing Campaigns',
    ]
  },
  {
    phase: 'Phase 4',
    title: 'Governance & DAO',
    items: [
      'Implementation of DAO Governance',
      'Staking and Yield Farming Programs',
      'Community-Driven Development Fund',
      'Research Grants Program Launch'
    ]
  },
  {
    phase: 'Phase 5',
    title: 'Future Innovation',
    items: [
      'Advanced AI Features and Updates',
      'Metaverse Integration',
      'Enterprise Solutions Development',
      'Continuous Innovation and Expansion'
    ]
  }
];

export const Roadmap = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-20 relative">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 neon-text"
        >
          Roadmap
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {roadmapData.map((phase, index) => (
            <motion.div
              key={phase.phase}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: index * 0.2 }}
              className="bg-black/50 p-6 rounded-lg border border-[var(--neon-blue)] neon-border"
            >
              <h3 className="text-2xl font-bold mb-2 neon-text">{phase.phase}</h3>
              <h4 className="text-xl mb-4 text-[var(--neon-purple)]">{phase.title}</h4>
              <ul className="space-y-2">
                {phase.items.map((item, i) => (
                  <li key={i} className="flex items-center">
                    <span className="w-2 h-2 bg-[var(--neon-blue)] rounded-full mr-2"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};