import styled from 'styled-components';
import { flexBox } from '@styles/mixin';

const TalkBubbleBlock = styled.div<Partial<TalkBubbleProps>>`
  ${flexBox('flex-start', 'flex-start', 'column')};
  position: relative;
  width: 90%;
  height: auto;
  min-height: 100px;
  padding: 8px 12px 8px 12px;

  background: ${({ color }) => (color ? color : 'black')};
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  border-radius: 13px;
  p {
    color: white;
    word-break: break-all;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.2;
    margin-bottom: 5px;
  }
`;
export const Writer = styled.div`
  color: white;
  font-size: 18px;
  margin: 5px 0 10px 0;
`;

const TalkInfo = styled.ul`
  ${flexBox('center', 'center')};
  position: absolute;
  left: 5px;
  bottom: -15px;

  > * {
    color: #333333;
    font-size: 12px;
    font-weight: 600;
    margin: 0 5px;
  }

  .time {
    font-size: 10px;
    font-weight: 300;
  }
`;

interface TalkBubbleProps {
  color: string;
}

const TalkBubble = ({ color }: TalkBubbleProps) => {
  return (
    <TalkBubbleBlock color={color}>
      <Writer>고양이</Writer>
      <p>
        가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
        가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
        가나다라마바사아자차카타파하 가나다라마바사아자차카타파하 가나다라마바사아자차카타파하
      </p>
      <TalkInfo>
        <li>신고하기</li>
        <li className={'time'}>09:34</li>
      </TalkInfo>
    </TalkBubbleBlock>
  );
};

export default TalkBubble;
