import React, { useState } from 'react';
import type { NextPage } from 'next';
import styled from 'styled-components';
import SideBar from '@atoms/SideBar/SideBar';
import Layout from '@atoms/Layout/Layout';
import { keywords } from '../types/Keyword';
import { categories } from '../types/Category';
import PhraseContents from '@templates/PhraseContents/PhraseContents';
import useTableOfContents from '../hooks/useTableOfContents';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

const HomeBlock = styled.div`
  height: inherit;
  position: relative;
`;

interface HomeProps {
  data: {
    keywords: keywords;
    categories: categories;
  };
}

const Home: NextPage = ({ data }: HomeProps) => {
  const [activeTopic, setActiveTopic] = useState('');
  const { categories, keywords } = data;

  useTableOfContents();
  useIntersectionObserver(setActiveTopic);

  const groupByCategory = groupingByCategory(categories, keywords);

  return (
    <HomeBlock>
      <SideBar toc={categories} activeTopic={activeTopic} />
      <PhraseContents groupByCategory={groupByCategory} />
    </HomeBlock>
  );
};

export const getServerSideProps = async () => {
  const categoriesResponse = await fetch(`http://localhost:3000/mocks/categories.json`);
  const keywordsResponse = await fetch(`http://localhost:3000/mocks/keywords.json`);

  const [{ keywords }, { categories }] = await Promise.all([keywordsResponse.json(), categoriesResponse.json()]);

  return { props: { data: { categories, keywords } } };
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

const groupingByCategory: (categories: categories, keywords: keywords) => any = (categories, keywords) =>
  categories
    .map(({ categoryId, name }) => {
      return keywords
        .map(keyword => {
          if (keyword.categoryId === categoryId) {
            return { ...keyword, categoryName: name };
          }
        })
        .filter(v => v);
    })
    .filter(v => v.length);
