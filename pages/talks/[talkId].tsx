import React from 'react';
import { NextPage } from 'next';
import Head from 'next/head';
import styled from 'styled-components';
import { Layout, SideBarRoute } from '@atoms/index';
import { getCategories } from '../../apis/category';
import { Categories } from '@models/Category';
import { getToc } from '@lib/utils';
import { ParsedUrlQuery } from 'querystring';
import { GetStaticProps } from 'next/types';

const TalksBlock = styled.div`
  height: inherit;
  position: relative;
`;

interface TalksProps {
  data: {
    talkId: string;
    categories: Categories;
  };
}

const Talks: NextPage = ({ data }: TalksProps) => {
  const { talkId, categories } = data;
  const toc = getToc(categories);

  return (
    <TalksBlock>
      <Head>
        <meta name="description" content="토론의 장" />
      </Head>
      <SideBarRoute toc={toc} currentCategoryId={+talkId} />
    </TalksBlock>
  );
};

export default Talks;

Talks.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths = async () => {
  const categories: Categories = await getCategories();

  const paths = categories.map(category => ({
    params: { talkId: category.categoryId.toString() },
  }));
  return { paths, fallback: false };
};

interface Params extends ParsedUrlQuery {
  talkId: string;
}
export const getStaticProps: GetStaticProps = async context => {
  const { talkId } = context.params as Params;
  const categories = await getCategories();

  return { props: { data: { categories, talkId } } };
};
