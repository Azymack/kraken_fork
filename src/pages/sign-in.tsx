import Link from 'next/link';
import { useState } from 'react';

import { ARoundedPurple } from '@/components/Buttons/ARoundedPurple';
import { ARoundedTransparent } from '@/components/Buttons/ARoundedTransparent';
import { MelaniInput } from '@/components/Inputs/MelaniInput';
import { BareLogo } from '@/components/SignUpIn/BareLogo';
import { CenterSkeleton } from '@/components/SignUpIn/CenterSkeleton';
import { LangCombo } from '@/components/SignUpIn/LangCombo';
import { PasswordInput } from '@/components/SignUpIn/PasswordInput';
import { SignContent } from '@/components/SignUpIn/SignContent';
import { SignHeader } from '@/components/SignUpIn/SignHeader';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div className="sign-in text-[#0e0c28]">
      <div className="sign-upin-back">
        <SignHeader>
          <BareLogo />
          <div className="ml-auto flex items-center gap-1 border-purple">
            <LangCombo />
            <ARoundedTransparent
              additionalClassName="text-purple border-purple py-[6px] px-[22px] ml-2 common-sign-upin-button"
              text="Create account"
              href="/sign-up"
            />
          </div>
        </SignHeader>
        <SignContent>
          <h1 className="sign-content-h1 mb-8">Sign in to Kraken</h1>
          <div className="mb-10 flex flex-row items-center gap-1 bg-[#f7f6fd] p-4">
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
              <h2 className=" font-sans ">
                <span>You can now sign in with your email address!</span>
              </h2>
            </div>
          </div>
          <div>
            <MelaniInput
              tagText="Email"
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
                  <span className="mr-[4px]">Help</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    version="1.1"
                    id="Capa_1"
                    width="16px"
                    height="16px"
                    viewBox="0 0 32 32"
                  >
                    <g>
                      <path d="M17.962,24.725l1.806,0.096v2.531h-7.534v-2.406l1.045-0.094c0.568-0.063,0.916-0.254,0.916-1.014v-8.801   c0-0.699-0.188-0.92-0.791-0.92l-1.106-0.062v-2.626h5.666L17.962,24.725L17.962,24.725z M15.747,4.648   c1.394,0,2.405,1.047,2.405,2.374c0,1.331-1.014,2.313-2.438,2.313c-1.454,0-2.404-0.982-2.404-2.313   C13.31,5.695,14.26,4.648,15.747,4.648z M16,32C7.178,32,0,24.822,0,16S7.178,0,16,0c8.82,0,16,7.178,16,16S24.82,32,16,32z M16,3   C8.832,3,3,8.832,3,16s5.832,13,13,13s13-5.832,13-13S23.168,3,16,3z" />
                    </g>
                  </svg>
                </span>
              </div>
            </Link>
            <ARoundedPurple
              text="Sign in"
              onclick={() => console.log({ email, password })}
              additionalClassName=""
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
