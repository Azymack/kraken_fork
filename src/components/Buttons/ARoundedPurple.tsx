type RoundedAProps = {
  text?: string;
  additionalClassName?: string;
  href?: string;
};

const ARoundedPurple = (props: RoundedAProps) => {
  return (
    <a
      className={`${props.additionalClassName} border-primary font-plexsans hover:text-body-color active:bg-blue-light-3 disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:hover:text-dark-3 inline-flex items-center justify-center rounded-full border bg-purple px-7 py-3 text-center text-base font-medium text-primary-200 hover:bg-purpleblur`}
      data-testid="sign-in"
      href={props.href || '#'}
    >
      <span className="flex items-center justify-center">
        <span className="my-px">{props.text || 'NoName'}</span>
      </span>
    </a>
  );
};

export { ARoundedPurple };
