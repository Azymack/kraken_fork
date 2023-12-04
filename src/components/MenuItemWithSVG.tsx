import type { ReactNode } from 'react';

type MenuItemWithSVGProps = {
  item: {
    iconType: string;
    iconName: string;
    title: string;
    description?: string;
    href?: string;
    children?: ReactNode;
  };
};

const MenuItemWithSVG = (props: MenuItemWithSVGProps) => {
  const { title, description, href, iconType, iconName } = props.item;

  return (
    // <div class="col-span-2 sm:col-span-1"></div>
    <div className="flex-wrap">
      <a
        key={title}
        href={href}
        className="-m-3 flex items-center rounded-lg p-2 transition duration-150 ease-in-out hover:bg-gray-400 focus:outline-none focus-visible:ring focus-visible:ring-orange-500/50"
      >
        <div className="flex h-10 w-10 shrink-0 items-center justify-center text-white sm:h-12 sm:w-12">
          <img
            src={`./assets/images/icons/${iconName}${iconType}`}
            alt={`${iconName}`}
          />
        </div>
        <div className="ml-4">
          <p className="text-sm font-medium text-gray-900">{title}</p>
          <p className="text-sm text-gray-800">{description}</p>
        </div>
      </a>
      <style jsx>
        {`
          .footer-icon-list :global(a:not(:last-child)) {
            @apply mr-3;
          }

          .footer-icon-list :global(a) {
            @apply text-gray-500;
          }

          .footer-icon-list :global(a:hover) {
            @apply text-gray-500;
          }

          .footer-icon-list :global(svg) {
            @apply fill-current w-5 h-5;
          }
        `}
      </style>
    </div>
  );
};

export { MenuItemWithSVG };
