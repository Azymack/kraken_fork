import { ARoundedWhite } from '@/components/Buttons/ARoundedWhite';
import { MelaniComponent } from '@/layout/MelaniComponent';
import { MelaniImage } from '@/layout/MelaniImage';
import { MelaniWrapper } from '@/layout/MelaniWrapper';
import { VerticalSpacerInPixel } from '@/layout/VerticalSpacer';

const KrakenPro = () => {
  return (
    <MelaniComponent>
      <div className="pro-gradient">
        <MelaniWrapper>
          <VerticalSpacerInPixel pixel="h-[76px]" />
          <MelaniComponent>
            <h2 className="text-center text-[14px] font-medium leading-[20px] tracking-[2px] text-white lg:text-[18px] lg:leading-[25px]">
              KRAKEN PRO
            </h2>
          </MelaniComponent>
          <VerticalSpacerInPixel pixel="h-[24px]" />
          <MelaniComponent>
            <h2 className="text-center text-[32px] font-medium leading-[42px] text-white lg:text-[40px] lg:leading-[54px]">
              Trade spot and margin. <br />
              All in one powerful interface.
            </h2>
          </MelaniComponent>
          <VerticalSpacerInPixel pixel="h-[48px]" />
          <MelaniImage
            srcPath="/assets/images/statistics-2512x1608.png"
            additionalClassName=" lg:block hidden w-full h-auto"
          />
          <MelaniComponent>
            <div className=" mt-0 w-full lg:mt-[-80px]"></div>
          </MelaniComponent>
          <MelaniComponent>
            <div className="stat-div">
              <div className="mx-0 box-border w-full max-w-[360px] ">
                <img
                  src="/assets/images/icons/diarrow.webp"
                  alt=""
                  className="m-auto block h-[58px] w-auto text-center"
                />
                <VerticalSpacerInPixel pixel="h-[10px]" />
                <h3 className="text-center text-[24px] font-medium leading-[32px] text-white">
                  <span>Low&nbsp;spreads</span>
                </h3>
                <VerticalSpacerInPixel pixel="h-[8px]" />
                <div className="text-center text-[16px] font-normal leading-[26px] text-white">
                  <p>
                    Lower your average
                    <br />
                    cost per trade.
                  </p>
                </div>
              </div>
              <div className="mx-0 box-border w-full max-w-[360px] ">
                <img
                  src="/assets/images/icons/whitedisks.webp"
                  alt=""
                  className="m-auto block h-[58px] w-auto text-center"
                />
                <VerticalSpacerInPixel pixel="h-[10px]" />
                <h3 className="text-center text-[24px] font-medium leading-[32px] text-white">
                  <span>Deep liquidity across markets</span>
                </h3>
                <VerticalSpacerInPixel pixel="h-[8px]" />
                <div className="text-center text-[16px] font-normal leading-[26px] text-white">
                  <p>
                    Easily trade large volumes
                    <br />
                    at stable prices.
                  </p>
                </div>
              </div>
              <div className="mx-0 box-border w-full max-w-[360px] ">
                <img
                  src="/assets/images/icons/statistics.webp"
                  alt=""
                  className="m-auto block h-[58px] w-auto text-center"
                />
                <VerticalSpacerInPixel pixel="h-[10px]" />
                <h3 className="text-center text-[24px] font-medium leading-[32px] text-white">
                  <span>High&nbsp;rate&nbsp;limits</span>
                </h3>
                <VerticalSpacerInPixel pixel="h-[8px]" />
                <div className="text-center text-[16px] font-normal leading-[26px] text-white">
                  <p>
                    Trade crypto fast with our robust,
                    <br />
                    low latency API.
                  </p>
                </div>
              </div>
            </div>
          </MelaniComponent>
          <MelaniComponent>
            <VerticalSpacerInPixel pixel="h-[54px]" />
          </MelaniComponent>
          <MelaniComponent>
            <div className="flex flex-row items-start justify-center">
              <ARoundedWhite
                additionalClassName="m-auto"
                href="https://pro.kraken.com"
                text="Trade crypto"
              />
            </div>
          </MelaniComponent>
          <MelaniComponent>
            <VerticalSpacerInPixel pixel="h-[52px]" />
          </MelaniComponent>
        </MelaniWrapper>
        <VerticalSpacerInPixel pixel="h-[208px]" />
      </div>
    </MelaniComponent>
  );
};

export { KrakenPro };
