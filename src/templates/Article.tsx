import { BlackCards } from '@/sections/BlackCards';
import { BuyCryptoInMinutes } from '@/sections/BuyCryptoInMinutes';
import { CryptoMakesGo } from '@/sections/CryptoMakesGo';
import { CryptoPortfolio } from '@/sections/CryptoPortfolio';
import { ForEveryone } from '@/sections/ForEveryone';
import { InvestInFuture } from '@/sections/InvestInFuture';
import { KrakenPro } from '@/sections/KrakenPro';
import { MobileFooterFixed } from '@/sections/MobileFooterFixed';
import { StakingCrypto } from '@/sections/StakingCrypto';
import { StartJourney } from '@/sections/StartJourney';
import { WhyKraken } from '@/sections/WhyKraken';

const Article = () => {
  return (
    <article>
      <div>
        <div className="mt-[-100px] h-[100px] bg-purple"></div>
        <InvestInFuture />
        <CryptoMakesGo />
        <ForEveryone />
        <BuyCryptoInMinutes />
        <CryptoPortfolio />
        <WhyKraken />
        <StakingCrypto />
        <KrakenPro />
        <BlackCards />
        <StartJourney />
        <MobileFooterFixed />
      </div>
    </article>
  );
};

export { Article };
