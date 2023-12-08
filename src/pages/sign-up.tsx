import Link from 'next/link';

import { BareLogo } from '@/components/BareLogo';

const SignUp = () => {
  return (
    <div className=" box-border min-h-[100vh] bg-purple">
      <div className="sm:p-[1rem] md:p-[2rem] lg:mx-auto lg:flex lg:max-w-[1400px] lg:flex-col lg:overflow-x-hidden">
        <div className="z-1 relative ml-[74px] mr-3 mt-2 flex items-center gap-[0.25rem]">
          <div className="">
            <Link href="/" className="">
              <BareLogo />
            </Link>
          </div>{' '}
        </div>

        <div className="conten">I am content</div>

        <div className=" before:bg-[url(/assets/images/sign-up-bg.svg))] fixed top-0">
          <div className="before:bg-[url(assets/images/sign-up-left-slice.svg) before:bg-contain] relative ml-[74px] h-full w-[700px] bg-white before:absolute before:-left-[73px] before:-top-[3px] before:bottom-0 before:w-[74px]"></div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
