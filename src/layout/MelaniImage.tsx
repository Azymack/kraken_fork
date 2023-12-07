import type { ReactNode } from 'react';

type MelaniImageProps = {
  additionalClassName?: string;
  children?: ReactNode;
  srcPath?: string;
};

const MelaniImage = (props: MelaniImageProps) => {
  return (
    <img
      src={`${props.srcPath}`}
      alt=""
      className={`${props.additionalClassName} object-cover object-center`}
    />
  );
};

export { MelaniImage };
