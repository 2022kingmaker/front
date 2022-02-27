import React from 'react';
import styled from 'styled-components';
import Phrase from '@molecules/Phrase/Phrase';
import { Phrases } from '@models/Keyword';
import { flexBox } from '@styles/mixin';

export const PledgesBlock = styled.div`
  ${flexBox('center', 'center', 'column')};

  position: relative;
`;

const KeywordContainer = styled.div`
  ${flexBox()};

  position: sticky;
  top: 50px;
  z-index: 2;
  margin: auto auto 15px auto;
  width: 200px;
  height: 25px;

  border: 1px solid black;
  border-radius: 10px;
  background: #f2f2f2;
  @media ${({ theme }) => theme.desktop} {
    top: 100px;
  }
`;

export interface PledgesProps {
  keyword: string;
  phrases: Phrases;
  categoryId: number;
}

const Pledges = ({ keyword, phrases, categoryId }: PledgesProps) => {
  return (
    <PledgesBlock>
      <KeywordContainer>
        <div>{keyword}</div>
      </KeywordContainer>
      {phrases.map(phrase => (
        <Phrase
          key={phrase.phrase}
          position={(phrase.candidate.candidateId - 1) % 2 === 0 ? 'left' : 'right'}
          phrase={phrase}
          policyId={phrase.policyId}
          categoryId={categoryId}
        />
      ))}
    </PledgesBlock>
  );
};

export default Pledges;
