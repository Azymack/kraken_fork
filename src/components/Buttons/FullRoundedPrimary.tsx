type ButtonProps = {
  text?: string;
  href?: string;
  onclick?: Function;
};

const FullRoundedPrimary = (props: ButtonProps) => {
  const { text = 'UnSet', href = '#', onclick = (f: any) => f } = props;

  return (
    <a
      className="text-ds-button-md px-ds-7 py-ds-4 ms-ds-0 me-ds-6 mt-ds-0 mb-ds-0 text-ds-button-primary-high hover:text-ds-button-primary-high-hover bg-ds-button-primary-high hover:bg-ds-button-primary-high-hover active:bg-ds-button-primary-high-active shadow-ds-button-primary-high hover:shadow-ds-button-primary-high-hover active:shadow-ds-button-primary-high-active rounded-ds-round focus:outline-ds-button relative box-border inline-block cursor-pointer whitespace-nowrap border-0 no-underline outline-offset-2 focus-visible:outline focus-visible:outline-2 disabled:pointer-events-none"
      data-testid="sign-up"
      href={href}
      onClick={() => onclick()}
    >
      <span className="flex items-center justify-center">
        <span className="my-px">{text}</span>
      </span>
      <span className="rounded-ds-round border-ds-button-primary-high absolute left-0 top-0 m-0 box-border h-full w-full border border-solid hover:border-0"></span>
    </a>
  );
};

export { FullRoundedPrimary };
