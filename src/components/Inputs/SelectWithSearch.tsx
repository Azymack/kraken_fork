/* eslint-disable import/no-extraneous-dependencies */
import { useEffect, useRef, useState } from 'react';

import { useClickOutside } from '@/hooks/use-click-outside';

import { CountryOrState } from './CountryOrState';

type Data = { id: string; title: string };
type DataList = Data[];

const SelectWithSearch = (props: {
  onValueChanged: Function;
  data: DataList;
  label: string;
  visible: boolean;
  onDropdownVisibleChange?: Function;
}) => {
  const modalRef = useRef(null);

  const [filteredData, setFilteredData] = useState<DataList>([]);
  const [dropdownVisible, setDropdownVisible] = useState<boolean>(false);
  const [selected, setSelected] = useState<Data>({ id: '', title: '' });
  const [filter, setFilter] = useState<string>('');
  const dataRef = useRef<HTMLInputElement>(null);

  useClickOutside({
    ref: modalRef,
    onClickOutside: () => {
      setDropdownVisible(false);
    },
  });

  useEffect(() => {
    if (props.onDropdownVisibleChange)
      props.onDropdownVisibleChange(dropdownVisible);
  }, [dropdownVisible]);

  useEffect(() => {
    if (!props.visible) setDropdownVisible(false);
  }, [props.visible]);

  useEffect(() => {
    setFilter('');
  }, [props.data]);

  useEffect(() => {
    props.onValueChanged(selected);
  }, [selected]);

  useEffect(() => {
    const filtered: { id: string; title: string }[] = props.data.filter(
      (elem) => elem.title.toLowerCase().includes(filter.toLowerCase()),
    );
    setFilteredData(filtered);
  }, [filter, props.data]);

  useEffect(() => {
    if (dropdownVisible && dataRef && dataRef.current) {
      setFilter('');
      dataRef.current.value = '';
      dataRef.current.focus();
    }
  }, [dropdownVisible]);

  return (
    <div ref={modalRef} className={`${props.visible ? '' : 'hidden'}`}>
      <div className="group relative z-0 mb-5 w-full">
        <input type="hidden" name={`hi_${props.label}`} value="DZ" />
        <input
          type="text"
          name={props.label}
          value={selected.title}
          className="peer block w-full cursor-pointer appearance-none border-0 border-b-2 border-gray-300 bg-transparent px-0 py-2.5 text-lg text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder={' '}
          required
          readOnly
          onClick={(e) => {
            e.preventDefault();
            setDropdownVisible(!dropdownVisible);
          }}
        />
        <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500">
          {props.label}
        </label>
        <button
          title="eye"
          className="no-tab-highlight absolute bottom-[12px] right-0 flex"
          onClick={(e) => {
            e.preventDefault();
            setDropdownVisible(!dropdownVisible);
          }}
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
        <div>
          <input
            ref={dataRef}
            type="text"
            className=" w-full rounded-t-sm border p-3 outline-none"
            onChange={(e) => setFilter(e.target.value)}
          />
        </div>
        <div className=" max-h-[300px] overflow-y-auto">
          {filteredData.map((elem: Data) => {
            return (
              <CountryOrState
                key={elem.id}
                id={elem.id}
                title={elem.title}
                onclick={({ id, title }: { id: string; title: string }) => {
                  setSelected({ id, title });
                  setDropdownVisible(false);
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export { SelectWithSearch };
