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

  return { isShowing, toggle };
};

export default useModal;
