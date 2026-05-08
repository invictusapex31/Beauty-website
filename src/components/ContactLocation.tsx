import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactLocation() {
  return (
    <section id="contact" className="bg-matte-black py-32 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-20">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-12">
            <h2 className="text-4xl font-bold text-white">Find Us</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <MapPin className="text-gray-500 mt-1" size={20} />
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-widest text-gray-500">Address</p>
                  <p className="text-lg font-semibold text-white">123 Luxury Lane, Beverly Hills, CA 90210</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <Phone className="text-gray-500 mt-1" size={20} />
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-widest text-gray-500">Phone</p>
                  <p className="text-lg font-semibold text-white">+1 (555) 888-9999</p>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <Mail className="text-gray-500 mt-1" size={20} />
                <div className="space-y-1">
                  <p className="text-[11px] uppercase tracking-widest text-gray-500">Email</p>
                  <p className="text-lg font-semibold text-white">hello@beautyparlor.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full h-[450px] bg-neutral-900 rounded-[12px] overflow-hidden relative grayscale invert brightness-75 contrast-125">
             <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105759.575087858!2d-118.423986!3d34.103003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d147ab%3A0xd6c7c379fd9610e0!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
             ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
