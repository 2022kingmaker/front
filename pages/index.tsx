import React, { useState } from 'react';
import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import styled from 'styled-components';

import SideBar from '@atoms/SideBar/SideBar';
import Layout from '@atoms/Layout/Layout';
import PhraseContents from '@templates/PhraseContents/PhraseContents';
import IntroModal from '@molecules/IntroModal/IntroModal';

import useModal from '@molecules/Modal/useModal';
import useIntersectionObserver from '../hooks/useIntersectionObserver';

import { keywordDetails, keywords } from '../types/Keyword';
import { categories } from '../types/Category';
import { getCategories } from '../apis/category';
import { getKeywordDetails } from '../apis/keyword';

const HomeBlock = styled.div`
  height: inherit;
  position: relative;
`;

interface HomeProps {
  data: {
    keywordDetails: keywordDetails;
    categories: categories;
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

  return (
    <HomeBlock>
      <SideBar toc={categories} activeTopic={activeTopic} />
      <PhraseContents groupByCategory={groupByCategory} />
      {isPopupShowing && (
        <Modal isShowing={isShowing} close={toggle}>
          <IntroModal />
        </Modal>
      )}
    </HomeBlock>
  );
};

export const getServerSideProps = async () => {
  const categories = await getCategories();
  const keywordDetails = await getKeywordDetails();

  return { props: { data: { categories, keywordDetails } } };
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

const getPopupShowing = () => {
  const time = typeof window !== 'undefined' && Number(localStorage.getItem('offPopup'));

  if (!time || Date.now() > time) {
    time && localStorage.removeItem('offPopup');
    return true;
  }

  return false;
};
