import type { ReactNode } from 'react';

type RoundedButtonProps = {
  icon: ReactNode;
  text: string;
  href?: string;
};

const IconButton = (props: RoundedButtonProps) => {
  const { text, href, icon } = props;

  return (
    <a
      className={` border-primary active:bg-blue-light-3 disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:hover:text-dark-3 font-plexsans inline-flex items-center justify-center rounded-full border bg-white px-7 py-3 text-center text-base font-medium text-purple hover:bg-greyblur`}
      href={href || '#'}
    >
      {icon}
      <span className="ml-[5px]">{text}</span>
    </a>
  );
};

export { IconButton };
