import styled from 'styled-components';
import { Avatar, TalkBubble } from '@atoms/index';
import { flexBox } from '@styles/mixin';
import { useEffect, useLayoutEffect, useRef } from 'react';

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
`;

const TalkListContainer = () => {
  const ref = useRef<HTMLUListElement>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, []);

  return (
    <TalkListContainerBlock ref={ref}>
      <TalkContainer>
        <UserTab>
          <Avatar writer={'섬뜩한 '} backgroundColor={'#1F4D9C'} />
          <Writer>{makeNewLine('섬뜩한 고양이')}</Writer>
        </UserTab>
        <TalkBubble color={'#1F4D9C'}></TalkBubble>
      </TalkContainer>
      <TalkContainer>
        <UserTab>
          <Avatar writer={'고양이'} backgroundColor={'#D33736'} />
          <Writer>{makeNewLine('섬뜩한 고양이')}</Writer>
        </UserTab>
        <TalkBubble color={'#D33736'}></TalkBubble>
      </TalkContainer>
      <TalkContainer>
        <UserTab>
          <Avatar writer={'고양이'} backgroundColor={'#F7CE46'} />
          <Writer>{makeNewLine('섬뜩한 고양이')}</Writer>
        </UserTab>
        <TalkBubble color={'#F7CE46'}></TalkBubble>
      </TalkContainer>
      <TalkContainer>
        <UserTab>
          <Avatar writer={'고양이'} backgroundColor={'#D95F29'} />
          <Writer>{makeNewLine('섬뜩한 고양이')}</Writer>
        </UserTab>
        <TalkBubble color={'#D95F29'}></TalkBubble>
      </TalkContainer>
      <TalkContainer>
        <UserTab>
          <Avatar writer={'고양이'} backgroundColor={'#D95F29'} />
          <Writer>{makeNewLine('섬뜩한 고양이')}</Writer>
        </UserTab>
        <TalkBubble color={'#D95F29'}></TalkBubble>
      </TalkContainer>
      <TalkContainer>
        <UserTab>
          <Avatar writer={'고양이'} backgroundColor={'#c4c4c4'} />
          <Writer>{makeNewLine('섬뜩한 고양이')}</Writer>
        </UserTab>
        <TalkBubble color={'#c4c4c4'}></TalkBubble>
      </TalkContainer>
      <TalkContainer>
        <UserTab>
          <Avatar writer={''} backgroundColor={'none'} />
          <Writer>{makeNewLine('')}</Writer>
        </UserTab>
        <TalkBubble color={'none'} removed={true}></TalkBubble>
      </TalkContainer>
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
