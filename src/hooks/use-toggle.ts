import { useState } from 'react';

const useToggle = ([state_1, state_2]: [any, any]) => {
  const [toggleState, setToggleState] = useState(state_1);

  const toggle = () => {
    setToggleState((prevState: any) =>
      prevState === state_1 ? state_2 : state_1,
    );
  };

  return [toggleState, toggle];
};

export { useToggle };
