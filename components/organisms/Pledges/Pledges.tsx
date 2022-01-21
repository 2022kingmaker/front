import React from 'react';
import styled from 'styled-components';
import Phrase from '@molecules/Phrase/Phrase';
import { phrases } from '../../../types/Keyword';
import { flexBox } from '@styles/mixin';

const PledgesBlock = styled.div`
  ${flexBox('center', 'center', 'column')};

  position: relative;
`;

const KeywordContainer = styled.div`
  ${flexBox()};
  margin: auto;
  width: 200px;
  height: 25px;

  border: 1px solid black;
  border-radius: 10px;
  margin-bottom: 15px;
`;

export interface PledgesProps {
  keyword: string;
  phrases: phrases;
}

const Pledges = ({ keyword, phrases }: PledgesProps) => {
  return (
    <PledgesBlock>
      <KeywordContainer>
        <div>{keyword}</div>
      </KeywordContainer>
      {phrases.map((phrase, index) => (
        <Phrase key={phrase.phrase} position={index % 2 === 0 ? 'left' : 'right'} phrase={phrase} />
      ))}
    </PledgesBlock>
  );
};

export default Pledges;
