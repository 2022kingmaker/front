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
    const topic = decodeURI(router.asPath).replace('/#', '');
    setToc({ currentTopic: topic, targetTopic: topic });
  }, []);

  return;
};

export default useTableOfContents;
