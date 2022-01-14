import React from 'react';
import styled from 'styled-components';
import Header from '../Header/Header';

const LayoutBlock = styled.div`
  height: inherit;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutBlock>
      <Header />
      {children}
    </LayoutBlock>
  );
};

export default Layout;
