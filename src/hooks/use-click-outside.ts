import { useEffect } from 'react';

type UseClickOutsidePropType = {
  ref: any;
  onClickOutside: Function;
};

const useClickOutside = (props: UseClickOutsidePropType) => {
  const { ref, onClickOutside } = props;

  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside();
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
};

export { useClickOutside };
