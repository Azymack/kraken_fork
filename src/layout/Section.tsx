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
  const {
    yPadding,
    title,
    description,
    desktopBackgroundImage,
    mobileBackgroundImage,
    children,
  } = props;

  let bgRule = '';
  if (desktopBackgroundImage) {
    bgRule = `bg-[${desktopBackgroundImage}]`;
    if (mobileBackgroundImage) {
      bgRule = `lg:bg-[${desktopBackgroundImage}] bg-[${mobileBackgroundImage}]`;
    }
  }

  return (
    <div
      className={`mx-auto max-w-screen-lg px-3 text-center ${
        yPadding || 'py-16'
      }
    ${bgRule}`}
    >
      {(title || description) && (
        <div className="mb-12 text-center">
          {props.title && (
            <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
          )}
          {props.description && (
            <div className="mt-4 text-xl md:px-20">{description}</div>
          )}
        </div>
      )}

      {children}
    </div>
  );
};

export { Section };
