import React, { useState } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import { SideBar, Layout } from '@atoms/index';
import { PhraseContents } from '@templates/index';
import { IntroModal } from '@molecules/index';

import { useIntersectionObserver, useModal } from '../hooks/index';

import { KeywordDetails, Keywords } from '@models/Keyword';
import { Categories } from '@models/Category';

import { getCategories } from '../apis/category';
import { getKeywordDetails } from '../apis/keyword';
import { ITableContents } from '@models/TableContent';
import Head from 'next/head';

const HomeBlock = styled.div`
  height: inherit;
  position: relative;
`;

interface HomeProps {
  data: {
    keywordDetails: KeywordDetails;
    categories: Categories;
  };
}

const Modal = dynamic(() => import('@molecules/Modal/Modal'), { ssr: false });

const Home: NextPage = ({ data }: HomeProps) => {
  const { categories, keywordDetails } = data;
  const [activeTopic, setActiveTopic] = useState(categories[0]?.name || '');
  const { isShowing, toggle } = useModal(true);
  const isPopupShowing = getPopupShowing();

  useIntersectionObserver(setActiveTopic);

  const groupByCategory = groupingByCategory(categories, keywordDetails);

  const toc = categories.reduce((toc, { categoryId, name }) => {
    toc.push({
      id: categoryId,
      name: name,
    });
    return toc;
  }, [] as ITableContents[]);

  return (
    <HomeBlock>
      <Head>
        <title>대선마당 | 대한민국 20대 대선 정책 공약 비교</title>
      </Head>
      <SideBar toc={toc} activeTopic={activeTopic} />
      <PhraseContents groupByCategory={groupByCategory} />
      {isPopupShowing && (
        <Modal isShowing={isShowing} close={toggle}>
          <IntroModal />
        </Modal>
      )}
    </HomeBlock>
  );
};

export const getStaticProps = async () => {
  const categories = await getCategories();
  const keywordDetails = await getKeywordDetails();

  return { props: { data: { categories, keywordDetails } }, revalidate: 60 };
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};

const groupingByCategory: (categories: Categories, keywords: Keywords) => any = (categories, keywords) =>
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

const getPopupShowing = () => {
  const time = typeof window !== 'undefined' && Number(localStorage.getItem('offPopup'));

  if (!time || Date.now() > time) {
    time && localStorage.removeItem('offPopup');
    return true;
  }

  return false;
};
