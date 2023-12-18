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
        <div className="box-border flex flex-col lg:flex-row lg:px-[100px] min-[1234px]:px-[calc((100%-980px)/2)]">
          <MelaniWrapper addtionalClassName="flex flex-col lg:flex-row lg:px-[100px]">
            <div className=" flex flex-auto flex-col justify-center lg:pr-[160px]">
              <div className="w-full"></div>
              <div className=" mt-[36px] opacity-100 lg:mt-0">
                <div className=" transform-none opacity-100">
                  <h1 className="text-center text-[24px] font-medium leading-[30px] text-black lg:text-start lg:text-[58px] lg:leading-[66px]">
                    Invest in your future
                  </h1>
                </div>
              </div>
              <div className="h-[6px] w-full lg:h-[32px]"></div>
              <div className=" opacity-100">
                <div className=" transform-none opacity-100">
                  <h1 className="text-center text-[16px] leading-[20px] text-black lg:text-start lg:text-[26px] lg:leading-[36px]">
                    Grow your portfolio in a more fair and open financial
                    system. <strong className=" inline-block">Start</strong>{' '}
                    <strong className=" hidden lg:inline-block">trading</strong>{' '}
                    <strong className=" hidden lg:inline-block">crypto</strong>{' '}
                    <strong className=" inline-block">with just $10.</strong>
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
              additionalClassName={` w-full block lg:hidden h-auto `}
              srcPath="/assets/images/snakes-from-right-top-2151x1011.png"
            />
            <MelaniImage
              additionalClassName={`h-full w-full hidden lg:block`}
              srcPath="/assets/images/snakes-from-left-bottom-2880x1594.png"
            />
          </div>
        </div>
      </div>
    </MelaniComponent>
  );
};

export { InvestInFuture };
