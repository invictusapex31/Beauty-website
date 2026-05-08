import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ChevronDown, Star } from 'lucide-react';
import { useRef } from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98, filter: "blur(15px)" },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 1.8, 
      ease: [0.16, 1, 0.3, 1] 
    }
  },
};

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 1.5, 
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2
    }
  }
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const smoothScrollY = useSpring(scrollY, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothScrollY, [0, 500], [0, 200]);
  const y2 = useTransform(smoothScrollY, [0, 500], [0, -100]);
  const opacity = useTransform(smoothScrollY, [0, 300], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-screen bg-deep-black text-white px-6 md:px-12 pt-8 pb-32 overflow-hidden flex flex-col">
      {/* Navigation */}
      <motion.nav 
        variants={navVariants}
        initial="hidden"
        animate="visible"
        style={{ opacity }}
        className="flex justify-between items-center max-w-7xl mx-auto w-full mb-20 z-10"
      >
        <div className="text-3xl font-light tracking-[0.5em] uppercase text-white/90">beauty.</div>
        <div className="hidden md:flex gap-12">
          <a href="#services" className="nav-link">Services</a>
          <a href="#aftercare" className="nav-link">Aftercare</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#about" className="nav-link">About Us</a>
        </div>
        <button className="btn-outline">Book Appointment</button>
      </motion.nav>

      {/* Hero Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center flex-grow"
      >
        <motion.div style={{ y: y2 }} variants={itemVariants} className="space-y-12 will-change-transform">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-white/20"></span>
              <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase font-black">Boutique Narrative</span>
            </div>
            <h1 className="text-7xl md:text-[7vw] leading-[0.85] tracking-tighter">
              <span className="font-serif italic block mb-2 font-normal text-white/90">Curating your</span>
              <span className="font-sans font-black block uppercase tracking-[0.02em] bg-clip-text text-transparent bg-gradient-to-b from-white to-white/40">Elite Aura</span>
              <span className="font-serif italic block text-3xl md:text-[2vw] text-white/20 mt-4 tracking-wide">Signature Treatments / Artistic Precision</span>
            </h1>
          </div>
          
          <p className="text-gray-500 font-light text-lg max-w-md leading-relaxed border-l border-white/20 pl-8">
            The art of permanent aesthetics. We curate unique beauty narratives through precision craftsmanship.
          </p>
          
          <div className="flex flex-col gap-8">
            <a href="#services" className="group flex items-center gap-4 text-xs font-medium tracking-[0.2em] uppercase text-white/60 hover:text-white transition-all">
              <span className="animated-underline">Exploration / Treatments</span>
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-500"
              >
                <ChevronDown size={14} />
              </motion.div>
            </a>

            <div className="flex items-center gap-6 py-6 border-t border-white/5 max-w-sm">
              <span className="text-5xl font-light tracking-tighter">9.5</span>
              <div className="space-y-1">
                <div className="flex gap-0.5 text-white/40">
                  {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="currentColor" />)}
                </div>
                <span className="text-[9px] text-gray-500 tracking-[0.3em] uppercase block">Global Reviews (400+)</span>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          style={{ y: y1 }}
          variants={itemVariants} 
          className="relative group lg:mt-32 will-change-transform"
        >
          <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-[0_0_100px_rgba(255,255,255,0.05)] border border-white/5 z-0">
            <motion.img 
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format,compress&q=90&w=1400" 
              alt="Luxury Beauty Portrait"
              className="w-full h-full object-cover grayscale-img transition-transform duration-[4s] group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent opacity-80"></div>
          </div>

          {/* Overlapping Detail Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40, y: 40 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 1.2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-12 -left-12 w-48 h-64 bg-white p-3 rounded-2xl shadow-2xl z-10 hidden xl:block border border-white/10"
          >
            <div className="w-full h-full bg-neutral-900 rounded-xl overflow-hidden grayscale-img border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1552046122-03184de85e08?auto=format,compress&q=80&w=600" 
                alt="Detailed Essence" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Aesthetic Label */}
          <div className="absolute top-8 right-8 z-20">
            <span className="text-[9px] tracking-[0.5em] uppercase text-white/40 bg-black/40 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
              Elite Narrative / v.01
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
