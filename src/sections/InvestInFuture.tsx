import RoundedButton from '@/components/Buttons/FullRounded';
import { Section } from '@/layout/Section';

const InvestInFuture = () => {
  return (
    <Section
      desktopBackgroundImage="./assets/images/snakes-from-left-bottom-2880x1594.png"
      mobileBackgroundImage="./assets/images/snakes-from-right-top-2151x1011.png"
    >
      <div className="mx-auto flex max-w-2xl items-center justify-between lg:max-w-4xl">
        <dl className="mx-auto grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          <div className="relative justify-center lg:pr-10 lg:text-left">
            <h2 className="text-dark mb-5 text-4xl font-bold !leading-[1.208] dark:text-white sm:text-[42px] lg:text-[40px] xl:text-5xl">
              Invest in your future
            </h2>
            <h4>
              Grow your portfolio in a more fair and open financial system.{' '}
              <b>Start with just $10.</b>
            </h4>
            <div>
              <RoundedButton text="Sign up" onclick={() => {}}></RoundedButton>
            </div>
          </div>
          <div className="relative">
            <div>
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
            <div>
              <RoundedButton text="App Store" onclick={() => {}} />
              <RoundedButton text="Google Play" onclick={() => {}} />
              {/* <a
                className="text-ds-button-md px-ds-7 py-ds-4 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 text-ds-button-inverted-high hover:text-ds-button-inverted-high-hover bg-ds-button-inverted-high hover:bg-ds-button-inverted-high-hover active:bg-ds-button-inverted-high-active rounded-ds-round focus:outline-ds-button-inverted relative box-border inline-block w-full cursor-pointer whitespace-nowrap border-0 no-underline outline-offset-2 focus-visible:outline focus-visible:outline-2 disabled:pointer-events-none"
                href="https://kraken.app.link/home-hero-ios"
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ms-ds-0 me-ds-3 mt-ds-0 mb-ds-0 stroke-ds-icon w-ds-icon-md h-ds-icon-md"
                  >
                    <path
                      d="M20.4251 8.5374C20.2969 8.6369 18.0328 9.91266 18.0328 12.7494C18.0328 16.0306 20.9138 17.1914 21 17.2201C20.9867 17.2909 20.5423 18.8099 19.481 20.3576C18.5347 21.7196 17.5464 23.0793 16.0429 23.0793C14.5394 23.0793 14.1524 22.206 12.4168 22.206C10.7253 22.206 10.1239 23.1081 8.74868 23.1081C7.37342 23.1081 6.41383 21.8478 5.31053 20.3001C4.03255 18.4826 3 15.6591 3 12.9794C3 8.68112 5.79474 6.40155 8.54526 6.40155C10.0068 6.40155 11.225 7.36113 12.1426 7.36113C13.016 7.36113 14.378 6.34406 16.0407 6.34406C16.6708 6.34406 18.9349 6.40155 20.4251 8.5374ZM15.2513 4.52438C15.939 3.70851 16.4254 2.57646 16.4254 1.44442C16.4254 1.28743 16.4121 1.12824 16.3834 1C15.2646 1.04201 13.9335 1.74512 13.1309 2.67596C12.5008 3.39233 11.9127 4.52438 11.9127 5.67191C11.9127 5.84437 11.9414 6.01683 11.9547 6.0721C12.0254 6.08537 12.1404 6.10085 12.2554 6.10085C13.2592 6.10085 14.5217 5.42869 15.2513 4.52438Z"
                      className="fill-current stroke-transparent"
                    ></path>
                  </svg>
                  <span className="my-px">App Store</span>
                </span>
              </a>
              <a
                className="text-ds-button-md px-ds-7 py-ds-4 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 text-ds-button-inverted-high hover:text-ds-button-inverted-high-hover bg-ds-button-inverted-high hover:bg-ds-button-inverted-high-hover active:bg-ds-button-inverted-high-active rounded-ds-round focus:outline-ds-button-inverted relative box-border inline-block w-full cursor-pointer whitespace-nowrap border-0 no-underline outline-offset-2 focus-visible:outline focus-visible:outline-2 disabled:pointer-events-none"
                href="https://kraken.app.link/home-hero-android"
                rel="noreferrer"
                target="_blank"
              >
                <span className="flex items-center justify-center">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="ms-ds-0 me-ds-3 mt-ds-0 mb-ds-0 stroke-ds-icon w-ds-icon-md h-ds-icon-md"
                  >
                    <path
                      d="M12.65 11.025L15.38 8.1L4.78502 2.38C4.72002 2.315 4.59002 2.315 4.39502 2.25L12.65 11.025Z"
                      className="fill-current stroke-transparent"
                    ></path>
                    <path
                      d="M16.55 15.25L20.385 13.17C20.84 12.91 21.1 12.52 21.1 12C21.1 11.48 20.84 11.025 20.385 10.83L16.55 8.75L13.495 12L16.55 15.25Z"
                      className="fill-current stroke-transparent"
                    ></path>
                    <path
                      d="M3.16002 2.83496C2.96502 3.02996 2.90002 3.28996 2.90002 3.54996V20.45C2.90002 20.71 2.96502 20.97 3.16002 21.23L11.74 12L3.16002 2.83496Z"
                      className="fill-current stroke-transparent"
                    ></path>
                    <path
                      d="M12.65 12.9751L4.39502 21.7501C4.52502 21.7501 4.65502 21.6851 4.78502 21.6201L15.38 15.9001L12.65 12.9751Z"
                      className="fill-current stroke-transparent"
                    ></path>
                  </svg>
                  <span className="my-px">Google Play</span>
                </span>
              </a> */}
            </div>
          </div>
        </dl>
      </div>
    </Section>
  );
};

export { InvestInFuture };
