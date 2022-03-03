import styled from 'styled-components';
import React from 'react';
import { Script } from '@models/Script';
import Pledges from '@organisms/Pledges/Pledges';

const DebateDetailContentsBlock = styled.div`
  position: relative;
  padding: 40px 30px 0 230px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  .topic-container {
    margin: 20px 0;
    & > * {
      padding: 24px 0;
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
  width: 100%;
  @media ${({ theme }) => theme.desktop} {
    width: 100%;
    padding: 80px 12px 50px 12px;
    .topic-container {
      width: 100%;
    }
  }
`;

interface DebateDetailContentsProps {
  script: Script;
}
const DebateDetailContents = ({ script }: DebateDetailContentsProps) => {
  if (!script) {
    return <></>;
  }
  const { contents, category } = script;
  return (
    <DebateDetailContentsBlock>
      <div className="topic-container">
        <h2 className="title">{category}</h2>
        {contents.map(({ keyword, contents }) => (
          <Pledges key={contents[0].script.slice(1, 10)} keyword={keyword} categoryId={0} contents={contents} />
        ))}
      </div>
    </DebateDetailContentsBlock>
  );
};

export default DebateDetailContents;
