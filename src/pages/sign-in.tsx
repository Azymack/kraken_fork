import Link from 'next/link';
import { useState } from 'react';

import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { ARoundedTransparentAtSignIn } from '@/components/Buttons/ARoundedTransparentAtSignIn';
import { MelaniInput } from '@/components/Inputs/MelaniInput';
import { BareLogo } from '@/components/SignUpIn/BareLogo';
import { CenterSkeleton } from '@/components/SignUpIn/CenterSkeleton';
import { LangCombo } from '@/components/SignUpIn/LangCombo';
import { PasswordInput } from '@/components/SignUpIn/PasswordInput';
import { SignContent } from '@/components/SignUpIn/SignContent';
import { SignHeader } from '@/components/SignUpIn/SignHeader';
import { InfoImg } from '@/components/SVG/InfoImg';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="sign-in text-[#0e0c28]">
      <div className="sign-upin-back">
        <SignHeader>
          <BareLogo />
          <div className="ml-auto flex items-center gap-1 border-purple">
            <LangCombo selectedColor=" text-purple " />
            <ARoundedTransparentAtSignIn
              additionalClassName=" sign-in-button text-purple border-purple py-[6px] px-[22px] ml-2 common-sign-upin-button"
              text="Create account"
              href="/sign-up"
            />
          </div>
        </SignHeader>
        <SignContent>
          <h1 className=" sign-content-h1 mb-8 font-thin">Sign in to Kraken</h1>
          <div className=" mb-4 flex flex-row items-center gap-1 bg-[#f7f6fd] p-4">
            <svg
              width="24"
              height="24"
              className="svg-icon m-2 text-purple"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.0008 2C14.8857 2 17.222 4.31 17.222 7.17L20.757 14.18C21.5291 15.7 20.4117 17.5 18.6848 17.5H5.32693C3.60005 17.5 2.48267 15.71 3.25468 14.18L6.78969 7.17C6.78969 4.31 9.12605 2 12.0008 2Z"></path>
              <path d="M12 22C10.34 22 9 20.66 9 19H15C15 20.66 13.66 22 12 22Z"></path>
            </svg>
            <div>
              <h2 className=" font-plexsans font-semibold ">
                <span>You can now sign in with your email address!</span>
              </h2>
            </div>
          </div>
          <div>
            <MelaniInput
              tagText="Email or username"
              inputType="email"
              onInputChange={(newValue: string) => setEmail(newValue)}
            />
            <PasswordInput
              onInputChange={(newValue: string) => setPassword(newValue)}
            />
          </div>
          <div className="mt2 flex items-center justify-between">
            <Link href="/self-help">
              <div className="inline-flex items-center text-purple">
                <span
                  data-lang-key="general:Help"
                  className="caption-2 flex items-center"
                >
                  <span className=" mr-[4px] font-plexsans font-semibold">
                    Help
                  </span>
                  <div className="rounded-info">
                    <InfoImg />
                  </div>
                </span>
              </div>
            </Link>
            <ARoundedPurple
              text="Sign in"
              additionalClassName={`${
                email === '' || password === '' ? 'disabled-a' : 'enabled-a'
              } py-[8px] min-w-[180px] "`}
              href="#"
            />
          </div>
        </SignContent>
        <CenterSkeleton />
      </div>
    </div>
  );
};

export default SignIn;
