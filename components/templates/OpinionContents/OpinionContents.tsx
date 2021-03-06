import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Policy } from '@models/Policy';
import Opinion from '@molecules/Opinion/Opinion';
import { flexBox } from '@styles/mixin';
import { useRouter } from 'next/router';

const OpinionContentsBlock = styled.div`
  ${flexBox('center', 'center', 'column')};
  position: relative;
  padding: 60px 0 0 300px;
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
  @media ${({ theme }) => theme.desktop} {
    width: 100%;
    padding: 90px 24px 200px 24px;
    .topic-container {
      width: 100%;
    }
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
  const router = useRouter();

  useEffect(() => {
    const policyId = decodeURI(router.asPath.split('#')[1]);
    const $target = document.querySelector(`[data-policy="${policyId}"]`);
    $target?.scrollIntoView({ block: 'center' });
  }, []);
  return (
    <OpinionContentsBlock>
      {groupByKeyword.map((policy, index) => (
        <div className="topic-container" key={index} data-title={policy[0].keywordName} data-index={index}>
          <h2 className="title">{policy[0].keywordName}</h2>
          {policy.map(({ text, phrase, candidate, policyId }: Policy, index) => (
            <Opinion
              key={phrase + index}
              phrase={phrase}
              candidate={candidate}
              text={text}
              rectType={index}
              policyId={policyId}
            />
          ))}
        </div>
      ))}
    </OpinionContentsBlock>
  );
};

export default OpinionContents;
