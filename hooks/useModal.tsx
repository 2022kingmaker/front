import React, { useState } from 'react';

const useModal = (initShow = false) => {
  const [isShowing, setIsShowing] = useState(initShow);

  const toggle = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.closest('.close')) {
      setIsShowing(!isShowing);
      return;
    }
    if (target.closest('.contents')) {
      return;
    }
    setIsShowing(!isShowing);
  };

  const forceUpdate = (bool: boolean) => {
    setIsShowing(bool);
  };

  return { isShowing, toggle, forceUpdate };
};

export default useModal;
