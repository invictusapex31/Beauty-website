import { motion } from 'motion/react';

const hours = [
  { day: "Monday", time: "Closed" },
  { day: "Tuesday & Wednesday", time: "09:00 - 18:00" },
  { day: "Thursday & Friday", time: "09:00 - 20:00" },
  { day: "Saturday", time: "10:00 - 18:00" },
  { day: "Sunday", time: "Closed" }
];

export default function AboutHours() {
  return (
    <section id="about" className="bg-matte-black py-32 px-6 md:px-12 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-[0.9fr_1.1fr] gap-24 items-center">
        {/* Left Side: Editorial Image Grid */}
        <motion.div 
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] bg-neutral-900 rounded-[8px] overflow-hidden grayscale-img">
                 <img 
                   src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format,compress&q=80&w=800" 
                   alt="Founder Portrait"
                   className="w-full h-full object-cover"
                 />
              </div>
              <div className="aspect-square bg-neutral-900 rounded-[8px] overflow-hidden grayscale-img hidden md:block">
                 <img 
                   src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format,compress&q=80&w=800" 
                   alt="Salon Detail"
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
              </div>
            </div>
            <div className="pt-12 space-y-4">
              <div className="aspect-[4/5] bg-neutral-900 rounded-[8px] overflow-hidden grayscale-img">
                 <img 
                   src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format,compress&q=80&w=800" 
                   alt="Treatment Detail"
                   className="w-full h-full object-cover"
                   referrerPolicy="no-referrer"
                 />
              </div>
            </div>
          </div>
          
          {/* Floating Aesthetic Element */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 border border-white/10 rounded-full flex items-center justify-center p-4 text-center hidden xl:flex">
             <span className="text-[8px] uppercase tracking-[0.4em] text-white/30 leading-loose">
               Precision / Artistry / Excellence
             </span>
          </div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div 
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-16"
        >
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <span className="h-[1px] w-12 bg-white/20"></span>
              <span className="text-[10px] tracking-[0.5em] text-gray-500 uppercase font-black">Boutique Narrative</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-serif italic text-white leading-[0.85] tracking-tighter">
              A Career in <br/>
              <span className="font-sans font-black not-italic text-white/10 uppercase tracking-tighter">Aesthetics.</span>
            </h2>
            <p className="text-gray-400 font-light leading-relaxed text-xl max-w-xl border-l-[0.5px] border-white/20 pl-10 italic">
              "We don't just perform treatments; we sculpt confidence. Our studio was founded on the belief that permanent makeup should be indistinguishable from nature's own hand."
            </p>
          </div>

          <div className="space-y-10">
            <div className="flex justify-between items-center pb-4 border-b border-white/10">
               <h3 className="text-xs uppercase tracking-[0.4em] text-white/60 font-medium">Availability</h3>
               <span className="text-[10px] text-gray-600 tracking-widest uppercase">GMT-7 / Los Angeles</span>
            </div>
            
            <div className="space-y-0 text-sm">
              {hours.map((item) => (
                <div key={item.day} className="group border-b border-white/5 last:border-0">
                  <div className="flex justify-between py-5 items-center transition-all group-hover:px-2">
                    <span className="text-gray-500 font-light group-hover:text-white transition-colors">{item.day}</span>
                    <span className={`font-medium tracking-tight ${item.time === 'Closed' ? 'text-gray-700' : 'text-white'}`}>
                      {item.time}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 flex items-center gap-12">
             <button className="btn-outline">Book Appointment</button>
             <div className="hidden sm:block">
                <p className="text-[10px] uppercase tracking-[0.3em] text-gray-600 block mb-1">Response Time</p>
                <p className="text-xs font-medium text-white/80">Within 24 Hours</p>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
