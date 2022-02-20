import styled from 'styled-components';
import { Avatar } from '@atoms/index';
import TalkBubble from '@atoms/TalkBubble/TalkBubble';
import { flexBox } from '@styles/mixin';

const TalkListContainerBlock = styled.ul`
  overflow-y: auto;
  height: 100%;
`;

const TalkContainer = styled.li`
  ${flexBox('center', 'flex-start')};

  margin: 20px 0;
`;

interface TalkListContainerProps {}

const TalkListContainer = ({}: TalkListContainerProps) => {
  return (
    <TalkListContainerBlock>
      <TalkContainer>
        <Avatar writer={'고양이'} backgroundColor={'#1F4D9C'} />
        <TalkBubble color={'#1F4D9C'}></TalkBubble>
      </TalkContainer>
      <TalkContainer>
        <Avatar writer={'고양이'} backgroundColor={'#D33736'} />
        <TalkBubble color={'#D33736'}></TalkBubble>
      </TalkContainer>
      <TalkContainer>
        <Avatar writer={'고양이'} backgroundColor={'#F7CE46'} />
        <TalkBubble color={'#F7CE46'}></TalkBubble>
      </TalkContainer>
      <TalkContainer>
        <Avatar writer={'고양이'} backgroundColor={'#D95F29'} />
        <TalkBubble color={'#D95F29'}></TalkBubble>
      </TalkContainer>
    </TalkListContainerBlock>
  );
};

export default TalkListContainer;
