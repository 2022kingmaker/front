import React from 'react';
import styled from 'styled-components';
import Phrase from '@molecules/Phrase/Phrase';
import { Phrases } from '@models/Keyword';
import { flexBox } from '@styles/mixin';
import { Content2 } from '@models/Script';

export const PledgesBlock = styled.div`
  ${flexBox('center', 'center', 'column')};

  position: relative;
`;

export const KeywordContainer = styled.div<{ inDebate?: boolean }>`
  ${flexBox()};

  position: sticky;
  top: ${({ inDebate }) => (inDebate ? '10px' : '50px')};
  z-index: 2;
  margin: auto auto 15px auto;
  width: 200px;
  height: 25px;

  border: 1px solid black;
  border-radius: 10px;
  background: #f2f2f2;
  @media ${({ theme }) => theme.desktop} {
    top: ${({ inDebate }) => (inDebate ? '20px' : '100px')};
  }
`;

export interface PledgesProps {
  keyword: string;
  phrases?: Phrases;
  categoryId?: number;
  contents?: Content2[];
}

const Pledges = ({ keyword, phrases, categoryId, contents }: PledgesProps) => {
  return (
    <PledgesBlock>
      <KeywordContainer inDebate={!!contents}>
        <div>{keyword}</div>
      </KeywordContainer>
      {categoryId
        ? phrases!.map(phrase => (
            <Phrase
              key={phrase.phrase}
              position={(phrase.candidate.candidateId - 1) % 2 === 0 ? 'left' : 'right'}
              phrase={phrase}
              policyId={phrase.policyId}
              categoryId={categoryId}
            />
          ))
        : contents!.map(({ candidateId, colorCode, script, name }) => (
            <Phrase
              key={script.slice(1, 10)}
              position={candidateId % 2 ? 'left' : 'right'}
              categoryId={0}
              policyId={0}
              script={script}
              candidateId={candidateId}
            />
          ))}
    </PledgesBlock>
  );
};

export default Pledges;
