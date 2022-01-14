import type { NextPage } from 'next';
import SideBar from '../components/SideBar/SideBar';
import styled from 'styled-components';
import React from 'react';
import Layout from '../components/Layout/Layout';
import SpeechBubble from '../components/Pledges/SpeechBubble/SpeechBubble';
import { flexBox } from '../styles/mixin';

const HomeBlock = styled.div`
  height: inherit;
  position: relative;
  .contents {
    ${flexBox()};
    padding: 44px 0 0 200px;
  }
`;

const Home: NextPage = () => {
  return (
    <HomeBlock>
      <SideBar />
      <div className="contents">
        <SpeechBubble />
      </div>
    </HomeBlock>
  );
};

export default Home;

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <Layout>{page}</Layout>;
};
