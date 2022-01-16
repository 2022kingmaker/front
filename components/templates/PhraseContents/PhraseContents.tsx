import React from 'react';
import styled from 'styled-components';
import { phrases } from '../../../types/Keyword';
import Pledges from '@organisms/Pledges/Pledges';
import { flexBox } from '@styles/mixin';

const ContentsBlock = styled.div`
  ${flexBox('center', 'center', 'column')};
  position: relative;
  padding: 60px 0 200px 200px;
  .topic-container > * {
    padding: 24px;
  }
  .topic-container {
    margin: 20px 0;
  }
  .title {
    padding: 12px;
    width: 300px;
    font-weight: 650;
    font-size: 32px;
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};
  }
`;

export interface ContentsProps {
  groupByCategory: { categoryName: string; keywordId: number; name: string; categoryId: number; phrases: phrases }[][];
}

const PhraseContents = ({ groupByCategory }: ContentsProps) => {
  return (
    <ContentsBlock>
      {groupByCategory.map((keywords, index) => (
        <div className="topic-container" key={index} data-title={keywords[0].categoryName} data-index={index}>
          <h2 className="title">{keywords[0].categoryName}</h2>
          {keywords.map(({ name, phrases }) => (
            <Pledges key={name} keyword={name} phrases={phrases} />
          ))}
        </div>
      ))}
    </ContentsBlock>
  );
};

export default PhraseContents;
