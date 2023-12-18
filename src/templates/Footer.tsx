import Link from 'next/link';

import { ARoundedTransparent } from '@/components/Buttons/ARoundedTransparent';
import { ARoundedWhite } from '@/components/Buttons/ARoundedWhite';
import { MelaniWrapper } from '@/layout/MelaniWrapper';

const Footer = () => (
  <footer className="pb-[160px]  text-[14px] leading-[24px] lg:pt-[88px]">
    <div className="box-border w-full px-0 lg:px-[30px] min-[1040px]:px-[calc((100%-980px)/2)]">
      <MelaniWrapper>
        <div className="footer-menus">
          <div className="footer-sign-in w-[240px]">
            <div className="footer-bottom border-0 pb-[15px] pt-[6px]">
              <div className="logo-wrapper">
                <Link className="footer-logo" href="/">
                  Kraken
                </Link>
              </div>
            </div>
            <p className="mb-[26px]  text-[22px] font-medium leading-[32px] text-[#C0B9FF]">
              Take your crypto trading to the next level.
            </p>
            <div className="signin-2">
              <ARoundedWhite
                additionalClassName=" md:w-full lg:w-full mb-[8px]"
                href="sign-up"
                text="Create account"
              />
              <ARoundedTransparent
                additionalClassName="md:w-full lg:w-full"
                href="sign-in"
                text="Sign in"
              />
            </div>
            <ul className="mt-[60px] flex w-[160px] list-none flex-row justify-start">
              <li>
                <a
                  title="Kraken App"
                  href="https://kraken.app.link/consumer-footer"
                  className="app-icon"
                >
                  Kraken App
                </a>
              </li>
              <li>
                <a
                  title="Kraken Pro App"
                  href="https://krakenpro.app.link/pro-footer"
                  className="pro-app-icon"
                >
                  Kraken Pro App
                </a>
              </li>
            </ul>
          </div>
          <ul className="footer-primary">
            <li>
              <span className="footer-span">Features</span>
              <ul>
                <li>
                  <a href="https://nft.kraken.com">NFT Marketplace</a>
                </li>
                <li>
                  <a href="/features/margin-trading">Margin Trading</a>
                </li>
                <li>
                  <a href="/features/futures">Futures Trading</a>
                </li>
                <li>
                  <a href="/features/otc-exchange">OTC Trading</a>
                </li>
                <li>
                  <a href="/institutions">Institutions</a>
                </li>
                <li>
                  <a href="/features/api-trading">API Trading</a>
                </li>
                <li>
                  <a href="/features/staking-coins">Staking Rewards</a>
                </li>
                <li>
                  <a href="/features">All features</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="footer-span">Company</span>
              <ul>
                <li>
                  <a href="/features/security">Kraken Security</a>
                </li>
                <li>
                  <a href="/careers">Kraken Careers</a>
                </li>
                <li>
                  <a href="https://blog.kraken.com">Kraken Blog</a>
                </li>
                <li>
                  <a href="/press">Press Room</a>
                </li>
                <li>
                  <a href="https://support.kraken.com/hc/en-us/articles/360027545252-Kraken-Affiliate-program">
                    Affiliate Program
                  </a>
                </li>
                <li>
                  <a href="/referrals">Refer a Friend</a>
                </li>
                <li>
                  <a href="https://status.kraken.com/">Kraken Status</a>
                </li>
                <li>
                  <a href="https://support.kraken.com/hc/en-us">
                    Support Center
                  </a>
                </li>
              </ul>
            </li>
            <li>
              <span className="footer-span">Browse Prices</span>
              <ul>
                <li>
                  <a href="/prices/bitcoin">Bitcoin Price</a>
                </li>
                <li>
                  <a href="/prices/ethereum">Ethereum Price</a>
                </li>
                <li>
                  <a href="/prices/dogecoin">Dogecoin Price</a>
                </li>
                <li>
                  <a href="/prices/xrp">XRP Price</a>
                </li>
                <li>
                  <a href="/prices/cardano">Cardano Price</a>
                </li>
                <li>
                  <a href="/prices/solana">Solana Price</a>
                </li>
                <li>
                  <a href="/prices/litecoin">Litecoin Price</a>
                </li>
                <li>
                  <a href="/prices">All crypto prices</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="footer-span">Popular Markets</span>
              <ul>
                <li>
                  <a href="/convert/btc/usd">BTC to USD</a>
                </li>
                <li>
                  <a href="/convert/eth/usd">ETH to USD</a>
                </li>
                <li>
                  <a href="/convert/doge/usd">DOGE to USD</a>
                </li>
                <li>
                  <a href="/convert/xrp/usd">XRP to USD</a>
                </li>
                <li>
                  <a href="/convert/ada/usd">ADA to USD</a>
                </li>
                <li>
                  <a href="/convert/sol/usd">SOL to USD</a>
                </li>
                <li>
                  <a href="/convert/ltc/usd">LTC to USD</a>
                </li>
                <li>
                  <a href="/convert">All crypto markets</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="footer-span">Buying Guides</span>
              <ul>
                <li>
                  <a href="/learn/buy-bitcoin-btc">Buy Bitcoin</a>
                </li>
                <li>
                  <a href="/learn/buy-ethereum-eth">Buy Ethereum</a>
                </li>
                <li>
                  <a href="/learn/buy-dogecoin-doge">Buy Dogecoin</a>
                </li>
                <li>
                  <a href="/learn/buy-ripple-xrp">Buy XRP</a>
                </li>
                <li>
                  <a href="/learn/buy-cardano-ada">Buy Cardano</a>
                </li>
                <li>
                  <a href="/learn/buy-solana-sol">Buy Solana</a>
                </li>
                <li>
                  <a href="/learn/buy-litecoin-ltc">Buy Litecoin</a>
                </li>
                <li>
                  <a href="/learn/crypto-guides">All crypto guides</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="footer-span">Crypto Education</span>
              <ul>
                <li>
                  <a href="/learn/what-is-cryptocurrency">
                    What is cryptocurrency?
                  </a>
                </li>
                <li>
                  <a href="/learn/types-of-cryptocurrency">
                    Types of cryptocurrency
                  </a>
                </li>
                <li>
                  <a href="/learn/what-is-blockchain-technology">
                    What is a blockchain?
                  </a>
                </li>
                <li>
                  <a href="/learn/what-is-bitcoin-btc">What is Bitcoin?</a>
                </li>
                <li>
                  <a href="/learn/what-is-ethereum-eth">What is Ethereum?</a>
                </li>
                <li>
                  <a href="/learn/what-are-non-fungible-tokens-nft">
                    What is an NFT?
                  </a>
                </li>
                <li>
                  <a href="/learn/what-is-decentralized-autonomous-organization-dao">
                    What is a DAO?
                  </a>
                </li>
                <li>
                  <a href="/learn">Learn crypto</a>
                </li>
              </ul>
            </li>
            <li>
              <span className="footer-span">Community</span>
              <ul className=" max-w-[160px]">
                <li className="mr-[8px] inline-block leading-[22px]">
                  <Link
                    rel="noreferrer"
                    aria-label="Instagram"
                    target="_blank"
                    href="https://www.instagram.com/krakenfx/"
                  >
                    <div className="relative flex h-[28px] w-[28px] items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        data-icon="instagram"
                        data-prefix="fab"
                        width="22"
                        height="16"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="mr-[8px] inline-block leading-[22px]">
                  <Link
                    rel="noreferrer"
                    aria-label="Facebook"
                    target="_blank"
                    href="https://www.facebook.com/KrakenFX/"
                  >
                    <div className="relative flex h-[28px] w-[28px] items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        data-icon="facebook-f"
                        data-prefix="fab"
                        width="22"
                        height="16"
                        viewBox="0 0 320 512"
                      >
                        <path
                          fill="currentColor"
                          d="m279.14 288 14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="mr-[8px] inline-block leading-[22px]">
                  <Link
                    rel="noreferrer"
                    aria-label="LinkedIn"
                    target="_blank"
                    href="https://www.linkedin.com/company/krakenfx/"
                  >
                    <div className="relative flex h-[28px] w-[28px] items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        data-icon="linkedin-in"
                        data-prefix="fab"
                        width="22"
                        height="16"
                        viewBox="0 0 448 512"
                      >
                        <path
                          fill="currentColor"
                          d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="mr-[8px] inline-block leading-[22px]">
                  <Link
                    rel="noreferrer"
                    aria-label="Twitter"
                    target="_blank"
                    href="https://twitter.com/krakenfx"
                  >
                    <div className="relative flex h-[28px] w-[28px] items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                        data-icon="twitter"
                        data-prefix="fab"
                        width="22"
                        height="16"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="mr-[8px] inline-block leading-[22px]">
                  <Link
                    rel="noreferrer"
                    aria-label="YouTube"
                    target="_blank"
                    href="https://www.youtube.com/c/KrakenBitcoinExchange"
                  >
                    <div className="relative flex h-[28px] w-[28px] items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="16"
                        fill="none"
                      >
                        <path
                          fill="#fff"
                          d="M17.624 2.668a2.254 2.254 0 0 0-1.592-1.592C14.628.7 9 .7 9 .7s-5.628 0-7.032.376A2.258 2.258 0 0 0 .376 2.668C0 4.072 0 7 0 7s0 2.928.376 4.332a2.254 2.254 0 0 0 1.592 1.592C3.372 13.3 9 13.3 9 13.3s5.628 0 7.032-.376a2.258 2.258 0 0 0 1.592-1.592C18 9.928 18 7 18 7s0-2.928-.376-4.332ZM7.2 9.7V4.3L11.876 7 7.2 9.7Z"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="mr-[8px] inline-block leading-[22px]">
                  <Link
                    rel="noreferrer"
                    aria-label="TikTok"
                    target="_blank"
                    href="https://www.tiktok.com/@krakenfx"
                  >
                    <div className="relative flex h-[28px] w-[28px] items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="18"
                        fill="none"
                      >
                        <path
                          fill="#fff"
                          d="M15.83 4.383c0-.081-.002-.085-.087-.083-.204 0-.407-.023-.608-.054-.73-.11-3.103-1.354-3.504-3.388-.008-.04-.098-.545-.098-.76 0-.095 0-.097-.095-.097H8.588c-.186 0-.161-.023-.161.163v12.071c0 .151-.004.3-.031.447-.14.778-.538 1.389-1.213 1.805-.584.36-1.22.464-1.894.33-.213-.042-.412-.123-.61-.202a.992.992 0 0 1-.048-.043c-.066-.056-.14-.104-.213-.153-.86-.594-1.267-1.42-1.143-2.453.127-1.047.729-1.76 1.722-2.126.296-.11.609-.155.925-.136.205.01.408.037.605.093.068.019.105-.004.11-.077v-.076c0-.723-.027-2.3-.031-2.304 0-.207 0-.416.006-.623 0-.06-.03-.07-.079-.076a5.848 5.848 0 0 0-2.64.296 5.646 5.646 0 0 0-2.06 1.295 5.608 5.608 0 0 0-1.2 1.724 5.596 5.596 0 0 0-.475 2.838 5.655 5.655 0 0 0 2.167 3.97c.093.074.184.155.296.202l.141.125c.149.111.308.209.476.29 1.03.509 2.117.716 3.262.577 1.486-.182 2.724-.84 3.697-1.975.916-1.068 1.361-2.32 1.37-3.721.012-2.004.002-4.007.004-6.013 0-.047-.027-.115.025-.14.041-.019.082.035.122.062.745.49 1.55.844 2.421 1.043a6.888 6.888 0 0 0 1.54.186c.164 0 .187-.008.187-.172 0-.712-.038-2.657-.036-2.845Z"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="mr-[8px] inline-block leading-[22px]">
                  <Link
                    rel="noreferrer"
                    aria-label="Reddit"
                    target="_blank"
                    href="https://www.reddit.com/r/Kraken/"
                  >
                    <div className="relative flex h-[28px] w-[28px] items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="18"
                        fill="none"
                      >
                        <path
                          fill="#fff"
                          d="M17.996 9.14a1.968 1.968 0 0 0-3.335-1.416c-1.346-.973-3.2-1.599-5.267-1.67l.896-4.222 2.93.623c.037.744.647 1.34 1.401 1.34s1.407-.63 1.407-1.407a1.405 1.405 0 0 0-2.663-.622l-3.273-.696a.35.35 0 0 0-.416.272l-1.002 4.71c-2.097.057-3.981.685-5.343 1.668a1.968 1.968 0 1 0-2.166 3.217c-.03.195-.047.394-.047.596 0 3.028 3.527 5.485 7.878 5.485s7.878-2.457 7.878-5.486c0-.2-.016-.398-.046-.592A1.969 1.969 0 0 0 18 9.14h-.004ZM4.495 10.546c0-.776.632-1.406 1.406-1.406a1.407 1.407 0 1 1-1.406 1.406Zm7.844 3.717c-.96.958-2.799 1.032-3.341 1.032-.542 0-2.38-.074-3.339-1.034a.366.366 0 0 1 .516-.516c.605.604 1.9.82 2.825.82.924 0 2.219-.214 2.825-.82a.366.366 0 0 1 .516.516l-.002.002Zm-.248-2.31a1.407 1.407 0 1 1 0-2.814 1.407 1.407 0 0 1 0 2.814Z"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </li>
                <li className="mr-[8px] inline-block leading-[22px]">
                  <Link
                    rel="noreferrer"
                    aria-label="Telegram"
                    target="_blank"
                    href="https://t.me/kraken_exchange_official"
                  >
                    <div className="relative flex h-[28px] w-[28px] items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="18"
                        height="16"
                        fill="none"
                      >
                        <path
                          fill="#fff"
                          d="M17.965.894c-.065-.188-.142-.24-.262-.286-.263-.1-.708.05-.708.05S1.22 6.33.32 6.957c-.195.135-.26.212-.29.305-.155.447.33.645.33.645l4.065 1.325s.153.022.205-.013c.925-.585 9.306-5.875 9.789-6.053.077-.022.132.003.117.055-.192.68-7.47 7.149-7.47 7.149s-.028.035-.046.075l-.01-.005-.38 4.033s-.16 1.235 1.078 0c.872-.873 1.715-1.6 2.138-1.956 1.397.965 2.902 2.033 3.55 2.59.325.28.6.326.823.318.615-.022.787-.7.787-.7s2.876-11.569 2.97-13.119c.01-.152.023-.247.023-.352 0-.145-.012-.29-.035-.36Z"
                        ></path>
                      </svg>
                    </div>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>

        <div className="footer-bottom">
          <div className="copyright-notice">
            <p>© 2011 - 2023 Payward, Inc.</p>
            <ul className="legal-links">
              <li data-testid="privacy-link-legal-privacy">
                <a href="/legal/privacy">Privacy Notice</a>
              </li>
              <li data-testid="privacy-link-legal">
                <a href="/legal">Terms of Service</a>
              </li>
              <li data-testid="privacy-link-legal-cookies">
                <a href="/legal/cookies">Cookies Policy</a>
              </li>
              <li data-testid="privacy-link-legal-disclosures">
                <a href="/legal/disclosures">Disclosures</a>
              </li>
            </ul>
          </div>
          <div className="language-switcher-wrap">
            <div className="current-language">Language</div>
            <div className="switcher-menu">
              <select title="aaa" id="dsf" defaultValue={'en-us'}>
                <option data-testid="optlang-en-us" value="en-us">
                  U.S. English
                </option>
                <option data-testid="optlang-en-gb" value="en-gb">
                  British English
                </option>
                <option data-testid="optlang-es-es" value="es-es">
                  Español
                </option>
                <option data-testid="optlang-fil-ph" value="fil-ph">
                  Filipino
                </option>
                <option data-testid="optlang-fr" value="fr">
                  Français
                </option>
                <option data-testid="optlang-it-it" value="it-it">
                  Italiano
                </option>
                <option data-testid="optlang-pt-br" value="pt-br">
                  Português
                </option>
                <option data-testid="optlang-ru-ru" value="ru-ru">
                  Русский
                </option>
                <option data-testid="optlang-vi-vn" value="vi-vn">
                  Tiếng Việt
                </option>
                <option data-testid="optlang-tr-tr" value="tr-tr">
                  Türkçe
                </option>
                <option data-testid="optlang-uk-ua" value="uk-ua">
                  Українська
                </option>
                <option data-testid="optlang-zh-cn" value="zh-cn">
                  中文
                </option>
                <option data-testid="optlang-ja-jp" value="ja-jp">
                  日本語
                </option>
              </select>
            </div>
          </div>
        </div>
        <div className="footer-disclaimer">
          <p>
            <em>
              These materials are for general information purposes only and are
              not investment advice or a recommendation or solicitation to buy,
              sell, stake or hold any cryptoasset or to engage in any specific
              trading strategy. Kraken does not and will not work to increase or
              decrease the price of any particular cryptoasset it makes
              available. Some crypto products and markets are unregulated, and
              you may not be protected by government compensation and/or
              regulatory protection schemes. The unpredictable nature of the
              crypto-asset markets can lead to loss of funds. Tax may be payable
              on any return and/or on any increase in the value of your
              cryptoassets and you should seek independent advice on your
              taxation position. Geographic restrictions may apply.
            </em>
          </p>
        </div>
      </MelaniWrapper>
    </div>
  </footer>
);

export { Footer };
