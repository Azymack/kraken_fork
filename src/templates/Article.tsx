import { BuyCryptoInMinutes } from '@/sections/BuyCryptoInMinutes';
import { CryptoPortfolio } from '@/sections/CryptoPortfolio';
import { ForEveryone } from '@/sections/ForEveryone';
import { InvestInFuture } from '@/sections/InvestInFuture';
import { KrakenPro } from '@/sections/KrakenPro';
import { StakingCrypto } from '@/sections/StakingCrypto';
import { StartJourney } from '@/sections/StartJourney';
import { WhyKraken } from '@/sections/WhyKraken';

const Article = () => {
  return (
    <article>
      <div className="kraken-component">
        <div className="mt-[-100px] h-[100px] bg-purple"></div>
        <InvestInFuture />
        <ForEveryone />
        <BuyCryptoInMinutes />
        <CryptoPortfolio />
        <WhyKraken />
        <StakingCrypto />
        <KrakenPro />
        <StartJourney />
      </div>
    </article>
  );
};

export { Article };
