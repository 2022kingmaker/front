import { useRecoilState } from 'recoil';
import { ITocState, tocState } from '../states/toc';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const useTableOfContents = () => {
  const router = useRouter();
  const [toc, setToc] = useRecoilState<ITocState>(tocState);
  const { currentTopic, targetTopic } = toc;

  useEffect(() => {
    [...document.querySelectorAll('h2.title')]
      .find($elem => $elem.innerHTML === currentTopic)
      ?.scrollIntoView({ behavior: 'smooth' });
  }, [targetTopic]);

  useEffect(() => {
    // router.beforePopState(historyState => {
    //   router.push(historyState.as).then(() => {
    //     const y = localStorage.getItem(historyState.as);
    //   });
    //   return false;
    // });
  }, []);

  return;
};

export default useTableOfContents;
