import { LeftMoto } from './LeftMoto';
import { RightVideo } from './RightVideo';

const InvestInFuture = () => {
  return (
    <div className="kraken-component">
      <div className="relative py-[50px]">
        <div className="kraken-content-wrapper box-border flex w-full px-[30px] min-[1040px]:px-[calc((100%-980px)/2)]">
          <LeftMoto />
          <RightVideo />
        </div>
      </div>
    </div>
    // <Section
    //   desktopBackgroundImage="url(/assets/images/snakes-from-left-bottom-2880x1594.png)"
    //   mobileBackgroundImage="url(/assets/images/snakes-from-right-top-2151x1011.png)"
    // >
    //   <LeftMoto />
    //   <RightVideo />
    // </Section>
  );
};

export { InvestInFuture };
