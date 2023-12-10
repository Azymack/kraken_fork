type InstitutionItemProps = {
  srcPath: string;
  href: string;
  title: string;
  description?: string;
};

const InstitutionItem = (props: InstitutionItemProps) => {
  return (
    <li className="flex px-[4px] py-[10px]">
      <a
        href={`${props.href}`}
        className="font-sm flex w-[200px] items-center text-black"
      >
        <span className="pr-[10px]">
          <img
            src={`/assets/images/icons/${props.srcPath}`}
            alt={props.title}
            loading="lazy"
          />
        </span>
        {props.title}
      </a>
    </li>
  );
};

export { InstitutionItem };
