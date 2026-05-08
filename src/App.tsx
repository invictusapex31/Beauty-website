/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useSpring } from 'motion/react';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutHours from './components/AboutHours';
import FeaturedTreatment from './components/FeaturedTreatment';
import Aftercare from './components/Aftercare';
import CustomerProcess from './components/CustomerProcess';
import ContactLocation from './components/ContactLocation';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="selection:bg-white selection:text-black">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-white origin-left z-[100] will-change-transform"
        style={{ scaleX }}
      />
      <Hero />
      <Services />
      <AboutHours />
      <FeaturedTreatment />
      <Aftercare />
      <CustomerProcess />
      <ContactLocation />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}

