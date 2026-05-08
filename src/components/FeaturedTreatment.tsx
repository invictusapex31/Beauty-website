import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { useRef } from 'react';

const treatments = [
  {
    name: "Permanent Lip Blush",
    price: "$235",
    features: ["Consultation", "Custom Tattoo App"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 10c2-2 4-3 8-3s6 1 8 3c-2 4-4 6-8 6s-6-2-8-6z" />
      </svg>
    )
  },
  {
    name: "Permanent Eyeliner",
    price: "$225",
    features: ["Consultation", "Custom Tattoo App"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M2.5 12c2-4.5 5.5-8 9.5-8s7.5 3.5 9.5 8c-2 4.5-5.5 8-9.5 8s-7.5-3.5-9.5-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    name: "Permanent Eyebrows",
    price: "$250",
    features: ["Consultation", "Custom Tattoo App"],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
        <path d="M4 16c2-4 6-6 8-6s6 2 8 6" strokeLinecap="round" />
      </svg>
    )
  }
];

export default function FeaturedTreatment() {
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

  const y = useTransform(smoothProgress, [0, 1], [0, -200]);
  const yFast = useTransform(smoothProgress, [0, 1], [0, -350]);
  const scale = useTransform(smoothProgress, [0, 0.5, 1], [1.1, 1, 1.1]);

  return (
    <section ref={containerRef} className="bg-off-white py-40 px-6 md:px-12 overflow-hidden border-y border-black/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-center">
        <div className="flex-1 space-y-16">
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-black/10"></span>
              <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase font-black">Collection 2026</span>
            </div>
            <h2 className="text-7xl md:text-8xl font-serif italic text-black leading-[0.85] tracking-tighter">
              Signature <br />
              <span className="font-serif not-italic text-black block mt-2 tracking-[-0.05em]">Artistry.</span>
            </h2>
          </div>

          <div className="space-y-4">
            {treatments.map((treatment, index) => (
              <motion.div
                key={treatment.name}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="bg-white p-10 rounded-3xl flex items-center justify-between group hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 cursor-pointer border border-black/[0.03]"
              >
                <div className="flex items-center gap-8">
                  <motion.div 
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 1.2, ease: "easeInOut" }}
                    className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center transition-transform group-hover:scale-110 shadow-[0_8px_20px_rgba(0,0,0,0.2)]"
                  >
                    {treatment.icon}
                  </motion.div>
                  <div>
                    <h3 className="text-2xl font-serif text-black mb-1 group-hover:italic transition-all duration-700">{treatment.name}</h3>
                    <ul className="flex gap-4 text-[10px] text-gray-400 font-medium uppercase tracking-[0.2em]">
                      {treatment.features.map(f => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-gray-200"></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-light text-black tracking-tighter">{treatment.price}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="pt-8">
            <button className="btn-dark-outline group flex items-center gap-6">
              Explore All Services
              <span className="text-xl group-hover:translate-x-2 transition-transform duration-500">→</span>
            </button>
          </div>
        </div>

        <div className="flex-1 relative flex items-center justify-center lg:mt-40">
          <motion.div 
            style={{ y, scale }}
            className="w-full max-w-md aspect-[3/4] bg-neutral-100 rounded-[40px] overflow-hidden grayscale-img shadow-[0_60px_100px_-20px_rgba(0,0,0,0.15)] relative z-10 border border-black/[0.05] will-change-transform"
          >
            <img 
              src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format,compress&q=80&w=1000" 
              alt="Artistic Treatment Model" 
              className="w-full h-full object-cover transition-transform duration-[4s] hover:scale-110"
            />
          </motion.div>

          <motion.div 
            style={{ y: yFast }}
            className="absolute -bottom-20 -left-12 w-56 h-72 bg-white p-4 rounded-[32px] shadow-2xl z-20 hidden xl:block border border-black/[0.03] will-change-transform"
          >
            <div className="w-full h-full bg-neutral-50 rounded-[20px] overflow-hidden grayscale-img">
              <img 
                src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format,compress&q=80&w=600" 
                alt="Detail Treatment" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-10 right-0 text-[10vw] font-serif italic text-black/[0.02] select-none -z-0">Artistry</div>
        </div>
      </div>
    </section>
  );
}
