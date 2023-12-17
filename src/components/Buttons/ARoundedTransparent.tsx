type RoundedAProps = {
  text?: string;
  additionalClassName?: string;
  href?: string;
};

const ARoundedTransparent = (props: RoundedAProps) => {
  return (
    <a
      className={`${props.additionalClassName} border-primary hover:text-body-color active:bg-blue-light-3 disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:hover:text-dark-3 inline-flex items-center justify-center rounded-full border px-7 py-3 text-center font-plexsans text-base font-semibold text-primary-200 hover:bg-blur`}
      data-testid="sign-in"
      href={props.href || '#'}
    >
      <span className="flex items-center justify-center">
        <span className="my-px">{props.text || 'NoName'}</span>
      </span>
    </a>
  );
};

export { ARoundedTransparent };
