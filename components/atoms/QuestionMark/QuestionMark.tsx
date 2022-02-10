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
  top: -200px;
  left: 10px;
  width: 200px;
  height: 200px;
  border: 1px solid gray;
  padding: 12px;
  border-radius: 10px;
  background: white;
`;

const QuestionMark = () => {
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
      <HiddenBox isMouseOver={isMouseOver}>asdfsadfsadfsadfs</HiddenBox>
    </QuestionMarkBlock>
  );
};

export default QuestionMark;
