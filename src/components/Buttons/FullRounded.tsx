type RoundedButtonProps = {
  text: string;
  onclick: Function;
};

const FullRounded = (props: RoundedButtonProps) => {
  const { text, onclick } = props;

  return (
    <button
      type="button"
      // className="mb-2 me-2 rounded-full bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      className="border-primary hover:bg-blue-light-5 hover:text-body-color active:bg-blue-light-3 disabled:border-gray-3 disabled:bg-gray-3 disabled:text-dark-5 dark:hover:text-dark-3 font-plexsans inline-flex items-center justify-center rounded-full border px-7 py-3 text-center text-base font-medium text-primary-200"
      onClick={() => onclick()}
    >
      {text}
    </button>
  );
};

export { FullRounded };
