import styled from 'styled-components';
import { Avatar, TalkBubble } from '@atoms/index';
import { flexBox } from '@styles/mixin';
import React, { useEffect, useRef } from 'react';
import { ITalk } from '@models/Agora';
import { reportMessage } from '../../../apis/agora';

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
  }, [talks]);

  return (
    <TalkListContainerBlock ref={ref}>
      {talks.map(({ talkId, colorCode, createdAt, text, writer, reported }) => (
        <TalkContainer key={talkId}>
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
            {text}
          </TalkBubble>
        </TalkContainer>
      ))}
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
