import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { IconButton } from '@/components/Buttons/IconButton';
import { Apple } from '@/components/SVG/Apple';
import { Google } from '@/components/SVG/Google';
import { MelaniComponent } from '@/layout/MelaniComponent';
import { MelaniImage } from '@/layout/MelaniImage';
import { MelaniWrapper } from '@/layout/MelaniWrapper';

const InvestInFuture = () => {
  return (
    <MelaniComponent>
      <div className="relative py-[30px] lg:py-[50px]">
        <MelaniWrapper>
          <div className=" flex flex-auto flex-col justify-center lg:pr-[160px]">
            <div className="w-full"></div>
            <div className=" opacity-100">
              <div className=" transform-none opacity-100">
                <h1 className="text-center font-celias text-[58px] font-bold leading-[66px] text-black lg:text-start">
                  Invest in your future
                </h1>
              </div>
            </div>
            <div className="h-[32px] w-full"></div>
            <div className=" opacity-100">
              <div className=" transform-none opacity-100">
                <h1 className="text-center font-celias text-[26px] font-bold leading-[36px] text-black lg:text-start">
                  Grow your portfolio in a more fair and open financial system.{' '}
                  <strong>Start trading crypto with just $10.</strong>
                </h1>
              </div>
            </div>
            <div className="h-[32px] w-full"></div>
            <div className="">
              <div className="flex flex-row items-start justify-center text-center lg:justify-start lg:text-start">
                <ARoundedPurple text="Sign up" href="/sign-up" />
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:self-end">
            <div className="relative mb-[10px]">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="h-[579px] w-[278px]"
              >
                <source
                  src="/assets/videos/cell-phone-portrait.mp4"
                  type="video/mp4"
                />
              </video>
            </div>

            <div className="flex w-max flex-row content-center items-center">
              <IconButton
                icon={<Apple />}
                text="App Store"
                href="https://kraken.app.link/home-hero-ios"
              />
              <div className="mr-[16px]"></div>
              <IconButton
                icon={<Google />}
                text="Google Play"
                href="https://kraken.app.link/home-hero-android"
              />
            </div>
          </div>
        </MelaniWrapper>
        <div className=" absolute left-0 top-0 -z-10 h-full w-full overflow-hidden bg-backgrey">
          <MelaniImage
            additionalClassName={`block lg:hidden`}
            srcPath="/assets/images/snakes-from-right-top-2151x1011.png"
          />
          <MelaniImage
            additionalClassName={`hidden lg:block`}
            srcPath="/assets/images/snakes-from-left-bottom-2880x1594.png"
          />
        </div>
      </div>
    </MelaniComponent>
  );
};

export { InvestInFuture };
