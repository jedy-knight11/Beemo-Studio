import { Hero } from '../components/Hero';
import { ClientTrust } from '../components/ClientTrust';
import { Portfolio } from '../components/Portfolio';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { Team } from '../components/Team';
import { FAQ } from '../components/FAQ';

export const Home = () => {
  return (
    <>
      <Hero />
      <ClientTrust />
      <Portfolio />
      <Services />
      <Process />
      <Team />
      <FAQ />
    </>
  );
};
