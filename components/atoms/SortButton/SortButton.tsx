import styled from 'styled-components';
import SortIcon from '@assets/icons/sort.svg';
import { flexBox } from '@styles/mixin';
import { SortStand } from '@lib/constant';

const SortButtonBlock = styled.div`
  ${flexBox('space-around', 'center')};
  margin: 30px;
  width: 50px;
  height: auto;
  font-size: 15px;
  position: absolute;
  top: 30px;
  right: 0px;

  @media ${({ theme }) => theme.desktop} {
    top: 75px;
    right: -20px;
  }
  :hover {
    cursor: pointer;
  }
  select {
    background: none;
    -o-appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    border: none;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    ::-ms-expand {
      display: none;
    }
    cursor: pointer;
  }
`;

interface SortButtonProps {
  setStand: any;
}

const SortButton = ({ setStand }: SortButtonProps) => {
  return (
    <SortButtonBlock className={'sort-button'}>
      <SortIcon />
      정렬
      <label>
        <select name="sorted" id="sorted" defaultValue={SortStand.recent} onChange={e => setStand(e.target.value)}>
          <option value={SortStand.recent}>최근 의견 순</option>
          <option value={SortStand.many}>의견 개수 순</option>
          <option value={SortStand.created}>토론 등록일 순</option>
        </select>
      </label>
    </SortButtonBlock>
  );
};

export default SortButton;
