import React, { useEffect, useRef } from 'react';

interface IElementMap {
  [propsName: string]: IntersectionObserverEntry;
}

const useIntersectionObserver = (setActiveTopic: React.Dispatch<React.SetStateAction<string>>) => {
  const headingElementsRef = useRef<IElementMap>({});

  useEffect(() => {
    const callback: IntersectionObserverCallback = entries => {
      headingElementsRef.current = entries.reduce((map, topicContainerObserverEntry) => {
        map[topicContainerObserverEntry.target.innerHTML] = topicContainerObserverEntry;
        return map;
      }, headingElementsRef.current);

      const visibleTopics: HTMLElement[] = [];
      Object.values(headingElementsRef.current).forEach(topicContainerObserverEntry => {
        if (topicContainerObserverEntry.isIntersecting) {
          visibleTopics.push(topicContainerObserverEntry.target as HTMLElement);
        }
      });

      const topic = visibleTopics.sort((a, b) => Number(a.dataset.index) - Number(b.dataset.index))[0].dataset
        .title as string;

      setActiveTopic(topic);
    };

    const observer = new IntersectionObserver(callback, {
      rootMargin: '-150px 0px -40% 0px',
    });

    [...document.querySelectorAll('.topic-container')].forEach($topicContainer => observer.observe($topicContainer));

    return () => observer.disconnect();
  }, []);
};

export default useIntersectionObserver;
