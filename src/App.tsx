/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Loader } from './components/Loader';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientTrust } from './components/ClientTrust';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Team } from './components/Team';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <Loader key="loader" onLoadingComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-[#083eeb] selection:text-white">
        <Navbar />
        <Hero />
        <ClientTrust />
        <Portfolio />
        <Services />
        <Process />
        <Team />
        <FAQ />
        <Footer />
      </div>
    </>
  );
}
