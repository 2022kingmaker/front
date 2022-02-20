import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import { Agora } from '@atoms/index';
import CommentContainer from '@molecules/CommentContainer/CommentContainer';
import Refresh from '@assets/icons/refresh.svg';
import Pencil from '@assets/icons/pencil.svg';
import TalkListContainer from '@organisms/TalkListContainer/TalkListContainer';
import { useState } from 'react';

const AgoraContentsBlock = styled.div`
  ${flexBox('center', 'center', 'column')};
  position: relative;
  padding: 70px 30px 50px 230px;
  height: 100vh;
  overflow-y: auto;
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
    padding: 90px 24px 50px 24px;
    .topic-container {
      width: 320px;
      & > * {
        padding: 24px 12px;
      }
    }
  }
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

interface AgoraContentsProps {}

const AgoraContents = ({}: AgoraContentsProps) => {
  const [commentToggle, setCommentToggle] = useState(false);

  const handleClick = () => {
    setCommentToggle(!commentToggle);
  };
  return (
    <AgoraContentsBlock>
      <Agora
        agenda={'야권 단일화 어떻게 생각하시나요?'}
        description={'모든 후보가 공격적인 일자리 창출 공약을 내걸고 있는데요. 여러분의 생각은 어떠신가요?'}
      />
      <TalkListContainer />
      <TalkInfoTab>
        <span>전체 의견 4개</span>

        <span>
          <Refresh className={'refreshIcon'} />
          <Pencil onClick={handleClick} />
        </span>
      </TalkInfoTab>
      <CommentContainer toggle={commentToggle} />
    </AgoraContentsBlock>
  );
};

export default AgoraContents;
