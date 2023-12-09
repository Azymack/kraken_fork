const WideSwitch = (props: { selected?: string; onclick: Function }) => {
  return (
    <div className="wide-switch-container">
      <button
        className={`no-tab-highlight ${
          props.selected === 'personal'
            ? 'wide-switch-selected text-purple'
            : ''
        } relative flex h-full w-full cursor-pointer items-center py-3 text-[16px]`}
        type="button"
      >
        <input
          className="absolute flex h-full w-full cursor-pointer items-center opacity-0"
          type="radio"
          onClick={() => props.onclick('personal')}
          value="personal"
        />
        <label className="tc mv0 w-full">Personal</label>
      </button>
      <button
        className={`segment-controller-selected ${
          props.selected === 'business'
            ? 'wide-switch-selected text-purple'
            : ''
        } relative flex h-full w-full cursor-pointer items-center py-3 text-[16px]`}
        type="button"
      >
        <input
          className="absolute flex h-full w-full cursor-pointer items-center opacity-0"
          type="radio"
          onClick={() => props.onclick('business')}
          value="business"
        />
        <label className="tc mv0 w-full">Business</label>
      </button>
    </div>
  );
};

export { WideSwitch };
