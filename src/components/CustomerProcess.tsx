import { motion } from 'motion/react';

export default function CustomerProcess() {
  return (
    <section className="bg-off-white py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-20 text-center">
        <div className="space-y-4">
          <span className="section-label !text-gray-400">OUR CUSTOMERS</span>
          <h2 className="text-4xl md:text-5xl font-bold text-black max-w-2xl mx-auto">
            Treatment Process From Our beauty.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 auto-rows-[300px]">
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-2 md:row-span-2 rounded-2xl overflow-hidden grayscale-img cursor-pointer shadow-lg will-change-transform"
          >
            <img 
              src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format,compress&q=80&w=1200" 
              alt="Gallery 1" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden grayscale-img cursor-pointer shadow-lg will-change-transform"
          >
            <img 
              src="https://images.unsplash.com/photo-1590439471364-192aa70c0b53?auto=format,compress&q=80&w=800" 
              alt="Gallery 2" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <motion.div 
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="rounded-2xl overflow-hidden grayscale-img cursor-pointer shadow-lg will-change-transform"
          >
           <img 
              src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format,compress&q=80&w=800" 
              alt="Gallery 3" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        <div className="space-y-8 max-w-xl mx-auto">
          <p className="text-gray-500 font-light text-sm leading-relaxed">
            Every step of our process is handled with the utmost care, from the initial consultation to the final reveal. We take pride in our precision and the satisfaction of our clients.
          </p>
          <button className="btn-dark-outline">See All Treatment</button>
        </div>
      </div>
    </section>
  );
}
