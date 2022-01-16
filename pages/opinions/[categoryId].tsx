import React, { useState } from 'react';
import styled from 'styled-components';
import Layout from '@atoms/Layout/Layout';
import { keywords } from '../../types/Keyword';
import SideBar from '@atoms/SideBar/SideBar';
import { GetServerSidePropsContext } from 'next/types';
import OpinionContents from '@templates/OpinionContents/OpinionContents';
import { policies } from '../../types/Policy';

const IdBlock = styled.div``;

export interface IdProps {
  data: {
    keywordList: keywords;
    policies: policies;
  };
}

const OpinionPage = ({ data }: IdProps) => {
  const [activeTopic, setActiveTopic] = useState('');
  const { keywordList, policies } = data;

  const groupByKeyword = groupingByKeyword(policies, keywordList);

  return (
    <IdBlock>
      <SideBar toc={keywordList} activeTopic={activeTopic} />
      <OpinionContents groupByKeyword={groupByKeyword} />
    </IdBlock>
  );
};

export default OpinionPage;

OpinionPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps = async ({ params }: GetServerSidePropsContext) => {
  const keywordsResponse = await fetch(`http://localhost:3000/mocks/keywordList.json`);
  const policiesResponse = await fetch(`http://localhost:3000/mocks/policies.json`);

  const { keywordList } = await keywordsResponse.json();
  const { policies } = await policiesResponse.json();

  return { props: { data: { keywordList, policies } } };
};

const groupingByKeyword = (policies: policies, keywordList: keywords) =>
  keywordList
    .map(({ keywordId, name }) => {
      return policies
        .map(policy => {
          if (policy.keywordId === keywordId) {
            return { ...policy, keywordName: name };
          }
        })
        .filter(v => v);
    })
    .filter(v => v.length);
