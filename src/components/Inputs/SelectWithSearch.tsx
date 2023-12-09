import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';

const SelectWithSearch = () => {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const countryList = [
    {
      id: 'NZ',
      name: 'Angola',
    },
    {
      id: 'AU',
      name: 'Australia',
    },
  ];

  const [selected, setSelected] = useState(countryList[0]);
  // useEffect(() => {

  // }, [countryList]);

  return (
    <div>
      <div className="group relative z-0 mb-5 w-full">
        <input type="hidden" name="country" value="DZ" />
        <input
          type="text"
          name="country"
          className="peer block w-full cursor-pointer appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder={' '}
          required
          readOnly
          onClick={(e) => {
            e.preventDefault();
            setDropdownVisible(!dropdownVisible);
          }}
          // onChange={(e) => {
          //   setValue(e.target.value);
          //   onInputChange(e.target.value);
          // }}
          // value={value}
        />
        <label
          htmlFor="country"
          className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
        >
          Country of residence
        </label>
        <button
          title="eye"
          className="no-tab-highlight absolute bottom-[12px] right-0 flex"
          // onClick={() => setVisible(!visible)}
        >
          <div className="text-purple">
            <svg
              width="24"
              height="24"
              className="svg-icon"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.001 15.8453L6.33199 10.7433L7.66992 9.25668L12.001 13.1546L16.332 9.25668L17.6699 10.7433L12.001 15.8453Z"
                fill="#5841D8"
              ></path>
            </svg>
          </div>
        </button>
      </div>
      <div className={`dropdown ${dropdownVisible ? '' : 'hidden'}`}>
        <Listbox value={selected} onChange={setSelected}>
          <div className="">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">
                {selected && selected.name}
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronUpDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="fixed mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
                {countryList.map(({ id, name }) => (
                  <Listbox.Option
                    key={id}
                    className={({ active }) =>
                      `relative cursor-default select-none py-2 pl-10 pr-4 ${
                        active ? 'bg-amber-100 text-purple' : 'text-gray-900'
                      }`
                    }
                    value={name}
                  >
                    {() => {
                      return (
                        <>
                          <span
                            className={`block truncate ${
                              selected && selected.name === name
                                ? 'font-medium'
                                : 'font-normal'
                            }`}
                          >
                            {name}
                          </span>
                          {selected && selected.name === name ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple">
                              <CheckIcon
                                className="h-5 w-5"
                                aria-hidden="true"
                              />
                            </span>
                          ) : null}
                        </>
                      );
                    }}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};

export { SelectWithSearch };
