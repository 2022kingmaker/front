import styled from 'styled-components';
import { Avatar, TalkBubble } from '@atoms/index';
import { flexBox } from '@styles/mixin';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useGetInfiniteTalks } from '@hooks/index';
import useScrollInit from '@organisms/TalkListContainer/useScrollInit';

const TalkListContainerBlock = styled.ul`
  width: 100%;
  height: 100%;

  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const TalkContainer = styled.li`
  ${flexBox('center', 'flex-start')};

  margin: 20px 0 25px 0;
`;
const UserTab = styled.section`
  ${flexBox('center', 'center', 'column')};
  margin-right: 5px;
  width: auto;
`;

const Writer = styled.div`
  margin-top: 5px;
  color: #333;
  font-size: 12px;
  line-height: 1.3;
  word-break: break-word;
  text-align: center;
`;
interface TalkListContainer {
  scrollDown: boolean;
  agoraId: string;
}

const TalkListContainer = ({ scrollDown, agoraId }: TalkListContainer) => {
  const [lastRef, inView] = useInView({ rootMargin: '200px 0px 0px 0px' });
  const { pages, isLoading, fetchNextPage } = useGetInfiniteTalks(+agoraId);
  const [scrollRef] = useScrollInit<HTMLUListElement>({ deps: [pages ? pages[0].lastIndex : undefined, scrollDown] });

  useEffect(() => {
    if (inView && pages && pages[pages.length - 1].hasNext) {
      fetchNextPage();
    }
    return () => {};
  }, [inView]);

  if (isLoading) {
    return <>loading...</>;
  }

  const combinedPage = pages!
    .map(page => page.talks)
    .flatMap(page => page)
    .reverse();

  return (
    <TalkListContainerBlock ref={scrollRef}>
      {combinedPage.length ? (
        combinedPage.map(({ talkId, colorCode, createdAt, text, writer, reported }, index) => (
          <TalkContainer key={talkId} ref={index === 0 ? lastRef : null}>
            {!reported ? (
              <UserTab>
                <Avatar size={35} writer={writer} backgroundColor={colorCode} />
                <Writer key={createdAt.toString()}>{makeNewLine(writer!)}</Writer>
              </UserTab>
            ) : (
              <UserTab>
                <Avatar size={35} writer={''} backgroundColor={'none'} />
                <Writer>{makeNewLine('')}</Writer>
              </UserTab>
            )}
            <TalkBubble color={colorCode!} removed={reported} createdAt={createdAt}>
              {React.Children.toArray(text.split('\\n').map((p, index) => <p key={p + index}>{p}</p>))}
            </TalkBubble>
          </TalkContainer>
        ))
      ) : (
        <>글작성해라</>
      )}
    </TalkListContainerBlock>
  );
};

export default TalkListContainer;

const makeNewLine = (nickname: string) =>
  React.Children.toArray(
    nickname.split(' ').map(word => (
      <>
        <span>{word}</span>
        <br />
      </>
    )),
  );
