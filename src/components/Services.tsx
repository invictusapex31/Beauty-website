import { motion } from 'motion/react';

const services = [
  {
    name: "Permanent Eyebrows",
    description: "Expertly shaped and shaded brows that stay perfect all day, every day.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M4 16c2-4 6-6 8-6s6 2 8 6" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Permanent Eyeliner",
    description: "Define your eyes with precision that won't smudge or fade.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M2.5 12c2-4.5 5.5-8 9.5-8s7.5 3.5 9.5 8c-2 4.5-5.5 8-9.5 8s-7.5-3.5-9.5-8z" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    )
  },
  {
    name: "Permanent Lip Blush",
    description: "Enhance your natural lip color and shape for a full, vibrant look.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M4 10c2-2 4-3 8-3s6 1 8 3c-2 4-4 6-8 6s-6-2-8-6z" />
        <path d="M6 10h12" />
      </svg>
    )
  },
  {
    name: "Tattoo Removal",
    description: "Safe and effective laser technology to fade unwanted ink.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M13 3l-2 3M17 5l-2 2M21 9l-3 1" />
        <path d="M3 21l10-10l-4-4l-6 6z" />
      </svg>
    )
  },
  {
    name: "Nails",
    description: "Luxury manicure and pedicure services for perfectly polished hands and feet.",
    featured: true,
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M12 4v4M12 12v8M8 8h8M10 20h4" strokeLinecap="round" />
        <path d="M16 4l-1 4h2l-1-4z" fill="currentColor" />
      </svg>
    )
  },
  {
    name: "Waxing",
    description: "Smooth, long-lasting results with our gentle waxing techniques.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
        <path d="M19 4L5 18M7 4h10" strokeLinecap="round" />
        <rect x="7" y="18" width="10" height="2" />
      </svg>
    )
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-40 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 mb-32 items-end">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-black/10"></span>
              <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase font-black">Curated Services</span>
            </div>
            <h2 className="text-7xl md:text-9xl font-serif italic text-black tracking-tighter leading-[0.8]">
              Exceptional <br />
              <span className="font-sans font-black not-italic text-gray-100 uppercase">Precision.</span>
            </h2>
          </div>
          <div>
            <p className="text-gray-400 font-light text-2xl leading-relaxed max-w-sm italic border-l border-black/5 pl-8">
              "Beauty is the illumination of your soul."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {services.map((service, index) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 1, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ 
                y: -15,
                scale: 1.02,
                transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }
              }}
              className={`relative flex flex-col pt-12 border-t border-gray-100 group cursor-pointer transition-all duration-700 gpu will-change-transform ${
                service.featured 
                ? 'lg:px-10 bg-black text-white py-16 rounded-3xl border-none -mt-4 shadow-[0_40px_1000px_rgba(0,0,0,0.2)] scale-105 z-10' 
                : 'hover:border-black shadow-none hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)]'
              }`}
            >
              <div className={`mb-10 flex justify-between items-center ${service.featured ? 'text-white' : 'text-black'}`}>
                <div className={`p-5 rounded-3xl transition-all duration-700 ${
                  service.featured 
                  ? 'bg-white/10 backdrop-blur-xl border border-white/10 group-hover:bg-white group-hover:text-black' 
                  : 'bg-gray-50 group-hover:bg-black group-hover:text-white'
                }`}>
                  {service.icon}
                </div>
                <span className={`text-6xl font-black transition-all duration-700 pointer-events-none select-none ${
                   service.featured ? 'text-white/5' : 'text-black/[0.02] group-hover:text-black/[0.05]'
                }`}>
                  0{index + 1}
                </span>
              </div>
              <h3 className={`text-2xl font-bold mb-4 tracking-tight ${service.featured ? 'text-white' : 'text-black'}`}>
                {service.name}
              </h3>
              <p className={`text-sm tracking-wide leading-loose font-light mb-8 ${
                service.featured ? 'text-white/60' : 'text-gray-400'
              }`}>
                {service.description}
              </p>
              
              <div className="mt-auto">
                <span className={`text-[10px] font-bold tracking-[0.3em] uppercase flex items-center gap-2 group-hover:gap-4 transition-all duration-500 pb-2 border-b w-fit ${
                  service.featured ? 'text-white border-white/20' : 'text-black border-black/10'
                }`}>
                  Inquire Now <span className="text-xs">&rarr;</span>
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
