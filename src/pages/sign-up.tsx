import { useRouter } from 'next/router';

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

const SignUp = () => {
  const router = useRouter();
  const { type = 'personal' } = router.query;
  // console.log({ type });

  let toggleArray: [any, any] = ['business', 'personal'];

  if (type === 'personal') toggleArray = ['personal', 'business'];

  const [category, toggleCategory] = useToggle(toggleArray);
  // console.log(toggleArray);
  // setCategory(type);

  return (
    <div className="sign-up text-[#0e0c28]">
      <div className="sign-upin-back">
        <SignHeader>
          <BareLogo />
          <div className="ml-auto flex items-center gap-1">
            <LangCombo />
            <ARoundedTransparent
              additionalClassName="py-[6px] px-[22px] ml-2 common-sign-upin-button"
              text="Sign in"
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
          <h2 className="sign-upin-h">
            Create your <strong>{category}</strong> account
          </h2>
          <p className={`mt-[30px] ${category === 'personal' ? 'hidden' : ''}`}>
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
              <MelaniInput tagText="Email" inputType="email" />
            </div>
            <div className="flex">
              <MelaniInput tagText="Username" inputType="text" />
              <div className="mr-[20px]"></div>
              <MelaniInput tagText="Password" inputType="password" />
            </div>
            <div className="">
              <SelectWithSearch />
            </div>
          </div>
        </SignContent>
        <CenterSkeleton />
      </div>
    </div>
  );
};

export default SignUp;
