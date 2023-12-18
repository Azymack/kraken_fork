import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { TextBigPurple } from '@/components/TextBigPurple';
import { MelaniComponent } from '@/layout/MelaniComponent';
import { MelaniWrapper } from '@/layout/MelaniWrapper';
import { VerticalSpacerInPixel } from '@/layout/VerticalSpacer';

const StartJourney = () => {
  return (
    <MelaniComponent>
      <MelaniWrapper>
        <div className="lg:hidden">
          <MelaniComponent>
            <VerticalSpacerInPixel pixel="h-[64px]" />
            <TextBigPurple text="Start your crypto journey" />
            <VerticalSpacerInPixel pixel="h-[24px]" />
            <div className="text-center text-[16px] font-normal leading-[19px] text-black lg:text-[32px] lg:leading-[42px]">
              <p>
                Kraken makes it easy to get started. Sign up today to{' '}
                <strong>buy and sell 200+ cryptocurrencies</strong>.
              </p>
            </div>
            <VerticalSpacerInPixel pixel="h-[24px]" />
            <div className="flex flex-row items-start justify-center">
              <ARoundedPurple
                additionalClassName="m-auto"
                text="Get started with Kraken"
                href="/sign-up"
              />
            </div>
            <VerticalSpacerInPixel pixel="h-[60px]" />
            <div className="flex flex-col items-center justify-start">
              <img
                src="/assets/images/crypto-journey-1040x880.png"
                alt=""
                className=" w-[40%]"
              />
            </div>
          </MelaniComponent>
        </div>
        <div className="hidden lg:block">
          <MelaniComponent>
            <VerticalSpacerInPixel pixel="h-[160px]" />
            <div className="flex flex-row justify-start gap-x-[10px]">
              <div className="relative">
                <VerticalSpacerInPixel pixel="h-[60px]" />
                <TextBigPurple
                  additionalClassName="lg:text-left"
                  text="Start your crypto journey"
                />
                <VerticalSpacerInPixel pixel="h-[30px]" />
                <div className=" text-[32px] font-normal leading-[42px] text-black">
                  <p>
                    Kraken makes it easy to get started. Sign up
                    <br />
                    today to <strong>buy and sell 200+ cryptocurrencies</strong>
                    .
                  </p>
                </div>
                <VerticalSpacerInPixel pixel="h-[30px]" />
                <ARoundedPurple
                  additionalClassName="m-auto"
                  text="Get started with Kraken"
                  href="/sign-up"
                />
              </div>
              <img
                src="/assets/images/crypto-journey-1040x880.png"
                alt=""
                className=" max-w-[480px]"
              />
            </div>
          </MelaniComponent>
        </div>
        <div>
          <VerticalSpacerInPixel pixel="h-[24px]" />
          <div className="text-center  text-[12px] font-normal leading-[17px] text-bshu">
            <p>
              <em>
                <a
                  className="font-black"
                  href="https://support.kraken.com/hc/en-us/articles/4402532394260"
                >
                  Margin
                </a>
                ,{' '}
                <a
                  className="font-black"
                  href="https://support.kraken.com/hc/en-us/articles/360023786632-Kraken-Futures-eligibility-and-availability"
                >
                  futures
                </a>{' '}
                and{' '}
                <a
                  className="font-black"
                  href="https://support.kraken.com/hc/en-us/articles/360044886531"
                >
                  opt-in rewards
                </a>
                &nbsp;are subject to certain geographic limitations and
                eligibility criteria.
              </em>
            </p>
          </div>
          <VerticalSpacerInPixel pixel="h-[20px]" />
          <div className="text-center  text-[12px] font-normal leading-[17px] text-bshu">
            <p>
              <em>
                Reward rates are subject to change and compliance with
                Kraken&apos;s terms and conditions. These materials are for
                general information purposes only and are not investment advice
                or a recommendation or solicitation to buy, sell, stake or hold
                any cryptoasset or to engage in any specific trading strategy.
                Some crypto products and markets are unregulated, and you may
                not be protected by government compensation and/or regulatory
                protection schemes. The unpredictable nature of the cryptoasset
                markets can lead to loss of funds. Tax may be payable on any
                return and/or on any increase in the value of your cryptoassets
                and you should seek independent advice on your taxation
                position. For more information, please see our{' '}
                <a className="font-black" href="/legal">
                  Terms of Service
                </a>
                .
              </em>
            </p>
          </div>
          <VerticalSpacerInPixel pixel="h-[20px]" />
          <div className="text-center  text-[12px] font-normal leading-[17px] text-bshu">
            <p>
              <em>
                Trading futures, derivatives and other instruments using
                leverage involves an element of risk and may not be suitable for
                everyone. Read{' '}
                <a className="font-black" href="/legal/disclosures">
                  Kraken&apos;s risk disclosure
                </a>{' '}
                to learn more.
              </em>
            </p>
          </div>
          <VerticalSpacerInPixel pixel="h-[28px]" />
        </div>
      </MelaniWrapper>
    </MelaniComponent>
  );
};

export { StartJourney };
