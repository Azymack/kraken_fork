type ExploreItemProps = {
  mode?: string;
  srcPath: string;
  href?: string;
  title: string;
  description?: string;
};

const ExploreItem = (props: ExploreItemProps) => {
  return (
    <li>
      <a
        className={`my-[6px] flex w-[280px] items-center  px-[12px] py-[5px] ${
          props.mode === 'mobile' ? '' : 'border-b-[1px]'
        }`}
        href={`${props.href}`}
      >
        <span className="mr-[8px]">
          <img
            src={`/assets/images/icons/${props.srcPath}`}
            className={` ${props.mode === 'mobile' ? 'h-[24px] w-[24px]' : ''}`}
            alt={props.title}
            loading="lazy"
          />
        </span>
        <span className="flex flex-col">
          <span className="text-base font-medium leading-[19px] text-black">
            {props.title}
          </span>
          {props.mode === 'mobile' ? (
            ''
          ) : (
            <span className=" text-sm font-light text-gray-600">
              {props.description}
            </span>
          )}
        </span>
      </a>
    </li>
  );
};

export { ExploreItem };
