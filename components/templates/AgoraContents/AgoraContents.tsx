import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import CommentContainer from '@molecules/CommentContainer/CommentContainer';
import Refresh from '@assets/icons/refresh.svg';
import TalkListContainer from '@organisms/TalkListContainer/TalkListContainer';
import FixedAgora from '@atoms/Agora/FixedAgora/FixedAgora';
import { IRoomDetail, ITalkList } from '@models/Agora';
import SpeechBubble from '@atoms/SpeechBubble/SpeechBubble';
import React from 'react';
import Pledges, { PledgesBlock } from '@organisms/Pledges/Pledges';
import Phrase from '@molecules/Phrase/Phrase';

const AgoraContentsBlock = styled.div`
  ${flexBox('center', 'center', 'column')};
  position: relative;
  padding: 35px 30px 20px 230px;
  height: 100%;
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
    padding: 90px 24px 10px 24px;
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
  margin-left: 15px;
  font-size: 12px;
  ::before {
    content: '';
    position: absolute;
    left: -100px;
    top: 0;
    width: 200%;
    border-top: 1px solid #c4c4c4;
  }
  .refreshIcon {
    margin: 1px 0 0 8px;
  }
`;

interface AgoraContents {
  roomDetail: IRoomDetail;
  talkList: ITalkList;
  currentCategoryId: number;
}

const AgoraContents = ({ roomDetail, talkList, currentCategoryId }: AgoraContents) => {
  const { agenda, description, link } = roomDetail;
  const { talks } = talkList;

  return (
    <AgoraContentsBlock>
      {currentCategoryId === 0 ? (
        <>
          <FixedAgora agenda={agenda} description={description} />
          <TalkListContainer talks={talks} />
          <TalkInfoTab>
            <span>전체 의견 4개</span>

            <span>
              <Refresh className={'refreshIcon'} />
            </span>
          </TalkInfoTab>
          <CommentContainer />
        </>
      ) : (
        <PledgesBlock>
          {link.phrases.map(phrase => (
            <Phrase key={phrase.phrase} position={'left'} phrase={phrase} policyId={phrase.policyId} categoryId={1} />
          ))}
        </PledgesBlock>
      )}
    </AgoraContentsBlock>
  );
};

export default AgoraContents;
