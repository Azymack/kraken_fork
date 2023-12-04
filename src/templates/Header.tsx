import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

import RoundedButton from '@/components/Buttons/FullRounded';
import { MenuItemWithSVG as MenuItem } from '@/components/MenuItemWithSVG';

// const
const explore_items = [
  {
    title: 'Buy Crypto',
    href: '/sign-up',
    description: 'Start with just $10',
    iconType: '.svg',
    iconName: 'buy-crypto-48x48',
  },
  {
    title: 'Trade NFTs',
    href: 'nft.kraken.com',
    description: 'Zero gas fees',
    iconType: '.svg',
    iconName: 'trade-NFTs-48x48',
  },
  {
    title: 'Earn Rewards',
    href: '/features/staking-coins',
    description: 'Up to 26% APY',
    iconType: '.svg',
    iconName: 'earn-rewards-48x48',
  },
  {
    title: 'Kraken Pro',
    href: 'pro.kraken.com',
    description: 'Advanced Trading',
    iconType: '.svg',
    iconName: 'kraken-pro-48x48',
  },
  {
    title: 'Margin Trading',
    href: '/features/margin-trading',
    description: 'Trade with 5x leverage',
    iconType: '.svg',
    iconName: 'margin-trading-48x48',
  },
  {
    title: 'Futures Trading',
    href: '/features/futures',
    description: '100+ multi-collateral contracts',
    iconType: '.svg',
    iconName: 'futures-trading-48x48',
  },
];

const institution_items = [
  {
    title: 'Contact sales',
    href: '/institutions/#contact-us',
    iconType: '.svg',
    iconName: 'chat',
  },
  {
    title: 'API',
    href: '/features/api-trading',
    iconType: '.svg',
    iconName: 'cog',
  },
  {
    title: 'OTC',
    href: '/features/otc-exchange',
    iconType: '.svg',
    iconName: 'star',
  },
  {
    title: 'VIP Services',
    href: '/features/account-management',
    iconType: '.svg',
    iconName: 'avatar',
  },
];

const why_kraken_items = [
  {
    iconType: '.svg',
    iconName: 'lock',
    title: 'Industry-leading security',
    description: 'How we protect your funds',
  },
  {
    iconType: '.svg',
    iconName: 'trend',
    title: 'Deep liquidity and volume',
    description: 'Helping you maximize profits',
  },
  {
    iconType: '.svg',
    iconName: 'approved',
    title: 'Proof of reserves',
    description: 'Our commitment to transparency',
  },
  {
    iconType: '.svg',
    iconName: 'clock',
    title: '24-7 customer service',
    description: 'Get help whenever you need it',
  },
  {
    iconType: '.svg',
    iconName: 'shield',
    title: 'Mission-driven values',
    description: 'How we earn your trust',
  },
  {
    iconType: '.svg',
    iconName: 'console',
    title: 'Flexible funding options',
    description: 'Cash, cards, crypto and more',
  },
];

// const callsToAction = [
//   { name: 'Watch demo', href: '#', icon: PlayCircleIcon },
//   { name: 'Contact sales', href: '#', icon: PhoneIcon },
// ];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-theme-color">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">KRK-Fork</span>
            <img className="h-8 w-auto" src="./assets/images/logo.svg" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="text-white-700 -m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Popover className="relative">
            <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-primary-200">
              Explore
              <ChevronDownIcon
                className="text-white-400 h-5 w-5 flex-none"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 flex w-screen max-w-lg overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                <div className="p-4">
                  {explore_items.map((item) => (
                    <MenuItem key={item.title} item={item} />
                  ))}
                </div>
                {/* <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                  {callsToAction.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
                    >
                      <item.icon
                        className="h-5 w-5 flex-none text-gray-400"
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </div> */}
              </Popover.Panel>
            </Transition>
          </Popover>

          <a
            href="#"
            className="text-sm font-semibold leading-6 text-primary-200"
          >
            Prices
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-primary-200"
          >
            Why Kraken
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-primary-200"
          >
            Learn
          </a>
          <a
            href="#"
            className="text-sm font-semibold leading-6 text-primary-200"
          >
            Support
          </a>
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <RoundedButton text="Sign in" onclick={(f) => f} />
          <RoundedButton text="Sign up" onclick={(f) => f} />
          {/* <a
            href="#"
            className="text-sm font-semibold leading-6 text-primary-200"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a> */}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <span className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-primary-900 hover:bg-gray-50">
                  Explore
                </span>
                {[...explore_items].map((item) => (
                  <a
                    key={item.title}
                    href={item.href}
                    className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.title}
                  </a>
                ))}
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Explore
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...explore_items].map((item) => (
                          <Disclosure.Button
                            key={item.title}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.title}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Prices
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Why Kraken?
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...why_kraken_items].map((item) => (
                          <Disclosure.Button
                            key={item.title}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                          >
                            {item.title}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Learn
                </a>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Support
                </a>
              </div>
              <div className="py-6">
                {/* <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </a> */}
                <RoundedButton
                  onclick={() => console.log('clicked')}
                  text="Login"
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export { Header };
