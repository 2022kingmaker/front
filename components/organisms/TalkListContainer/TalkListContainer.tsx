import styled from 'styled-components';
import { Avatar, TalkBubble } from '@atoms/index';
import { flexBox } from '@styles/mixin';
import React, { useEffect, useRef } from 'react';
import { ITalk } from '@models/Agora';

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

  margin: 20px 0;
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
  talks: ITalk[];
}

const TalkListContainer = ({ talks }: TalkListContainer) => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, []);

  return (
    <TalkListContainerBlock ref={ref}>
      {React.Children.toArray(
        talks.map(({ talkId, colorCode, createdAt, text, writer, reported }) => (
          <TalkContainer>
            <UserTab>
              <Avatar size={35} writer={writer} backgroundColor={colorCode} />
              <Writer>{makeNewLine(writer)}</Writer>
            </UserTab>
            <TalkBubble color={colorCode} removed={reported} createdAt={createdAt}>
              {text}
            </TalkBubble>
          </TalkContainer>
        )),
      )}
    </TalkListContainerBlock>
  );
};

export default TalkListContainer;

const makeNewLine = (nickname: string) =>
  nickname.split(' ').map(word => (
    <>
      <span>{word}</span>
      <br />
    </>
  ));
