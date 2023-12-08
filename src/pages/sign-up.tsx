import Link from 'next/link';

import { BareLogo } from '@/components/BareLogo';

const SignUp = () => {
  return (
    <div className=" box-border min-h-[100vh] bg-purple bg-[url(/assets/images/sign-up-bg.svg)]">
      <div className="LayoutWrap_layout__QH_MY">
        <div className="TopBar_topBar__nHIDk">
          <div className="">
            <Link href="/" className="">
              <BareLogo />
            </Link>
          </div>
          <div className="TopBar_rightContent__NpzLC">
            <div className="TopBar_linkFocusLeft__Qyv4d FocusDiv_divFocus__75qGP">
              <div className="pointer border-radius LanguageSelector_languageSelector__WtqNz LanguageSelector_darkBg__UELKn Dropdown_dropdown__xqZhR Dropdown_dirty__PkoqL relative">
                <button
                  data-testid="button-toggle-undefined"
                  className="bg-pure-white pl3/2 pr3/2 h-100 w-100 tl text-N600 caption-2 no-tab-highlight border-1 border-radius Dropdown_button__HuM1Y relative flex items-center"
                  type="button"
                  role="button"
                  aria-label="open menu"
                  aria-haspopup="true"
                  data-toggle="true"
                >
                  <div className="h-100 w-100 flex">
                    <input type="hidden" value="en-us" />
                    <div className="h-100 Dropdown_labelContainer__XqiJW relative flex items-center">
                      <span
                        className="body-2 db w-100 Dropdown_value__6iRjF Dropdown_noLabel__D2Ouq"
                        data-testid="dropdown-value"
                      >
                        <span className="nowrap">U.S. English</span>
                      </span>
                    </div>
                    <div className="flex items-center">
                      <svg
                        width="24"
                        height="24"
                        className="svg-icon"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12 16L7 10L17 10L12 16Z"></path>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
            </div>
            <div
              role="button"
              className="TopBar_linkFocusRight__tJs7O FocusDiv_divFocus__75qGP"
            >
              <Link
                href="/sign-in?"
                className="text-pure-white common_layoutLink__L7t9H"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
        <div className="before:bg-[url(/assets/images/sign-up-bg.svg))] fixed top-0 h-full">
          <div className="KBackground_kBackground__IgN0l"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
