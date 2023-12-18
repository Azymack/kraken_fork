import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { TextBigPurple } from '@/components/TextBigPurple';
import { MelaniComponent } from '@/layout/MelaniComponent';
import { MelaniWrapper } from '@/layout/MelaniWrapper';
import { VerticalSpacerInPixel } from '@/layout/VerticalSpacer';

const StakingCrypto = () => {
  const infoList = [
    {
      srcPath: 'sym-ada_colored',
      mainName: 'Cardano',
      initial: 'ADA',
      flexible: '3-6% Flexible',
      bondible: '',
    },
    {
      srcPath: 'sym-atom_colored',
      mainName: 'Cosmos',
      initial: 'ATOM',
      flexible: '4-8% Flexible',
      bondible: '11-15% Bonded 21D',
    },
    {
      srcPath: 'sym-flow_colored',
      mainName: 'Flow',
      initial: 'FLOW',
      flexible: '1-4% Flexible',
      bondible: '6-10% Bonded 14D',
    },
    {
      srcPath: 'sym-kava_colored',
      mainName: 'Kava',
      initial: 'KAVA',
      flexible: '7-9% Flexible',
      bondible: '13-18% Bonded 21D',
    },
    {
      srcPath: 'sym-ksm_colored',
      mainName: 'Kusama',
      initial: 'KSM',
      flexible: '5-9% Flexible',
      bondible: '13-18% Bonded 7D',
    },
    {
      srcPath: 'sym-mina_colored',
      mainName: 'Mina',
      initial: 'MINA',
      flexible: '9-15% Flexible',
      bondible: '',
    },
    {
      srcPath: 'sym-dot_colored',
      mainName: 'Polkadot',
      initial: 'DOT',
      flexible: '7-11% Flexible',
      bondible: '15-21% Bonded 28D',
    },
    {
      srcPath: 'sym-sol_colored',
      mainName: 'Solana',
      initial: 'SOL',
      flexible: '2-4% Flexible',
      bondible: '5-7% Bonded 3D',
    },
    {
      srcPath: 'sym-xtz_colored',
      mainName: 'Tezos',
      initial: 'XTZ',
      flexible: '4-7% Flexible',
      bondible: '',
    },
    {
      srcPath: 'sym-trx_colored',
      mainName: 'Tron',
      initial: 'TRX',
      flexible: '1-4% Flexible',
      bondible: '',
    },
  ];

  return (
    <MelaniComponent>
      <MelaniWrapper>
        <VerticalSpacerInPixel pixel="h-[64px]" />
        <div className="text-center">
          <h2 className="text-center  text-[18px] font-medium leading-[25px] tracking-[2px] text-black">
            <span>STAKING CRYPTO</span>
          </h2>
        </div>
        <VerticalSpacerInPixel pixel="h-[16px]" />
        <TextBigPurple text="Earn crypto rewards" />
        <VerticalSpacerInPixel pixel="h-[16px]" />
        <div className="text-center">
          <h2 className="text-center  text-[16px] font-normal leading-[24px] text-black">
            <p>
              Earn up to 24% in rewards annually by staking your assets with
              Kraken. It only takes a few clicks to stake.*
            </p>
          </h2>
        </div>
        <VerticalSpacerInPixel pixel="h-[16px]" />
        <div className="text-center">
          <h2 className="text-center  text-[16px] font-normal leading-[28px] text-black">
            <p>
              <a
                className=" font-bold text-purple"
                href="https://support.kraken.com/hc/en-us/articles/360037682011-Overview-of-On-chain-staking-on-Kraken#bondedstakingoption"
              >
                What is flexible and bonded staking?
              </a>
              &nbsp;
            </p>
          </h2>
        </div>
        <VerticalSpacerInPixel pixel="h-[20px]" />
        <MelaniComponent>
          <div className="flex flex-row flex-wrap justify-center gap-x-[30px] gap-y-[70px]">
            {infoList.map((item) => (
              <div key={item.mainName} className="crypto-card">
                <div className="crypto-card-in">
                  <img
                    src={`/assets/marketing/${item.srcPath}.svg`}
                    alt="ada"
                    width="48px"
                    height="48px"
                    className="border-radius-[100%] mb-[5px] sm:mr-[5px]"
                  />
                  <div>
                    <p className="text-[21px] font-semibold leading-[22px] sm:mt-[6px]">
                      {item.mainName}
                      <span className="text-grey">({item.initial})</span>
                    </p>
                    <p className="text-[12px] font-semibold leading-[20px] sm:mt-[20px] sm:text-[16px]">
                      Yearly awards
                    </p>
                  </div>
                </div>
                <div className="crypto-card-description">
                  <div>{item.flexible}</div>
                  <div>{item.bondible}</div>
                </div>
              </div>
            ))}
          </div>
        </MelaniComponent>
        <MelaniComponent>
          <VerticalSpacerInPixel pixel="h-[40px]" />
        </MelaniComponent>
        <MelaniComponent>
          <div className="flex flex-wrap justify-center gap-[30px]">
            <div className="earning-card">
              <img
                src="/assets/images/icons/ninedots.webp"
                alt="aaa"
                className="m-auto block h-[58px] w-auto text-center"
              />
              <VerticalSpacerInPixel pixel="h-[10px]" />
              <div className="text-center text-[24px] font-medium leading-[32px] text-black">
                <p>
                  12+ assets
                  <br />
                  for staking
                </p>
              </div>
            </div>
            <div className="earning-card">
              <img
                src="/assets/images/icons/diamond.webp"
                alt="aaa"
                className="m-auto block h-[58px] w-auto text-center"
              />
              <VerticalSpacerInPixel pixel="h-[10px]" />
              <div className="text-center text-[24px] font-medium leading-[32px] text-black">
                <p>
                  Up to 24% in
                  <br />
                  yearly rewards
                </p>
              </div>
            </div>
            <div className="earning-card">
              <img
                src="/assets/images/icons/disks.webp"
                alt="aaa"
                className="m-auto block h-[58px] w-auto text-center"
              />
              <VerticalSpacerInPixel pixel="h-[10px]" />
              <div className="text-center text-[24px] font-medium leading-[32px] text-black">
                <p>
                  $100M+ in rewards
                  <br />
                  earned by clients
                </p>
              </div>
            </div>
          </div>
        </MelaniComponent>
        <MelaniComponent>
          <VerticalSpacerInPixel pixel="h-[40px]" />
        </MelaniComponent>
        <MelaniComponent>
          <div className="text-center">
            <ARoundedPurple
              href="/features/staking-coins"
              text="Start earning today"
              additionalClassName="flex flex-row items-start justify-center"
            />
          </div>
        </MelaniComponent>
        <VerticalSpacerInPixel pixel="h-[60px]" />
      </MelaniWrapper>
    </MelaniComponent>
  );
};

export { StakingCrypto };
