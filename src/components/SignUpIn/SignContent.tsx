import type { ReactNode } from 'react';

const SignContent = (props: { children: ReactNode }) => {
  return <div className="sign-content">{props.children}</div>;
};

export { SignContent };
