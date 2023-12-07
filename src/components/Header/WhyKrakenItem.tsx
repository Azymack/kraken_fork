type WhyKrakenItemProps = {
  mode?: string;
  srcPath: string;
  href: string;
  title: string;
  description?: string;
};

const WhyKrakenItem = (props: WhyKrakenItemProps) => {
  return (
    <li
      className={`flex w-[300px] ${
        props.mode === 'mobile' ? 'px-[24px]' : 'px-[4px]'
      } py-[10px]`}
    >
      <a
        href={`${props.href}`}
        className="font-sm contents w-[200px] items-center text-black"
      >
        <span className="mr-[10px] h-[36px] w-[36px]">
          <img
            src={`/assets/images/icons/${props.srcPath}`}
            className="h-[24px] w-[24px]"
            alt={props.title}
            loading="lazy"
          />
        </span>
        <span className="w-[300px]">
          <div>{props.title}</div>
          <div className="text-sm">{props.description}</div>
        </span>
      </a>
    </li>
  );
};

export { WhyKrakenItem };
