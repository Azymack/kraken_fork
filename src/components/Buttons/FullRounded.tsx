type RoundedButtonProps = {
  text: string;
  onclick: Function;
};

const FullRounded = (props: RoundedButtonProps) => {
  const { text, onclick } = props;

  return (
    <button
      type="button"
      className="border-primary hover:bg-blue-light-5 hover:text-body-color active:bg-blue-light-3 disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:hover:text-dark-3 inline-flex items-center justify-center rounded-full border px-7 py-3 text-center font-plexsans text-base font-medium text-primary-200"
      onClick={() => onclick()}
    >
      {text}
    </button>
  );
};

export { FullRounded };
