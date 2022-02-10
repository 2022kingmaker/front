import styled from 'styled-components';
import { useState } from 'react';
import QuestionImg from '@assets/icons/question_icon.png';

const QuestionMarkBlock = styled.div`
  position: relative;
  img {
    width: 18px;
    height: 18px;
  }
`;

const HiddenBox = styled.div<{ isMouseOver: boolean }>`
  position: absolute;
  opacity: ${({ isMouseOver }) => (isMouseOver ? 1 : 0)};
  transition: 0.45s;
  top: -80px;
  left: 10px;
  width: 350px;
  height: 80px;
  border: 1px solid gray;
  padding: 12px;
  border-radius: 10px;
  background: white;
  font-size: 14px;
  font-weight: 400;
  div {
    margin-bottom: 5px;
  }
  .title {
    color: gray;
  }
`;

interface QuestionMarkProps {
  agency: string;
  period: string[];
  requester: string;
}

const QuestionMark = ({ agency, period, requester }: QuestionMarkProps) => {
  const [isMouseOver, setIsMouseOver] = useState(false);
  const handleMouseOver = () => {
    setIsMouseOver(true);
  };
  const handleMouseOut = () => {
    setIsMouseOver(false);
  };
  return (
    <QuestionMarkBlock>
      <img src={QuestionImg.src} alt="물음표 이미지" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} />
      <HiddenBox isMouseOver={isMouseOver}>
        <div>
          <span className={'title'}>조사 기관 </span>: {agency}
        </div>
        <div>
          <span className={'title'}>조사 기간 </span>: {period[0]} - {period[1]}
        </div>
        <div>
          <span className={'title'}>조사 의뢰 </span> : {requester}
        </div>
      </HiddenBox>
    </QuestionMarkBlock>
  );
};

export default QuestionMark;
