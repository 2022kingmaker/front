import React from 'react';
import styled from 'styled-components';
import { policy } from '../../../types/Policy';
import Opinion from '@molecules/Opinion/Opinion';
import { flexBox } from '@styles/mixin';

const OpinionContentsBlock = styled.div`
  ${flexBox('center', 'center', 'column')};
  position: relative;
  padding: 44px 0 0 200px;
  .keyword-container > * {
    padding: 24px;
  }
`;

export interface OpinionContentsProps {
  groupByKeyword: {
    keywordName: string;
    policyId: number;
    candidate: {
      candidateId: number;
      name: string;
      party: { partyId: number; name: string; colorCode?: string | undefined };
    };
    phrase: string;
    text: string;
    keywordId: number;
  }[][];
}

const OpinionContents = ({ groupByKeyword }: OpinionContentsProps) => {
  return (
    <OpinionContentsBlock>
      {groupByKeyword.map((policy, index) => (
        <div className="keyword-container" key={index}>
          <h2 className="title" data-title={policy[0].keywordName}>
            {policy[0].keywordName}
          </h2>
          {policy.map(({ text, phrase, candidate }: policy, index) => (
            <Opinion key={phrase + index} phrase={phrase} candidate={candidate} text={text} rectType={index} />
          ))}
        </div>
      ))}
    </OpinionContentsBlock>
  );
};

export default OpinionContents;
