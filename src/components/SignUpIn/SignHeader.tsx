import type { ReactNode } from 'react';

const SignHeader = (props: { children: ReactNode }) => {
  return <div className="sign-upin-header">{props.children}</div>;
};

export { SignHeader };
