import { useLayoutEffect, useRef } from 'react';

interface UseScrollInit {
  deps?: any[];
}

const useScrollInit = <T extends HTMLElement>(options?: UseScrollInit) => {
  const deps = options ? (options.deps ? options.deps : []) : [];
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, deps.concat([ref.current]));

  return [ref];
};

export default useScrollInit;
