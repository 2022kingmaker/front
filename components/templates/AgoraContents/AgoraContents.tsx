import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import { Agora, Avatar } from '@atoms/index';
import TalkBubble from '@atoms/TalkBubble/TalkBubble';
import CommentContainer from '@molecules/CommentContainer/CommentContainer';
import Refresh from '@assets/icons/refresh.svg';

const AgoraContentsBlock = styled.div`
  ${flexBox('center', 'center', 'column')};
  position: relative;
  padding: 70px 30px 200px 230px;
  .topic-container {
    margin: 20px 0;
    & > * {
      padding: 24px;
    }
  }
  .title {
    padding: 12px;
    z-index: 2;
    width: inherit;
    font-weight: 650;
    font-size: 32px;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
    background: #f2f2f2;
  }
  @media ${({ theme }) => theme.desktop} {
    width: 100%;
    padding: 90px 24px 200px 24px;
    .topic-container {
      width: 320px;
      & > * {
        padding: 24px 12px;
      }
    }
  }
`;

const TalkContainer = styled.div`
  ${flexBox('center', 'flex-start')};

  margin: 20px 0;
`;

const TalkInfoTab = styled.section`
  ${flexBox('flex-start', 'center')};
  width: 93%;
  padding-left: 40px;
  margin-top: 25px;
  .refreshIcon {
    margin: 1px 0 0 8px;
  }
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

interface AgoraContentsProps {}

const AgoraContents = ({}: AgoraContentsProps) => {
  return (
    <AgoraContentsBlock>
      <Agora
        agenda={'야권 단일화 어떻게 생각하시나요?'}
        description={'모든 후보가 공격적인 일자리 창출 공약을 내걸고 있는데요. 여러분의 생각은 어떠신가요?'}
        fixed={true}
      />
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
        <Avatar writer={''} backgroundColor={'none'} />
        <TalkBubble removed={true} />
      </TalkContainer>
      <TalkInfoTab>
        <span>전체 의견 4개</span>
        <Refresh className={'refreshIcon'} />
      </TalkInfoTab>
      <CommentContainer />
    </AgoraContentsBlock>
  );
};

export default AgoraContents;

//['섬뜩한','고양이']
const makeNewLine = (nickname: string) =>
  nickname.split(' ').map(word => (
    <>
      <span>{word}</span>
      <br />
    </>
  ));
