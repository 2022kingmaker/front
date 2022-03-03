import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import CommentContainer from '@molecules/CommentContainer/CommentContainer';
import Refresh from '@assets/icons/refresh.svg';
import Vote from '@assets/icons/vote.svg';
import TalkListContainer from '@organisms/TalkListContainer/TalkListContainer';
import FixedAgora from '@atoms/Agora/FixedAgora/FixedAgora';
import { IRoomDetail } from '@models/Agora';
import React, { useState } from 'react';
import { PledgesBlock } from '@organisms/Pledges/Pledges';
import Phrase from '@molecules/Phrase/Phrase';
import { useQueryClient } from 'react-query';
import { useRecoilValue } from 'recoil';
import { inputState } from 'states/inputState';
import { getSupportCandidate } from '@lib/utils';
import { parties } from '@molecules/SelectModal/SelectModal';

const AgoraContentsBlock = styled.div`
  ${flexBox('flex-start', 'flex-start', 'column')};
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
  ${flexBox('space-between', 'center')};
  position: relative;
  width: 100%;
  padding-top: 10px;
  margin-left: 5px;
  font-size: 14px;
  ::before {
    content: '';
    position: absolute;
    left: -100px;
    top: 0;
    width: 200%;
    border-top: 1px solid #c4c4c4;
  }
  svg:hover {
    cursor: pointer;
  }
  .refreshIcon {
    margin: 2px 0 0 8px;
  }
  .voteIcon {
    margin: 2px 0 0 10px;
  }
  .left-tab {
    ${flexBox('center', 'center')};
  }
  .right-tab {
    ${flexBox('center', 'center')};
    margin-right: 10px;
  }
`;

const AgoraPledgesBlock = styled(PledgesBlock)`
  margin-top: 50px;
  width: 100%;
`;

interface AgoraContents {
  roomDetail: IRoomDetail;
  currentCategoryId: number;
  agoraId: string;
  toggle: (e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>) => void;
}

const AgoraContents = ({ roomDetail, currentCategoryId, agoraId, toggle }: AgoraContents) => {
  const { agenda, description, link, talkCount } = roomDetail;
  const queryClient = useQueryClient();
  const [scrollDown, setScrollDown] = useState(false);
  const input = useRecoilValue(inputState);
  const handleClick = () => {
    queryClient.invalidateQueries(agoraId).then(() => {
      setScrollDown(!scrollDown);
    });
  };

  return (
    <AgoraContentsBlock>
      {currentCategoryId === 0 ? (
        <>
          <FixedAgora agenda={agenda} description={description} />
          <TalkListContainer agoraId={agoraId} scrollDown={scrollDown} />
          <TalkInfoTab>
            <section className="left-tab">
              <span>전체 의견 {talkCount || 0}개</span>
              <span>
                <Refresh className={'refreshIcon'} onClick={handleClick} />
              </span>
              <span>
                <Vote
                  className={'voteIcon'}
                  onClick={(e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>) => toggle(e)}
                  fill={parties.find(party => party.candidateId === +getSupportCandidate())!.color}
                />
              </span>
            </section>
            <section className="right-tab">
              <span>{input.length} / 500</span>
            </section>
          </TalkInfoTab>
          <CommentContainer agoraId={agoraId} />
        </>
      ) : (
        <AgoraPledgesBlock>
          {link.phrases.map(phrase => (
            <Phrase
              key={phrase.phrase}
              position={'left'}
              phrase={phrase}
              policyId={phrase.policyId}
              categoryId={phrase.categoryId}
            />
          ))}
        </AgoraPledgesBlock>
      )}
    </AgoraContentsBlock>
  );
};

export default AgoraContents;
