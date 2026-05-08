import { Facebook, Instagram, Twitter, Compass } from 'lucide-react';
import { motion } from 'motion/react';

export default function Footer() {
  const socialIcons = [
    { Icon: Instagram, href: '#', label: 'Instagram' },
    { Icon: Facebook, href: '#', label: 'Facebook' },
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Compass, href: '#', label: 'Pinterest' }
  ];

  return (
    <footer className="bg-black py-32 px-6 md:px-12 relative overflow-hidden">
      {/* Decorative vertical line */}
      <div className="absolute top-0 left-1/2 w-[1px] h-full bg-white/[0.03] -z-0"></div>
      
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-20 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-light tracking-[0.5em] text-white/90 uppercase"
        >
          beauty.
        </motion.div>

        <motion.nav 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-x-16 gap-y-8"
        >
          {['Services', 'Aftercare', 'About Us', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '')}`} 
              className="nav-link !text-gray-500 hover:!text-white"
            >
              {item}
            </a>
          ))}
        </motion.nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex gap-8"
        >
          {socialIcons.map(({ Icon, href, label }) => (
            <motion.a 
              key={label}
              href={href} 
              whileHover={{ 
                scale: 1.1,
                rotate: label === 'Instagram' ? 5 : label === 'Facebook' ? -5 : 0,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }}
              whileTap={{ scale: 0.95 }}
              className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-black hover:bg-white transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.2)] group relative overflow-hidden"
            >
              <Icon size={20} className="relative z-10 transition-transform duration-500" />
            </motion.a>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto mt-32 pt-12 border-t border-white/5 text-center">
        <p className="text-[10px] text-gray-600 uppercase tracking-[0.4em] font-light">
          © 2026 beauty. luxury beauty parlor. all rights reserved.
        </p>
      </div>
    </footer>
  );
}
