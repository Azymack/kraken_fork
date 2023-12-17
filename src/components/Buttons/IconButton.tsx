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
      className={` border-primary active:bg-blue-light-3 disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:hover:text-dark-3 inline-flex items-center justify-center rounded-full border bg-white px-[24px] py-[12px] text-center font-plexsans text-base font-semibold text-purple hover:bg-greyblur`}
      href={href || '#'}
    >
      {icon}
      <span className="ml-[3px]">{text}</span>
    </a>
  );
};

export { IconButton };
