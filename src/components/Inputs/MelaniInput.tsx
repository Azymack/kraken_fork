import { useState } from 'react';

type MelaniInputProps = {
  inputType?: string;
  placeholder?: string;
  tagText?: string;
  onInputChange?: Function;
};

const MelaniInput = (props: MelaniInputProps) => {
  const [value, setValue] = useState('');
  const {
    inputType = 'text',
    tagText = 'Input here',
    onInputChange = (f: any) => f,
  } = props;
  return (
    <div className="group relative z-0 mb-5 w-full">
      <input
        type={inputType}
        name={tagText}
        id={tagText}
        className="peer block w-full appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
        placeholder={' '}
        required
        onChange={(e) => {
          setValue(e.target.value);
          onInputChange(e.target.value);
        }}
        value={value}
      />
      <label
        htmlFor={tagText}
        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
      >
        {tagText}
      </label>
    </div>
  );
};

export { MelaniInput };
