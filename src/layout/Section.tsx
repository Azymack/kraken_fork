import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  desktopBackgroundImage?: string;
  mobileBackgroundImage?: string;
  children: ReactNode;
};

const Section = (props: ISectionProps) => {
  const { yPadding, desktopBackgroundImage, mobileBackgroundImage, children } =
    props;

  let bgRule = '';
  if (desktopBackgroundImage) {
    bgRule = `bg-cover bg-[${desktopBackgroundImage}]`;
    if (mobileBackgroundImage) {
      bgRule = `bg-cover lg:bg-[${desktopBackgroundImage}] sm:bg-[${mobileBackgroundImage}]`;
    }
  }

  return (
    <div
      className={`bg-cover ${bgRule}`}
      style={{ backgroundImage: `${desktopBackgroundImage}` }}
    >
      <div style={{ padding: '50px 0px', position: 'relative' }}>
        <div
          className={`box-border flex w-full px-[30px] text-center min-[1040px]:px-[calc((100%-980px)/2)] ${
            yPadding || 'py-16'
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export { Section };
