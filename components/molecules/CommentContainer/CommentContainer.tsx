import styled from 'styled-components';
import TalkInput from '@atoms/TalkInput/TalkInput';
import { flexBox } from '@styles/mixin';
import Submit from '@assets/icons/submit.svg';

const CommentContainerBlock = styled.form`
  ${flexBox('flex-start', 'flex-start')};
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: auto;

  @media ${({ theme }) => theme.desktop} {
    width: 100%;
    height: auto;
  }
`;

const Button = styled.button`
  ${flexBox()};
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 5px;
  background: ${({ theme }) => theme.colors.primary};
`;

const InputContainer = styled.section`
  margin-left: 5px;
  width: 90%;
  height: 140px;
  border-radius: 13px;
  border: 1px solid black;
  background: white;
  padding: 8px 12px 40px 12px;
  position: relative;
`;

export const CommentWriter = styled.div`
  color: black;
  font-size: 16px;
  margin: 5px 0 10px 0;
`;
const ToolBox = styled.div`
  ${flexBox('space-between')};
  width: 100%;
  position: absolute;
  bottom: 5px;
  left: 0;
  padding: 3px 12px 0 12px;
  border-top: 1px solid rgba(162, 162, 162, 0.54);
`;

const InfoTab = styled.div`
  font-size: 12px;
`;
const ButtonTab = styled.div``;

interface CommentContainerProps {}

const CommentContainer = ({}: CommentContainerProps) => {
  return (
    <CommentContainerBlock>
      <TalkInput />
      <Button>
        <Submit />
      </Button>
    </CommentContainerBlock>
  );
};

export default CommentContainer;
