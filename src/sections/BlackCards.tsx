import Link from 'next/link';

import { MelaniComponent } from '@/layout/MelaniComponent';
import { MelaniWrapper } from '@/layout/MelaniWrapper';
import { VerticalSpacerInPixel } from '@/layout/VerticalSpacer';

const BlackCards = () => {
  return (
    <MelaniComponent>
      <div>
        <MelaniComponent>
          <div className="mt-[-136px]"></div>
        </MelaniComponent>
        <MelaniComponent>
          <MelaniWrapper>
            <div className="flex flex-wrap items-stretch justify-center gap-[30px]">
              <div className="black-card">
                <div className="black-card-in">
                  <VerticalSpacerInPixel pixel="h-[54px]" />
                  <img
                    src="/assets/images/icons/pro.webp"
                    alt=""
                    className="m-auto block h-[32px] w-auto"
                  />
                  <VerticalSpacerInPixel pixel="h-[32px]" />
                  <div className="text-center  text-[18px] font-normal leading-[28px] text-white">
                    <p>
                      Place advanced orders on-the-go
                      with&nbsp;the&nbsp;Kraken&nbsp;Pro&nbsp;app.
                    </p>
                  </div>
                  <VerticalSpacerInPixel pixel="h-[38px]" />
                  <div className="text-center  text-[16px] font-normal leading-[20px] text-white">
                    <Link
                      target="_blank"
                      href="https://krakenpro.app.link/homepage-pro-section"
                    >
                      Learn more
                    </Link>
                  </div>
                  <VerticalSpacerInPixel pixel="h-[48px]" />
                </div>
              </div>
              <div className="black-card">
                <div className="black-card-in">
                  <VerticalSpacerInPixel pixel="h-[54px]" />
                  <img
                    src="/assets/images/icons/margin-trading.webp"
                    alt=""
                    className="m-auto block h-[32px] w-auto"
                  />
                  <VerticalSpacerInPixel pixel="h-[32px]" />
                  <div className="text-center  text-[18px] font-normal leading-[28px] text-white">
                    <p>
                      Trade with up
                      <br />
                      to 5x leverage.*
                    </p>
                  </div>
                  <VerticalSpacerInPixel pixel="h-[38px]" />
                  <div className="text-center  text-[16px] font-normal leading-[20px] text-white">
                    <Link
                      target="_blank"
                      href="https://www.kraken.com/features/margin-trading/"
                    >
                      Learn more
                    </Link>
                  </div>
                  <VerticalSpacerInPixel pixel="h-[48px]" />
                </div>
              </div>
              <div className="black-card">
                <div className="black-card-in">
                  <VerticalSpacerInPixel pixel="h-[54px]" />
                  <img
                    src="/assets/images/icons/futures.webp"
                    alt=""
                    className="m-auto block h-[32px] w-auto"
                  />
                  <VerticalSpacerInPixel pixel="h-[32px]" />
                  <div className="text-center  text-[18px] font-normal leading-[28px] text-white">
                    <p>Trade 100+ multi-collateral</p>
                    <p>futures contracts.</p>
                  </div>
                  <VerticalSpacerInPixel pixel="h-[38px]" />
                  <div className="text-center  text-[16px] font-normal leading-[20px] text-white">
                    <Link
                      target="_blank"
                      href="https://www.kraken.com/features/futures"
                    >
                      Learn more
                    </Link>
                  </div>
                  <VerticalSpacerInPixel pixel="h-[48px]" />
                </div>
              </div>
            </div>
          </MelaniWrapper>
        </MelaniComponent>
      </div>
    </MelaniComponent>
  );
};

export { BlackCards };
