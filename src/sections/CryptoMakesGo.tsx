import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { MelaniComponent } from '@/layout/MelaniComponent';
import { MelaniImage } from '@/layout/MelaniImage';
import { MelaniWrapper } from '@/layout/MelaniWrapper';
import { VerticalSpacerInPixel } from '@/layout/VerticalSpacer';

const CryptoMakesGo = () => {
  return (
    <MelaniComponent>
      <div className="min-[1234px]:px-[calc((100%-1174px)/2) box-border w-full lg:px-[30px]">
        <MelaniWrapper>
          <VerticalSpacerInPixel pixel="h-[60px]" />
          <MelaniComponent>
            <div className="world-go-bg">
              <MelaniComponent>
                <div className=" border-box relative mx-auto max-w-[620px]">
                  <MelaniComponent>
                    <h3 className="text-center font-gts text-[20px] font-normal leading-[26px] text-black lg:text-[36px] lg:leading-[53px]">
                      <span>Money makes the world go round</span>
                    </h3>
                  </MelaniComponent>
                  <MelaniComponent>
                    <h1 className=" wth-61 text-center font-gcb text-[56px] font-extrabold uppercase leading-[48px] text-purple lg:text-[120px] lg:leading-[103px]">
                      <span>Crypto Makes The World Go Forward</span>
                    </h1>
                  </MelaniComponent>
                </div>
                <div className="relative top-[-32px] mx-auto box-border w-max">
                  <MelaniImage
                    srcPath="/assets/images/globe.png"
                    additionalClassName="lg:h-[180px] lg:w-auto h-[110px] w-[110px]"
                  />
                </div>
                <div className="flex flex-row items-center justify-center">
                  <ARoundedPurple
                    text="See what crypto can be"
                    href="/seewhatcryptocanbe"
                  />
                </div>
              </MelaniComponent>
            </div>
          </MelaniComponent>
        </MelaniWrapper>
      </div>
    </MelaniComponent>
  );
};

export { CryptoMakesGo };
