/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientTrust } from './components/ClientTrust';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-[#F5A623] selection:text-black">
      <Navbar />
      <Hero />
      <ClientTrust />
      <Portfolio />
      <Services />
      <Process />
      <Footer />
    </div>
  );
}

