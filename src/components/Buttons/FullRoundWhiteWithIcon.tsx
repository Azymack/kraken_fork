import { SVGApple } from '../SVG/Apple';

const FullRoundedWhiteWithIcon = (props: { href?: string; text?: string }) => {
  return (
    <a
      className="text-ds-button-md px-ds-7 py-ds-4 ms-ds-0 me-ds-0 mt-ds-0 mb-ds-0 text-ds-button-inverted-high hover:text-ds-button-inverted-high-hover bg-ds-button-inverted-high hover:bg-ds-button-inverted-high-hover active:bg-ds-button-inverted-high-active rounded-ds-round focus:outline-ds-button-inverted relative box-border inline-block w-full cursor-pointer whitespace-nowrap border-0 no-underline outline-offset-2 focus-visible:outline focus-visible:outline-2 disabled:pointer-events-none"
      href={props.href ? props.href : '#'}
      rel="noreferrer"
      target="_blank"
    >
      <span className="flex items-center justify-center">
        <SVGApple />
        <span className="my-px">{props.text ? props.text : 'NoLabel'}</span>
      </span>
    </a>
  );
};

export { FullRoundedWhiteWithIcon };
