/* eslint-disable import/no-extraneous-dependencies */
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/20/solid';
import { Fragment, useState } from 'react';

const LangCombo = (props: { selectedColor: string }) => {
  const langs = [
    { name: 'U.S.English' },
    { name: 'British English' },
    { name: 'Español' },
    { name: 'Filipino' },
    { name: 'Italiano' },
    { name: 'Português' },
    { name: 'Русский' },
    { name: 'Tiếng Việt' },
    { name: 'Türkçe' },
    { name: 'Українська' },
    { name: '中文' },
    { name: '日本語' },
  ];

  const [selected, setSelected] = useState(langs[0]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="">
          <Listbox.Button
            className={`relative w-full cursor-pointer rounded-lg bg-transparent py-2 pl-3 pr-10 text-left ${props.selectedColor}  focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm`}
          >
            <span className="block truncate">{selected && selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <svg
                width="24"
                height="24"
                className=" fill-current"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 16L7 10L17 10L12 16Z"></path>
              </svg>
              {/* <ChevronUpDownIcon
                className="h-5 w-5 text-purple"
                aria-hidden="true"
              /> */}
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="fixed mt-1 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {langs.map((lang, langId) => (
                <Listbox.Option
                  key={langId}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-amber-100 text-purple' : 'text-gray-900'
                    }`
                  }
                  value={lang}
                >
                  {() => {
                    return (
                      <>
                        <span
                          className={`block truncate ${
                            selected && selected.name === lang.name
                              ? 'font-medium'
                              : 'font-normal'
                          }`}
                        >
                          {lang.name}
                        </span>
                        {selected && selected.name === lang.name ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-purple">
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
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
  );
};

export { LangCombo };
