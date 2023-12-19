import { ARoundedWhite } from '@/components/Buttons/ARoundedWhite';
import { MelaniComponent } from '@/layout/MelaniComponent';

const MobileFooterFixed = () => {
  return (
    <MelaniComponent>
      <div className="relative z-50 block lg:hidden">
        <div className=" fixed bottom-0 left-0 z-50 w-full bg-purple text-center">
          <div className=" flex h-[90px] flex-row items-center justify-center">
            <div className=" -indent-99999 relative ml-[10px] h-[63px] w-[63px] bg-[url(/assets/images/mobile-app.svg)] bg-contain bg-center bg-no-repeat text-transparent"></div>
            <div className="mx-[10px] flex flex-col items-start text-white">
              <p className="text-[24px] font-bold leading-[28px]">Kraken</p>
              <div className="flex flex-row items-center">
                <span className="rating-span">
                  <span>
                    <span className="star-span">
                      <svg
                        className="star-svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    </span>
                  </span>
                  <span>
                    <span className="star-span">
                      <svg
                        className="star-svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    </span>
                  </span>
                  <span>
                    <span className="star-span">
                      <svg
                        className="star-svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    </span>
                  </span>
                  <span>
                    <span className="star-span">
                      <svg
                        className="star-svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    </span>
                  </span>
                  <span>
                    <span className="star-span">
                      <svg
                        className="star-svg"
                        focusable="false"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                    </span>
                  </span>
                </span>
                (3k)
              </div>
            </div>
            <ARoundedWhite
              text="Get the App"
              href="https://kraken.app.link/home"
            />
          </div>
        </div>
      </div>
    </MelaniComponent>
  );
};

export { MobileFooterFixed };
