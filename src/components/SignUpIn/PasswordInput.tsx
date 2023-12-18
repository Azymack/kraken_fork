import { useState } from 'react';

const PasswordInput = (props: { onInputChange: Function }) => {
  const [value, setValue] = useState('');
  const [visible, setVisible] = useState(false);
  const { onInputChange = (f: any) => f } = props;

  return (
    <div className="group relative z-0 mb-5 w-full">
      <input
        type={visible ? 'text' : 'password'}
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
        htmlFor="Password"
        className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 text-lg text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4 dark:text-gray-400 peer-focus:dark:text-blue-500"
      >
        Password
      </label>
      <button
        title="eye"
        className="no-tab-highlight absolute bottom-0 right-0 flex"
        onClick={() => setVisible(!visible)}
      >
        <div className="text-black">
          {visible ? (
            <svg
              width="24"
              height="24"
              className="svg-icon mb-[3px]"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 3C8.34315 3 7 4.34315 7 6C7 7.65685 8.34315 9 10 9C11.6569 9 13 7.65685 13 6C13 4.34315 11.6569 3 10 3ZM9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6Z"></path>
              <path d="M0 6C0 6 4 0 10 0C16 0 20 6 20 6C20 6 16 12 10 12C4 12 0 6 0 6ZM17.45 6C16.12 4.5 13.39 2 10 2C6.61 2 3.89 4.5 2.55 6C3.88 7.5 6.61 10 10 10C13.39 10 16.12 7.5 17.45 6Z"></path>
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              className="svg-icon mb-[6px]"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M17.0711 0.514648L18.4853 1.92886L2.92893 17.4852L1.51472 16.071L7.2924 10.2933C7.29249 10.2935 7.29232 10.2931 7.2924 10.2933L11.293 6.29198C11.2928 6.2919 11.2931 6.29206 11.293 6.29198L17.0711 0.514648ZM9.30148 8.28424C9.29572 8.28986 9.29003 8.29555 9.28441 8.3013L9.30148 8.28424Z"></path>
              <path d="M8.91264 12.9148C9.26655 12.97 9.62933 12.9999 10 12.9999C13.39 12.9999 16.12 10.4999 17.45 8.99992C16.8805 8.35765 16.0544 7.53204 15.0296 6.79785L16.4612 5.36625C18.6964 7.04448 20 8.99992 20 8.99992C20 8.99992 16 14.9999 10 14.9999C9.0277 14.9999 8.10791 14.8424 7.24916 14.5783L8.91264 12.9148Z"></path>
              <path d="M10 2.99992C10.9719 2.99992 11.8912 3.15734 12.7496 3.42118L11.086 5.08481C10.7325 5.02974 10.3702 4.99992 10 4.99992C6.61 4.99992 3.89 7.48993 2.55 8.99992C3.11931 9.64201 3.94515 10.4673 4.96947 11.2014L3.53789 12.6329C1.30328 10.9549 0 8.99992 0 8.99992C0 8.99992 4 2.99992 10 2.99992Z"></path>
              <path d="M10.1664 6.00436C10.1113 6.00135 10.0558 5.99983 10 5.99983C8.34315 5.99983 7 7.34297 7 8.99983C7 9.05565 7.00152 9.11112 7.00453 9.16619L10.1664 6.00436Z"></path>
              <path d="M9.83216 11.9952C9.88772 11.9983 9.94368 11.9998 10 11.9998C11.6569 11.9998 13 10.6567 13 8.99983C13 8.9435 12.9984 8.88754 12.9954 8.83199L9.83216 11.9952Z"></path>
            </svg>
          )}
        </div>
      </button>
    </div>
  );
};

export { PasswordInput };
