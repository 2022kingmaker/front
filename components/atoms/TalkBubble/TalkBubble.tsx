import styled from 'styled-components';
import { flexBox } from '@styles/mixin';
import { ReactNode } from 'react';
import { format } from 'date-fns';
import { useFetchReport } from 'queries';

const TalkBubbleBlock = styled.div<Partial<TalkBubbleProps>>`
  ${flexBox('flex-start', 'flex-start', 'row')};
  position: relative;
  width: 90%;
  height: auto;

  min-height: 40px;
  padding: 12px;

  background: ${({ color }) => (color ? color : 'black')};
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  border-radius: 13px;
  p {
    color: white;
    word-break: break-all;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.3;
  }
  ${({ removed, theme }) =>
    removed &&
    `
  background: ${theme.colors.primary}A3`};
`;

const TalkInfo = styled.ul`
  ${flexBox('center', 'center')};
  position: absolute;
  left: 5px;
  bottom: -17px;

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

const Removed = styled.div`
  ${flexBox()};
  width: 100%;
  height: 25px;

  div {
    font-size: 14px;
    color: #545252;
  }
`;
interface TalkBubbleProps {
  color: string;
  removed: boolean;
  children: ReactNode;
  createdAt: Date;
}

const TalkBubble = ({ color = 'none', removed = false, children, createdAt }: TalkBubbleProps) => {
  // const reportMutation = useMutation(['reportMessage'], (talkId: number) => reportMessage(talkId));
  const reportMutation = useFetchReport();

  const handleClick = () => {
    const result = window.confirm('정말 신고하시겠습니까?');
    if (result) {
      const talkId = +window.location.pathname.split('/')[2];
      reportMutation.mutate(talkId);
    }
  };

  return (
    <TalkBubbleBlock color={color} removed={removed}>
      {removed ? (
        <Removed>
          <div>{children}</div>
        </Removed>
      ) : (
        <>
          <div>{children}</div>
          <TalkInfo>
            <li onClick={handleClick}>신고하기</li>
            <li className={'time'}>{format(new Date(createdAt), 'MM월 dd일 HH:mm')}</li>
          </TalkInfo>
        </>
      )}
    </TalkBubbleBlock>
  );
};

export default TalkBubble;
