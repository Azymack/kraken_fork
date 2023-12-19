/* eslint-disable import/no-extraneous-dependencies */
import { Dialog, Disclosure } from '@headlessui/react';
import Link from 'next/link';
import { useState } from 'react';

import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { ARoundedTransparent } from '@/components/Buttons/ARoundedTransparent';
import { ARoundedWhite } from '@/components/Buttons/ARoundedWhite';
import { ExploreItem } from '@/components/Header/ExploreItem';
import { InstitutionItem } from '@/components/Header/InstitutionItem';
import { Logo } from '@/components/Header/Logo';
import { WhyKrakenItem } from '@/components/Header/WhyKrakenItem';
import { Hamburger } from '@/components/SVG/Hamburger';
import { Times } from '@/components/SVG/Times';

const exploreItems = [
  {
    title: 'Buy Crypto',
    href: '/sign-up',
    description: 'Start with just $10',
    iconType: '.svg',
    iconName: 'buy-crypto-48x48',
  },
  {
    title: 'Trade NFTs',
    href: 'https://nft.kraken.com',
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
    href: 'https://pro.kraken.com',
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

const institutionItems = [
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

const whyKrakenItems = [
  {
    iconType: '.svg',
    iconName: 'lock',
    href: '/features/security',
    title: 'Industry-leading security',
    description: 'How we protect your funds',
  },
  {
    iconType: '.svg',
    iconName: 'trend',
    href: '/features/liquidity',
    title: 'Deep liquidity and volume',
    description: 'Helping you maximize profits',
  },
  {
    iconType: '.svg',
    iconName: 'approved',
    href: '/prrof-of-reserves',
    title: 'Proof of reserves',
    description: 'Our commitment to transparency',
  },
  {
    iconType: '.svg',
    iconName: 'clock',
    href: '/features/24-7-support',
    title: '24-7 customer service',
    description: 'Get help whenever you need it',
  },
  {
    iconType: '.svg',
    iconName: 'shield',
    href: '/why-kraken',
    title: 'Mission-driven values',
    description: 'How we earn your trust',
  },
  {
    iconType: '.svg',
    iconName: 'console',
    href: '/features/funding-options',
    title: 'Flexible funding options',
    description: 'Cash, cards, crypto and more',
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex justify-between bg-purple px-[40px]">
      <Logo />
      <nav className="flex items-center lg:grow" aria-label="Global">
        {/* hamburger icon at the right top corner on mobile */}
        <div className="flex lg:hidden">
          <button
            title="hamburger"
            type="button"
            className="flex text-white"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Hamburger />
          </button>
        </div>

        {/* menu bar on desktop */}
        <ul className="hidden grow list-none lg:flex">
          <li className="menu-item">
            <Link href="#">Explore</Link>
            <div className="menu-panel absolute z-50 ml-[-60px] ">
              <div className="triangle"></div>
              <div className="rotate-panel mt-[50px] flex bg-white">
                <ul className="m-2 grid w-max grid-cols-2 p-2">
                  {exploreItems.map((item) => (
                    <ExploreItem
                      key={item.title}
                      srcPath={`${item.iconName}${item.iconType}`}
                      title={item.title}
                      href={item.href}
                      description={item.description}
                    />
                  ))}
                </ul>
                <div className="w-[269px] rounded-r-[8px] bg-white px-0 py-[25px]">
                  <div></div>
                  <ul className="mx-[15px]">
                    <div className="mb-[15px] text-purple">
                      <strong>
                        <a href="/institutions">Institutions</a>
                      </strong>
                    </div>
                    {institutionItems.map((item) => (
                      <InstitutionItem
                        key={item.title}
                        href={item.href}
                        srcPath={`${item.iconName}${item.iconType}`}
                        title={item.title}
                      />
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li className="menu-item">
            <Link href="#">Prices</Link>
          </li>
          <li className="menu-item">
            <Link href="#">Why Kraken?</Link>
            <div className="menu-panel absolute z-50 ml-[-60px] ">
              <div className="triangle left-[16.7%]"></div>
              <div className="rotate-panel mt-[50px] flex bg-white">
                <ul className="m-2 grid w-max grid-cols-2 p-2">
                  {whyKrakenItems.map((item) => (
                    <WhyKrakenItem
                      key={item.title}
                      href={item.href}
                      srcPath={`${item.iconName}${item.iconType}`}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </li>
          <li className="menu-item">
            <Link href="#">Learn</Link>
          </li>
          <li className="menu-item">
            <Link href="#">Support</Link>
          </li>
        </ul>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <ARoundedTransparent
            additionalClassName="mr-[10px]"
            text="Sign in"
            href="/sign-in"
          />
          <ARoundedWhite text="Sign up" href="/sign-up" />
        </div>
      </nav>
      {/* Mobile menu */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white p-6 sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <span className="h-8 w-auto">
              <strong>Explore</strong>
            </span>
            <button
              title="sadf"
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Times />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <div className="flex">
                  <ul className=" grid w-max grid-cols-2 ">
                    {[...exploreItems].map((item) => (
                      <ExploreItem
                        mode="mobile"
                        key={item.title}
                        srcPath={`${item.iconName}${item.iconType}`}
                        href={item.href}
                        title={item.title}
                      />
                    ))}
                  </ul>
                </div>

                <div>
                  <ARoundedPurple
                    additionalClassName="mr-[10px]"
                    text="Sign in"
                    href="/sign-in"
                  />
                  <ARoundedWhite
                    additionalClassName="border-purple"
                    text="Sign up"
                    href="/sign-up"
                  />
                </div>
                <div className="pt-[15px]">
                  <div>
                    <strong>
                      <a href="/institutions">Institutions</a>
                    </strong>
                  </div>
                  <ul className=" grid w-max max-w-fit grid-cols-2">
                    {institutionItems.map((item) => (
                      <InstitutionItem
                        key={item.title}
                        href={item.href}
                        srcPath={`${item.iconName}${item.iconType}`}
                        title={item.title}
                      />
                    ))}
                  </ul>
                </div>
                <a
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Prices
                </a>
                <Disclosure as="div" className="-mx-3">
                  {() => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        Why Kraken?
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...whyKrakenItems].map((item) => (
                          <WhyKrakenItem
                            key={item.title}
                            mode="mobile"
                            href={item.href}
                            title={item.title}
                            srcPath={`${item.iconName}${item.iconType}`}
                          />
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
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export { Header };
