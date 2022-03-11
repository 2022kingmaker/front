import React, { useState } from 'react';
import Head from 'next/head';
import { GetServerSidePropsContext } from 'next/types';
import styled from 'styled-components';

import { Layout, SideBar } from '@atoms/index';
import OpinionContents from '@templates/OpinionContents/OpinionContents';

import { Keywords } from '@models/Keyword';
import { Categories } from '@models/Category';
import { Policies } from '@models/Policy';

import useIntersectionObserver from '../../hooks/useIntersectionObserver';

import { getCategories } from '../../apis/category';
import { getKeywords } from '../../apis/keyword';
import { getPolicies } from '../../apis/policy';
import { ITableContents } from '@models/TableContent';
import { REVALIDATE_TIME } from '@lib/constant';

const IdBlock = styled.div``;

export interface IdProps {
  data: {
    keywords: Keywords;
    policies: Policies;
    categories: Categories;
  };
}

const OpinionPage = ({ data }: IdProps) => {
  const { keywords, policies, categories } = data;
  const [activeTopic, setActiveTopic] = useState(categories[0].name);
  useIntersectionObserver(setActiveTopic);

  const groupByKeyword = groupingByKeyword(policies, keywords);

  const toc = keywords.reduce((toc, { keywordId, name }) => {
    toc.push({
      id: keywordId,
      name: name,
    });
    return toc;
  }, [] as ITableContents[]);

  return (
    <IdBlock>
      <Head>
        <title>공약 상세보기 | 대선마당 </title>
        <meta name="description" content="각 후보들의 공약을 상세히 제공합니다. " />
      </Head>
      <SideBar toc={toc} activeTopic={activeTopic} categories={categories} />
      <OpinionContents groupByKeyword={groupByKeyword} />
    </IdBlock>
  );
};

export default OpinionPage;

OpinionPage.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
export const getStaticPaths = async () => {
  const categories: Categories = await getCategories();

  const paths = categories.map(category => ({
    params: { categoryId: category.categoryId.toString() },
  }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps = async ({ params }: GetServerSidePropsContext) => {
  // @ts-ignore
  const { categoryId } = params;
  const categories = await getCategories();
  const keywords = await getKeywords(categoryId);
  const policies = await getPolicies(categoryId);

  return { props: { data: { policies, categories, keywords } }, revalidate: REVALIDATE_TIME };
};

const groupingByKeyword = (policies: Policies, keywords: Keywords): any =>
  keywords
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
