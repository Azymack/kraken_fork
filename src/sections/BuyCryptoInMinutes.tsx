import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { MelaniComponent } from '@/layout/MelaniComponent';
import { MelaniImage } from '@/layout/MelaniImage';
import { MelaniWrapper } from '@/layout/MelaniWrapper';
import { VerticalSpacerInPixel } from '@/layout/VerticalSpacer';

const BuyCryptoInMinutes = () => {
  return (
    <MelaniComponent>
      <MelaniComponent>
        <VerticalSpacerInPixel pixel="h-[90px]" />
      </MelaniComponent>
      <MelaniComponent>
        <MelaniWrapper>
          <div className=" grid grid-cols-1 gap-x-[68px] lg:grid-cols-2">
            <div className="lg:hidden ">
              <h2 className=" text-center text-[14px] font-normal leading-[20px] tracking-[2px] text-black lg:text-left lg:text-[18px] lg:leading-[25px]">
                <span>CRYPTO EXCHANGE</span>
              </h2>
              <VerticalSpacerInPixel pixel="h-[24px]" />
              <h2 className=" text-center text-[34px] font-medium leading-[42px] text-purple lg:text-left lg:text-[40px] lg:leading-[54px]">
                <span>
                  Buy&nbsp;crypto
                  <br />
                  in minutes
                </span>
              </h2>
              <VerticalSpacerInPixel pixel="h-[16px]" />
            </div>
            <MelaniImage
              srcPath="/assets/images/good-morning-satoshi.png"
              additionalClassName="w-auto"
            />
            <div className="flex flex-col content-start items-stretch">
              <div className=" hidden flex-col content-start lg:block">
                <h2 className="text-left  text-[18px] font-medium leading-[25px] tracking-[2px] text-black">
                  <span>CRYPTO EXCHANGE</span>
                </h2>
                <VerticalSpacerInPixel pixel="h-[28px]" />
                <h2 className="text-left text-[40px] font-medium leading-[54px] text-purple">
                  <span>Buy crypto in minutes</span>
                </h2>
              </div>
              <div className=" flex flex-col content-start items-center lg:flex-row">
                <MelaniImage
                  additionalClassName=" w-auto h-[58px]"
                  srcPath="/assets/images/icons/circled-number-1-233x232.png"
                />
                <div className="text-left text-[18px] font-medium leading-[30px] text-black lg:text-[24px]">
                  <p className="text-center sm:text-left">
                    Create your free Kraken account
                  </p>
                </div>
              </div>
              <div className=" flex flex-col content-start items-center lg:flex-row">
                <MelaniImage
                  additionalClassName=" w-auto h-[58px]"
                  srcPath="/assets/images/icons/circled-number-2-233x232.png"
                />
                <div className="text-left  text-[18px] font-medium leading-[30px] text-black lg:text-[24px]">
                  <p className="text-center sm:text-left">
                    Connect your funding method
                  </p>
                </div>
              </div>
              <div className=" flex flex-col content-start items-center lg:flex-row">
                <MelaniImage
                  additionalClassName=" w-auto h-[58px]"
                  srcPath="/assets/images/icons/circled-number-3-233x232.png"
                />
                <div className="text-left text-[18px] font-medium leading-[30px] text-black lg:text-[24px]">
                  <p className="text-center sm:text-left">
                    Buy and sell 200+ cryptocurrencies
                  </p>
                </div>
              </div>
              <VerticalSpacerInPixel pixel="h-[40px]" />
              <div className=" flex flex-col content-center items-stretch lg:flex-row lg:content-start">
                <ARoundedPurple
                  additionalClassName="m-auto lg:m-none"
                  text="Buy crypto"
                />
              </div>
              <VerticalSpacerInPixel pixel="h-[40px]" />
            </div>
          </div>
        </MelaniWrapper>
      </MelaniComponent>
    </MelaniComponent>
  );
};

export { BuyCryptoInMinutes };
