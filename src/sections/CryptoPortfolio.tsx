import Link from 'next/link';
import { useState } from 'react';
import Marquee from 'react-fast-marquee';

import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { TextBigPurple } from '@/components/TextBigPurple';
import { MelaniComponent } from '@/layout/MelaniComponent';
import { VerticalSpacerInPixel } from '@/layout/VerticalSpacer';

type TypeCoins = {
  srcPath: string;
  symbol: string;
  uri: string;
}[];

const FloatingElement = (props: {
  symbol: string;
  uri: string;
  srcPath: string;
}) => {
  const { symbol, uri, srcPath } = props;

  return (
    <div key={symbol} className="floating-element">
      <div className="">
        <Link className="melani-cta" href={`/asseing/${uri}`}>
          <img
            src={`/assets/marketing/${srcPath}.svg`}
            width="24px"
            height="24px"
            alt=""
            className="crypton"
          />
          {symbol}
        </Link>
      </div>
    </div>
  );
};

const Coins = (props: {
  coins: TypeCoins;
  isPlaying: boolean;
  speed: number;
}) => {
  return (
    <div className="floating-row">
      <Marquee
        direction="right"
        speed={props.speed}
        delay={1}
        play={props.isPlaying}
      >
        {props.coins.map(({ srcPath, symbol, uri }, index) => {
          return (
            <FloatingElement
              key={index}
              symbol={symbol}
              srcPath={srcPath}
              uri={uri}
            />
          );
        })}
      </Marquee>
    </div>
  );
};

const CryptoPortfolio = () => {
  const cryptoList = [
    [
      {
        srcPath: 'sym-aave_colored',
        symbol: 'Aave',
        uri: 'aave',
        width: 0,
      },
      {
        srcPath: 'sym-ada_colored',
        symbol: 'Cardano',
        uri: 'cardano',
        width: 0,
      },
      {
        srcPath: 'sym-algo_colored',
        symbol: 'Algorand',
        uri: 'algorand',
        width: 0,
      },
      {
        srcPath: 'sym-atom_colored',
        symbol: 'Cosmos',
        uri: 'cosmos',
        width: 0,
      },
      {
        srcPath: 'sym-axs_colored',
        symbol: 'Axie Infinity Shards',
        uri: 'axie-infinity-shards',
        width: 0,
      },
      {
        srcPath: 'sym-bch_colored',
        symbol: 'Bitcoin Cash',
        uri: 'bitcoin-cash',
        width: 0,
      },
      {
        srcPath: 'sym-btc_colored',
        symbol: 'Bitcoin',
        uri: 'bitcoin',
        width: 0,
      },
      {
        srcPath: 'sym-zec_colored',
        symbol: 'Zcash',
        uri: 'zcash',
        width: 0,
      },
      {
        srcPath: 'sym-chz_colored',
        symbol: 'Chiliz',
        uri: 'chiliz',
        width: 0,
      },
      {
        srcPath: 'sym-comp_colored',
        symbol: 'Compound',
        uri: 'compound',
        width: 0,
      },
    ],
    [
      {
        srcPath: 'sym-dai_colored',
        symbol: 'Dai',
        uri: 'dai',
        width: 0,
      },
      {
        srcPath: 'sym-dash_colored',
        symbol: 'Dash',
        uri: 'dash',
        width: 0,
      },
      {
        srcPath: 'sym-doge_colored',
        symbol: 'Dogecoin',
        uri: 'dogecoin',
        width: 0,
      },
      {
        srcPath: 'sym-dot_colored',
        symbol: 'Polkadot',
        uri: 'polkadot',
        width: 0,
      },
      {
        srcPath: 'sym-enj_colored',
        symbol: 'Enjin',
        uri: 'enjin-coin',
        width: 0,
      },
      {
        srcPath: 'sym-eos_colored',
        symbol: 'EOS',
        uri: 'eos',
        width: 0,
      },
      {
        srcPath: 'sym-etc_colored',
        symbol: 'Ethereum Classic',
        uri: 'ethereum-classic',
        width: 0,
      },
      {
        srcPath: 'sym-eth_colored',
        symbol: 'Ethereum',
        uri: 'ethereum',
        width: 0,
      },
      {
        srcPath: 'sym-fil_colored',
        symbol: 'Filecoin',
        uri: 'filecoin',
        width: 0,
      },
      {
        srcPath: 'sym-grt_colored',
        symbol: 'The Graph',
        uri: 'the-graph',
        width: 0,
      },
    ],
    [
      {
        srcPath: 'sym-link_colored',
        symbol: 'Chainlink',
        uri: 'chainlink',
        width: 0,
      },
      {
        srcPath: 'sym-ltc_colored',
        symbol: 'Litecoin',
        uri: 'litecoin',
        width: 0,
      },
      {
        srcPath: 'sym-mana_colored',
        symbol: 'Decentraland',
        uri: 'decentraland',
        width: 0,
      },
      {
        srcPath: 'sym-matic_colored',
        symbol: 'Polygon',
        uri: 'polygon',
        width: 0,
      },
      {
        srcPath: 'sym-mkr_colored',
        symbol: 'MakerDAO',
        uri: 'maker',
        width: 0,
      },
      {
        srcPath: 'sym-snx_colored',
        symbol: 'Synthetix',
        uri: 'synthetix-network-token',
        width: 0,
      },
      {
        srcPath: 'sym-sol_colored',
        symbol: 'Solana',
        uri: 'solana',
        width: 0,
      },
      {
        srcPath: 'sym-sushi_colored',
        symbol: 'Sushi',
        uri: 'sushi',
        width: 0,
      },
      {
        srcPath: 'sym-trx_colored',
        symbol: 'TRON',
        uri: 'tron',
        width: 0,
      },
      {
        srcPath: 'sym-uni_colored',
        symbol: 'Uniswap',
        uri: 'uniswap',
        width: 0,
      },
    ],
    [
      {
        srcPath: 'sym-usdc_colored',
        symbol: 'USD Coin',
        uri: 'usd-coin',
        width: 0,
      },
      {
        srcPath: 'sym-usdt_colored',
        symbol: 'Tether USD',
        uri: 'tether',
        width: 0,
      },
      {
        srcPath: 'sym-waves_colored',
        symbol: 'Waves',
        uri: 'waves',
        width: 0,
      },
      {
        srcPath: 'sym-icx_colored',
        symbol: 'ICON',
        uri: 'icon',
        width: 0,
      },
      {
        srcPath: 'sym-ksm_colored',
        symbol: 'Kusama',
        uri: 'kusama',
        width: 0,
      },
      {
        srcPath: 'sym-wbtc_colored',
        symbol: 'Wrapped Bitcoin',
        uri: 'wrapped-bitcoin',
        width: 0,
      },
      {
        srcPath: 'sym-xlm_colored',
        symbol: 'Lumen',
        uri: 'stellar',
        width: 0,
      },
      {
        srcPath: 'sym-xmr_colored',
        symbol: 'Monero',
        uri: 'monero',
        width: 0,
      },
      {
        srcPath: 'sym-xrp_colored',
        symbol: 'Ripple',
        uri: 'xrp',
        width: 0,
      },
      {
        srcPath: 'sym-xtz_colored',
        symbol: 'Tezos',
        uri: 'tezos',
        width: 0,
      },
    ],
  ];

  const [isPlaying, setPlaying] = useState(true);
  const speeds = [15, 13, 16, 14];

  return (
    <MelaniComponent>
      <div className=" h-full w-full overflow-hidden border-r-0 bg-[url(/assets/images/portfolio_bg.webp)] bg-cover bg-center">
        <VerticalSpacerInPixel pixel="h-[84px]" />
        <TextBigPurple text="Build your crypto portfolio" />
        <VerticalSpacerInPixel pixel="h-[40px]" />
        <div
          className="portfolio-div lg:portfolio-blur"
          onMouseOver={() => {
            setPlaying(false);
          }}
          onMouseLeave={() => {
            setPlaying(true);
          }}
        >
          {cryptoList.map((coins: TypeCoins, index: number) => (
            <Coins
              speed={speeds[index] || 10}
              key={coins[0]?.symbol}
              coins={coins}
              isPlaying={isPlaying}
            />
          ))}
        </div>
        <VerticalSpacerInPixel pixel="h-[40px]" />
        <div className=" flex flex-col content-center items-stretch lg:flex-row lg:content-start">
          <ARoundedPurple
            additionalClassName=" opl-hover m-auto  "
            text="Buy crypto"
          />
        </div>

        <VerticalSpacerInPixel pixel="h-[84px]" />
      </div>
    </MelaniComponent>
  );
};

export { CryptoPortfolio };
