import RoundedButton from '@/components/Buttons/FullRounded';
import { Section } from '@/layout/Section';

const InvestInFuture = () => {
  return (
    <Section
      desktopBackgroundImage="./assets/images/snakes-from-left-bottom-2880x1594.png"
      mobileBackgroundImage="./assets/images/snakes-from-right-top-2151x1011.png"
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between p-6 sm:mt-20 lg:mt-12 lg:max-w-4xl lg:text-left">
        <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div className="relative flex flex-col justify-center">
            <h2 className="">Invest in your future</h2>
            <h4>
              Grow your portfolio in a more fair and open financial system.{' '}
              <b>Start with just $10.</b>
            </h4>
            <div>
              <RoundedButton text="Sign up" onclick={() => {}}></RoundedButton>
            </div>
          </div>
          <div className="relative">
            <video
              autoPlay
              muted
              loop
              playsInline
              style={{ margin: 'auto', width: '278px', height: '579px;' }}
            >
              <source
                src="./assets/videos/cell-phone-portrait.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </dl>
      </div>
    </Section>
  );
};

export { InvestInFuture };
