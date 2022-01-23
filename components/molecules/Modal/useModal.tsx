import React, { useState } from 'react';

const $BODY = (typeof window !== 'undefined' && document.body) as Element;

const useModal = (initShow = false) => {
  const [isShowing, setIsShowing] = useState(initShow);

  const toggle = (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement>) => {
    const target = e.target as HTMLDivElement;

    if (target.closest('.close')) {
      setIsShowing(!isShowing);
      $BODY.classList.remove('modal-on');
      return;
    }
    if (target.closest('.contents')) {
      return;
    }
    setIsShowing(!isShowing);
    $BODY.classList.remove('modal-on');
  };

  return { isShowing, toggle };
};

export default useModal;
