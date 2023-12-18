import Link from 'next/link';

import { TextBigPurple } from '@/components/TextBigPurple';
import { MelaniComponent } from '@/layout/MelaniComponent';
import { VerticalSpacerInPixel } from '@/layout/VerticalSpacer';

type TypeCoins = {
  srcPath: string;
  symbol: string;
  uri: string;
}[];

const Coins = (props: { coins: TypeCoins }) => {
  return (
    <div className="floating-row">
      {props.coins.map(({ srcPath, symbol, uri }) => {
        return (
          <div key={symbol} className="floating-element">
            <div className="flex">
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
      })}
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
      },
      {
        srcPath: 'sym-ada_colored',
        symbol: 'Cardano',
        uri: 'cardano',
      },
      {
        srcPath: 'sym-algo_colored',
        symbol: 'Algorand',
        uri: 'algorand',
      },
      {
        srcPath: 'sym-atom_colored',
        symbol: 'Cosmos',
        uri: 'cosmos',
      },
      {
        srcPath: 'sym-axs_colored',
        symbol: 'Axie Infinity Shards',
        uri: 'axie-infinity-shards',
      },
      {
        srcPath: 'sym-bch_colored',
        symbol: 'Bitcoin Cash',
        uri: 'bitcoin-cash',
      },
      {
        srcPath: 'sym-btc_colored',
        symbol: 'Bitcoin',
        uri: 'bitcoin',
      },
      {
        srcPath: 'sym-zec_colored',
        symbol: 'Zcash',
        uri: 'zcash',
      },
      {
        srcPath: 'sym-chz_colored',
        symbol: 'Chiliz',
        uri: 'chiliz',
      },
      {
        srcPath: 'sym-comp_colored',
        symbol: 'Compound',
        uri: 'compound',
      },
    ],
    [
      {
        srcPath: 'sym-dai_colored',
        symbol: 'Dai',
        uri: 'dai',
      },
      {
        srcPath: 'sym-dash_colored',
        symbol: 'Dash',
        uri: 'dash',
      },
      {
        srcPath: 'sym-doge_colored',
        symbol: 'Dogecoin',
        uri: 'dogecoin',
      },
      {
        srcPath: 'sym-dot_colored',
        symbol: 'Polkadot',
        uri: 'polkadot',
      },
      {
        srcPath: 'sym-enj_colored',
        symbol: 'Enjin',
        uri: 'enjin-coin',
      },
      {
        srcPath: 'sym-eos_colored',
        symbol: 'EOS',
        uri: 'eos',
      },
      {
        srcPath: 'sym-etc_colored',
        symbol: 'Ethereum Classic',
        uri: 'ethereum-classic',
      },
      {
        srcPath: 'sym-eth_colored',
        symbol: 'Ethereum',
        uri: 'ethereum',
      },
      {
        srcPath: 'sym-fil_colored',
        symbol: 'Filecoin',
        uri: 'filecoin',
      },
      {
        srcPath: 'sym-grt_colored',
        symbol: 'The Graph',
        uri: 'the-graph',
      },
    ],
    [
      {
        srcPath: 'sym-link_colored',
        symbol: 'Chainlink',
        uri: 'chainlink',
      },
      {
        srcPath: 'sym-ltc_colored',
        symbol: 'Litecoin',
        uri: 'litecoin',
      },
      {
        srcPath: 'sym-mana_colored',
        symbol: 'Decentraland',
        uri: 'decentraland',
      },
      {
        srcPath: 'sym-matic_colored',
        symbol: 'Polygon',
        uri: 'polygon',
      },
      {
        srcPath: 'sym-mkr_colored',
        symbol: 'MakerDAO',
        uri: 'maker',
      },
      {
        srcPath: 'sym-snx_colored',
        symbol: 'Synthetix',
        uri: 'synthetix-network-token',
      },
      {
        srcPath: 'sym-sol_colored',
        symbol: 'Solana',
        uri: 'solana',
      },
      {
        srcPath: 'sym-sushi_colored',
        symbol: 'Sushi',
        uri: 'sushi',
      },
      {
        srcPath: 'sym-trx_colored',
        symbol: 'TRON',
        uri: 'tron',
      },
      {
        srcPath: 'sym-uni_colored',
        symbol: 'Uniswap',
        uri: 'uniswap',
      },
    ],
    [
      {
        srcPath: 'sym-usdc_colored',
        symbol: 'USD Coin',
        uri: 'usd-coin',
      },
      {
        srcPath: 'sym-usdt_colored',
        symbol: 'Tether USD',
        uri: 'tether',
      },
      {
        srcPath: 'sym-waves_colored',
        symbol: 'Waves',
        uri: 'waves',
      },
      {
        srcPath: 'sym-icx_colored',
        symbol: 'ICON',
        uri: 'icon',
      },
      {
        srcPath: 'sym-ksm_colored',
        symbol: 'Kusama',
        uri: 'kusama',
      },
      {
        srcPath: 'sym-wbtc_colored',
        symbol: 'Wrapped Bitcoin',
        uri: 'wrapped-bitcoin',
      },
      {
        srcPath: 'sym-xlm_colored',
        symbol: 'Lumen',
        uri: 'stellar',
      },
      {
        srcPath: 'sym-xmr_colored',
        symbol: 'Monero',
        uri: 'monero',
      },
      {
        srcPath: 'sym-xrp_colored',
        symbol: 'Ripple',
        uri: 'xrp',
      },
      {
        srcPath: 'sym-xtz_colored',
        symbol: 'Tezos',
        uri: 'tezos',
      },
    ],
  ];

  return (
    <MelaniComponent>
      <div className=" bg-transparent">
        <div className="z-5 pointer-events-none h-full w-full overflow-hidden border-r-0">
          <VerticalSpacerInPixel pixel="h-[84px]" />
          <TextBigPurple text="Build your crypto portfolio" />
          <VerticalSpacerInPixel pixel="h-[40px]" />
          <div className="portfolio-div lg:portfolio-blur">
            {cryptoList.map((coins: TypeCoins) => (
              <Coins key={coins[0]?.symbol} coins={coins} />
            ))}
          </div>
        </div>
      </div>
      {/* <MelaniImage srcPath="/assets/images/portfolio_bg.webp" /> */}
    </MelaniComponent>
  );
};

export { CryptoPortfolio };
