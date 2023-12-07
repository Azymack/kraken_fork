import type { ReactNode } from 'react';

type MelaniWrapperProps = {
  children?: ReactNode;
};

const MelaniWrapper = (props: MelaniWrapperProps) => {
  return (
    <div className="fc-12e3415e-2 box-border flex flex-col px-[30px] lg:flex-row min-[1040px]:px-[calc((100%-980px)/2)]">
      {props.children}
    </div>
  );
};

export { MelaniWrapper };
