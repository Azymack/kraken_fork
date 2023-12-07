import type { ReactNode } from 'react';

type MelaniWrapperProps = {
  children?: ReactNode;
  addtionalClassName?: string;
};

const MelaniWrapper = (props: MelaniWrapperProps) => {
  return (
    <div
      className={`${props.addtionalClassName} fc-12e3415e-2 box-border px-[30px] min-[1234px]:px-[calc((100%-1174px)/2)]`}
    >
      {props.children}
    </div>
  );
};

export { MelaniWrapper };
