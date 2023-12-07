const TextBigPurple = (props: {
  text?: string;
  additionalClassName?: string;
}) => {
  return (
    <h2
      className={` ${props.additionalClassName} text-center text-[40px] font-medium leading-[54px] text-purple`}
    >
      {props.text}
    </h2>
  );
};

export { TextBigPurple };
