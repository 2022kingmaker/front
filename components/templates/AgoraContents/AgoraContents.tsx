import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import CommentContainer from '@molecules/CommentContainer/CommentContainer';
import Refresh from '@assets/icons/refresh.svg';
import TalkListContainer from '@organisms/TalkListContainer/TalkListContainer';
import FixedAgora from '@atoms/Agora/FixedAgora/FixedAgora';

const AgoraContentsBlock = styled.div`
  ${flexBox('center', 'center', 'column')};
  position: relative;
  padding: 35px 30px 20px 230px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
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
    padding: 90px 24px 20px 24px;
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
  position: relative;
  width: 100%;
  padding-top: 10px;
  ::before {
    content: '';
    position: absolute;
    left: -30px;
    top: 0;
    width: 120%;
    border-top: 1px solid #c4c4c4;
  }
  .refreshIcon {
    margin: 1px 0 0 8px;
  }
`;

interface AgoraContentsProps {}

const AgoraContents = ({}: AgoraContentsProps) => {
  return (
    <AgoraContentsBlock>
      <FixedAgora
        agenda={'야권 단일화 어떻게 생각하시나요?'}
        description={'모든 후보가 공격적인 일자리 창출 공약을 내걸고 있는데요. 여러분의 생각은 어떠신가요?'}
      />
      <TalkListContainer />

      <TalkInfoTab>
        <span>전체 의견 4개</span>

        <span>
          <Refresh className={'refreshIcon'} />
        </span>
      </TalkInfoTab>
      <CommentContainer />
    </AgoraContentsBlock>
  );
};

export default AgoraContents;
