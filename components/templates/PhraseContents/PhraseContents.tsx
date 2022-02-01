import React from 'react';
import styled from 'styled-components';
import { phrases } from '@types/Keyword';
import Pledges from '@organisms/Pledges/Pledges';
import { flexBox } from '@styles/mixin';

const ContentsBlock = styled.div`
  ${flexBox('center', 'center', 'column')};
  position: relative;
  padding: 60px 0 200px 200px;
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

export interface ContentsProps {
  groupByCategory: { categoryName: string; keywordId: number; name: string; categoryId: number; phrases: phrases }[][];
}

const PhraseContents = ({ groupByCategory }: ContentsProps) => {
  return (
    <ContentsBlock>
      {groupByCategory.map((keywords, index) => (
        <div
          className="topic-container"
          key={index}
          data-title={keywords[0].categoryName}
          data-index={index}
          data-category-id={keywords[0].categoryId}
        >
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
