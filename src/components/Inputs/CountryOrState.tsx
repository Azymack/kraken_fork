const CountryOrState = (props: {
  id: string;
  title: string;
  onclick: Function;
}) => {
  const { id, title, onclick } = props;
  return (
    <div
      className="selection-at-sign-up"
      onClick={() => onclick({ id, title })}
      key={id}
    >
      {title}
    </div>
  );
};

export { CountryOrState };
