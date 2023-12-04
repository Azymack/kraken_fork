import { Meta } from '@/layout/Meta';
import { BuildPortfolio } from '@/sections/BuildPortfolio';
import { ForEveryone } from '@/sections/ForEveryone';
import { KrakenPro } from '@/sections/KrakenPro';
import { StakingCrypto } from '@/sections/StakingCrypto';
import { StartJourney } from '@/sections/StartJourney';
import { WhyKraken } from '@/sections/WhyKraken';
import { AppConfig } from '@/utils/AppConfig';

import { InvestInFuture } from '../sections/InvestInFuture';
import { Footer } from './Footer';
import { Header } from './Header';

const Landing = () => (
  <div className="text-gray-600 antialiased">
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <Header />
    <InvestInFuture />
    <ForEveryone />
    <BuildPortfolio />
    <WhyKraken />
    <StakingCrypto />
    <KrakenPro />
    <StartJourney />
    <Footer />
  </div>
);

export { Landing };
