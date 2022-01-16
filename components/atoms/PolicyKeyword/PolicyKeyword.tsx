import React from 'react';
import styled from 'styled-components';
import { flexBox } from '@styles/mixin';

const PolicyKeywordBlock = styled.div`
  ${flexBox()};
  color: #fff;
  height: 35px;
  width: 200px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.primary};
`;

export interface PolicyKeywordProps {}

const PolicyKeyword = ({}: PolicyKeywordProps) => {
  return <PolicyKeywordBlock>경제</PolicyKeywordBlock>;
};

export default PolicyKeyword;
