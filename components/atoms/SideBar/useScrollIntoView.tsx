import { MutableRefObject, useEffect, useRef } from 'react';

interface IElementMap {
  [propsName: string]: Element;
}
type TUseScrollIntoView = (activeTopic: string) => MutableRefObject<IElementMap>;

const useScrollIntoView: TUseScrollIntoView = activeTopic => {
  const titleRef = useRef<IElementMap>({});

  useEffect(() => {
    if (Object.keys(titleRef.current).length === 0 && titleRef.current.constructor === Object) {
      const elemList = [...document.querySelectorAll('h2')];

      titleRef.current = elemList.reduce((map, $elem) => {
        map[$elem.innerHTML] = $elem;
        return map;
      }, titleRef.current);
    }
  }, []);

  return titleRef;
};

export default useScrollIntoView;
