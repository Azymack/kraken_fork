const TextBigPurple = (props: {
  text?: string;
  additionalClassName?: string;
}) => {
  return (
    <h2
      className={` ${props.additionalClassName} text-center text-[34px] font-medium leading-[54px] text-purple lg:text-[40px]`}
    >
      {props.text}
    </h2>
  );
};

export { TextBigPurple };
