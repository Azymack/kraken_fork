import type { ReactNode } from 'react';

type MelaniComponentProps = {
  children?: ReactNode;
};

const MelaniComponent = (props: MelaniComponentProps) => {
  return (
    <div className="m-0 border-0 from-inherit p-0 align-baseline">
      {props.children}
    </div>
  );
};

export { MelaniComponent };
