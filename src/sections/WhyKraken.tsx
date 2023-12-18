import Link from 'next/link';

import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { TextBigPurple } from '@/components/TextBigPurple';
import { MelaniComponent } from '@/layout/MelaniComponent';
import { MelaniImage } from '@/layout/MelaniImage';
import { MelaniWrapper } from '@/layout/MelaniWrapper';
import { VerticalSpacerInPixel } from '@/layout/VerticalSpacer';

const WhyKraken = () => {
  return (
    <MelaniComponent>
      <MelaniWrapper>
        <div>
          <VerticalSpacerInPixel pixel="h-[84px]" />
          <TextBigPurple text="Why Kraken?" />
          <VerticalSpacerInPixel pixel="h-[56px]" />
          <MelaniComponent>
            <div className="flex flex-wrap items-start justify-center gap-x-[62px] gap-y-[56px]">
              <div className="mx-0 box-border w-full max-w-[260px]">
                <MelaniImage srcPath="/assets/images/simplicity-800x801.png" />
                <VerticalSpacerInPixel pixel="h-[8px]" />
                <h3 className="text-center  text-[24px] font-medium leading-[32px] text-black">
                  Simplicity
                </h3>
                <div className="text-center  text-[16px] font-normal leading-[24px] text-black">
                  <p>
                    Kraken makes it easy to buy&nbsp;
                    <br />
                    crypto using our{' '}
                    <Link
                      className="font-bold text-purple"
                      target="_blank"
                      href="/features/cryptocurrency-apps"
                    >
                      mobile apps
                    </Link>
                    .&nbsp;
                  </p>
                </div>
              </div>
              <div className="mx-0 box-border w-full max-w-[260px]">
                <MelaniImage srcPath="/assets/images/education-800x801.png" />
                <VerticalSpacerInPixel pixel="h-[8px]" />
                <h3 className="text-center  text-[24px] font-medium leading-[32px] text-black">
                  Education
                </h3>
                <div className="text-center  text-[16px] font-normal leading-[24px] text-black">
                  <p>
                    Not sure where to start? Head to our{' '}
                    <Link
                      className="font-bold text-purple"
                      target="_blank"
                      href="/learn"
                    >
                      Learn Center
                    </Link>{' '}
                    and learn about all things crypto.
                  </p>
                </div>
              </div>
              <div className="mx-0 box-border w-full max-w-[260px]">
                <MelaniImage srcPath="/assets/images/service-800x802.png" />
                <VerticalSpacerInPixel pixel="h-[8px]" />
                <h3 className="text-center  text-[24px] font-medium leading-[32px] text-black">
                  Service
                </h3>
                <div className="text-center  text-[16px] font-normal leading-[24px] text-black">
                  <p>
                    Find your answers instantly in our{' '}
                    <Link
                      className="font-bold text-purple"
                      target="_blank"
                      href="https://support.kraken.com/"
                    >
                      Support Center
                    </Link>
                    . Or reach us 24/7/365 on Live Chat, phone or by email.
                  </p>{' '}
                </div>
              </div>
            </div>
          </MelaniComponent>
          <VerticalSpacerInPixel pixel="h-[56px]" />
          <MelaniComponent>
            <div className=" text-center">
              <ARoundedPurple text="Get started with Kraken" />
            </div>
          </MelaniComponent>
          <VerticalSpacerInPixel pixel="h-[84px]" />
        </div>
      </MelaniWrapper>
    </MelaniComponent>
  );
};

export { WhyKraken };
