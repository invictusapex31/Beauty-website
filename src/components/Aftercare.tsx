import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';

const aftercareSections = [
  {
    title: "Lips",
    text: "Keep lips moisturized with the provided balm. Avoid spicy foods and extreme temperatures for 48 hours. Do not pick or scratch peeling skin."
  },
  {
    title: "Eyebrows",
    text: "Gently wipe with sterile water every 2 hours for the first day. Apply a thin layer of aftercare ointment. Avoid sweating and direct sun."
  },
  {
    title: "Eyeliner",
    text: "Do not touch or rub the eyes. If swelling occurs, apply a cold compress. Avoid eye makeup for at least 7 days until fully healed."
  },
  {
    title: "General",
    text: "Avoid swimming, saunas, and steam rooms for 2 weeks. Keep the area clean and follow the specific instructions provided at your appointment."
  }
];

export default function Aftercare() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, -250]);
  const bgSkew = useTransform(smoothProgress, [0, 1], [0, 10]);

  return (
    <section ref={containerRef} id="aftercare" className="bg-white py-48 px-6 md:px-12 relative overflow-hidden">
      {/* Aesthetic Background Detail */}
      <motion.div 
        style={{ skewY: bgSkew }}
        className="absolute top-0 right-0 w-[45%] h-full bg-[#fbfbfb] -z-0 hidden lg:block"
      ></motion.div>
      
      {/* Editorial Noise Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none -z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
      
      {/* Sophisticated Grid Lines */}
      <div className="absolute top-0 left-[10%] w-[1px] h-full bg-black/[0.03] -z-0"></div>
      <div className="absolute top-0 left-[90%] w-[1px] h-full bg-black/[0.03] -z-0"></div>
      
      {/* Floating Decorative Text */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-40 right-[12%] text-[9vw] font-serif italic text-black/[0.015] select-none -z-0 pointer-events-none"
      >
        Healing Ritual
      </motion.div>

      {/* Decorative Accents */}
      <div className="absolute top-20 left-[15%] flex flex-col gap-4 opacity-20 -z-0">
        <div className="w-[1px] h-20 bg-black"></div>
        <span className="text-[10px] tracking-[0.8em] uppercase vertical-text">Purity</span>
      </div>
      
      <div className="absolute bottom-20 right-[15%] flex flex-col gap-4 items-end opacity-20 -z-0">
        <span className="text-[10px] tracking-[0.8em] uppercase vertical-text">Essence</span>
        <div className="w-[1px] h-20 bg-black"></div>
      </div>

      {/* Vertical Lines - More subtle */}
      <div className="absolute left-[15%] top-0 w-[0.5px] h-full bg-black/[0.03] -z-0"></div>
      <div className="absolute left-[85%] top-0 w-[0.5px] h-full bg-black/[0.03] -z-0"></div>

      <div className="absolute top-1/2 left-0 w-full h-[0.5px] bg-black/[0.02] -z-0"></div>

      <div className="absolute -top-40 -left-40 w-[60vw] h-[60vw] border border-black/[0.015] rounded-full -z-0"></div>
      <div className="absolute top-[10%] left-[5%] text-[15vw] font-black text-black/[0.005] uppercase tracking-tighter select-none -z-0 pointer-events-none">Ritual</div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-32 relative z-10">
        <motion.div 
          style={{ y: y1 }}
          className="flex-1 relative will-change-transform"
        >
          <div className="aspect-[3/4] bg-[#f8f8f8] rounded-[60px] lg:rounded-[100px] overflow-hidden grayscale-img shadow-[0_80px_100px_-40px_rgba(0,0,0,0.12)] group relative z-10 border border-black/[0.05]">
            <img 
              src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format,compress&q=80&w=1200" 
              alt="Beauty Model Skincare" 
              className="w-full h-full object-cover transition-transform duration-[5s] group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
          </div>
          
          {/* Overlapping Detail Image - Refined Positioning */}
          <motion.div 
            style={{ y: y2 }}
            className="absolute -bottom-16 -right-16 w-72 h-80 bg-white p-5 rounded-[40px] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] z-20 hidden lg:block border border-black/[0.03] will-change-transform"
          >
            <div className="w-full h-full bg-neutral-50 rounded-[24px] overflow-hidden grayscale-img border border-gray-100">
              <img 
                src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format,compress&q=80&w=600" 
                alt="Product Detail" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </motion.div>

        <div className="flex-[1.2] space-y-24">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
               <span className="h-[1px] w-12 bg-black/20"></span>
               <span className="text-[10px] tracking-[0.6em] text-gray-400 uppercase font-black">Clinical Standard</span>
            </div>
            <motion.h2 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
              className="text-7xl md:text-9xl font-serif italic text-black leading-[0.8] tracking-tighter"
            >
              The Art of <br/>
              <span className="font-serif not-italic text-black block mt-2 tracking-[-0.08em]">Skin Mastery.</span>
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20">
            {aftercareSections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 1, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="space-y-6 group"
              >
                <div className="flex items-baseline gap-4 border-b border-black/[0.08] pb-6 transition-colors group-hover:border-black duration-700">
                  <span className="text-[10px] font-black text-gray-300">0{index + 1}</span>
                  <h3 className="text-4xl font-serif text-black group-hover:italic transition-all duration-700">{section.title}</h3>
                </div>
                <p className="text-gray-500 font-light text-[15px] leading-relaxed tracking-wide">
                  {section.text}
                </p>
                <a href="#" className="text-[10px] uppercase tracking-[0.6em] font-black text-black inline-flex items-center gap-6 group/link transition-all duration-500 hover:tracking-[0.8em]">
                  Comprehensive Guide <span className="text-2xl group-hover/link:translate-x-6 transition-transform duration-700 font-light">→</span>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
