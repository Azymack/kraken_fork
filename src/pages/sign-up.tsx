import Link from 'next/link';
import { useEffect, useState } from 'react';

import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { ARoundedTransparent } from '@/components/Buttons/ARoundedTransparent';
import { MelaniInput } from '@/components/Inputs/MelaniInput';
import { SelectWithSearch } from '@/components/Inputs/SelectWithSearch';
import { BareLogo } from '@/components/SignUpIn/BareLogo';
import { CenterSkeleton } from '@/components/SignUpIn/CenterSkeleton';
import { LangCombo } from '@/components/SignUpIn/LangCombo';
import { SignContent } from '@/components/SignUpIn/SignContent';
import { SignHeader } from '@/components/SignUpIn/SignHeader';
import { WideSwitch } from '@/components/SignUpIn/WideSwitch';
import { useToggle } from '@/hooks/use-toggle';

type Data = {
  id: string;
  title: string;
};

const SignUp = () => {
  const toggleArray: [any, any] = ['personal', 'business'];
  const [category, toggleCategory] = useToggle(toggleArray);
  const [currentCountry, setCurrentCountry] = useState({ id: '', title: '' });
  const [currentState, setCurrentState] = useState({ id: '', title: '' });

  const [countries, setCountries] = useState<Data[]>([]);
  const [states, setStates] = useState<Data[]>([]);
  const [countryLoading, setCountryLoading] = useState<boolean>(true);
  const [stateLoading, setStateLoading] = useState<boolean>(true);

  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [countriesVisible, setCountriesVisible] = useState(false);
  const [statesVisible, setStatesVisible] = useState(false);

  const [agreedOnPolicy, setAgreedOnPolicy] = useState(false);

  useEffect(() => {
    // you can just get the full list of countries from backend due to CORS issue

    setCountries([
      {
        id: 'US',
        title: 'United States',
      },
      {
        id: 'UK',
        title: 'United Kingdom',
      },
      {
        id: 'AU',
        title: 'Australia',
      },
      {
        id: 'IN',
        title: 'India',
      },
      {
        id: 'IR',
        title: 'Ireland',
      },
      {
        id: 'JP',
        title: 'Japan',
      },
      {
        id: 'FR',
        title: 'France',
      },
    ]);

    setCountryLoading(false);
  }, []);

  useEffect(() => {
    // you can just get the full list of states from backend due to CORS issue

    setStates([
      {
        id: 'AR',
        title: 'Arizona',
      },
      {
        id: 'CA',
        title: 'California',
      },
      {
        id: 'GA',
        title: 'Georgia',
      },
      {
        id: 'NC',
        title: 'North Carolina',
      },
    ]);

    setStateLoading(false);
  }, []);

  return (
    <div className="sign-up text-[#0e0c28]">
      <div className="sign-upin-back">
        <SignHeader>
          <BareLogo />
          <div className="ml-auto flex items-center gap-1">
            <LangCombo selectedColor=" text-white " />
            <ARoundedTransparent
              additionalClassName=" sign-in-button-at-sign-up py-[6px] px-[22px] ml-2 common-sign-upin-button"
              text="Sign In"
              href="/sign-in"
            />
          </div>
        </SignHeader>
        <SignContent>
          <WideSwitch
            selected={category}
            onclick={() => {
              toggleCategory();
            }}
          />
          <h2 className="sign-upin-h ">
            Create your <strong>{category}</strong> account
          </h2>
          <p
            className={` font-plexsans text-[#656565] ${
              category === 'personal' ? 'hidden' : ''
            } `}
          >
            Open a business account if you would like to trade for business
            purposes or on behalf of a business entity.{' '}
            <a
              target="_BLANK"
              rel="noopener noreferrer"
              href="https://support.kraken.com/hc/en-us/articles/115004862007-Business-account-with-Pro-limits"
              className=" text-tab-highlight text-purple"
            >
              Learn more
            </a>
          </p>
          <div className="mt-[30px]">
            <div>
              <MelaniInput
                tagText="Email"
                inputType="email"
                onInputChange={(newVal: string) => setEmail(newVal)}
              />
            </div>
            <div className="flex">
              <MelaniInput
                tagText="Username"
                inputType="text"
                onInputChange={(newVal: string) => setUsername(newVal)}
              />
              <div className="mr-[20px]"></div>
              <MelaniInput
                tagText="Password"
                inputType="password"
                onInputChange={(newVal: string) => setPassword(newVal)}
              />
            </div>
            <div className="">
              <SelectWithSearch
                visible={true}
                data={countries}
                label="Country of residence"
                onValueChanged={(curCountry: Data) =>
                  setCurrentCountry(curCountry)
                }
                onDropdownVisibleChange={(dropdownVisible: boolean) => {
                  setCountriesVisible(dropdownVisible);
                }}
              />
              <SelectWithSearch
                visible={
                  currentCountry.title === 'United States' && !countriesVisible
                }
                data={states}
                label="State/Province"
                onValueChanged={(curState: Data) => setCurrentState(curState)}
                onDropdownVisibleChange={(dropdownVisible: boolean) => {
                  setStatesVisible(dropdownVisible);
                }}
              />
              <div
                className={`mb-[15px] mt-[10px] flex flex-row ${
                  !countriesVisible && !statesVisible ? 'block' : 'hidden'
                }`}
              >
                <input
                  className=" pointer no-tab-highlight mr-[10px] w-[16px]"
                  name="agreement"
                  id="agreement"
                  data-testid="checkbox-input-terms-and-service-0"
                  type="checkbox"
                  checked={agreedOnPolicy}
                  onChange={() => setAgreedOnPolicy(!agreedOnPolicy)}
                />
                <p>
                  By continuing I agree to the&nbsp;
                  <Link href="/policy/en" className="font-medium text-purple">
                    Terms of Service
                  </Link>
                  &nbsp;and&nbsp;
                  <Link href="/policy/en" className="font-medium text-purple">
                    Privacy Policy.
                  </Link>
                </p>
              </div>
              <div
                className={`flex flex-row-reverse ${
                  !countriesVisible && !statesVisible ? 'block' : 'hidden'
                }`}
              >
                <ARoundedPurple
                  additionalClassName={`${
                    email === '' ||
                    password === '' ||
                    username === '' ||
                    currentCountry.id === '' ||
                    (currentCountry.id === 'US' && currentState.id === '') ||
                    !agreedOnPolicy
                      ? 'disabled-a'
                      : 'enabled-a'
                  } lg:w-auto w-full "`}
                  text="Create account"
                  onclick={() =>
                    console.log({
                      email,
                      username,
                      password,
                      currentCountry,
                      currentState,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </SignContent>
        <CenterSkeleton />
      </div>
    </div>
  );
};

export default SignUp;
