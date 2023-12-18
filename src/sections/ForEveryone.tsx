import { MelaniComponent } from '@/layout/MelaniComponent';
import { MelaniWrapper } from '@/layout/MelaniWrapper';

const ForEveryone = () => {
  const ratingInfo = [
    {
      category: 'Clients',
      value: '10M+',
    },
    {
      category: 'Countries supported',
      value: '190+',
    },
    {
      category: 'Quarterly trading volume',
      value: '$207B+',
    },
  ];

  return (
    <MelaniComponent>
      <MelaniWrapper>
        <MelaniComponent>
          <div className="h-[84px] w-full"></div>
        </MelaniComponent>
        <MelaniComponent>
          <h2 className=" text-center text-[34px] font-medium leading-[42px] text-purple lg:text-[40px] lg:leading-[64px]">
            <span>Kraken is a crypto exchange for everyone</span>
          </h2>
        </MelaniComponent>
        <MelaniComponent>
          <div className="h-[40px] w-full"></div>
        </MelaniComponent>
        <MelaniComponent>
          <div className=" flex flex-col gap-0 lg:grid lg:grid-cols-3">
            {ratingInfo.map((item) => (
              <div
                key={item.category}
                className=" flex flex-col items-stretch justify-start"
              >
                <h3 className="text-center  text-[48px] font-medium leading-[64px] text-purple">
                  {item.value}
                </h3>
                <div className="text-center  text-base font-normal leading-[26px] text-black">
                  {item.category}
                </div>
              </div>
            ))}
          </div>
        </MelaniComponent>
      </MelaniWrapper>
    </MelaniComponent>
  );
};

export { ForEveryone };
