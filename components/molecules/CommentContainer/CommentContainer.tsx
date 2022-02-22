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
  position: relative;

  @media ${({ theme }) => theme.desktop} {
    width: 100%;
    height: auto;
  }
`;

const Button = styled.button`
  position: absolute;
  right: 5px;
  bottom: 5px;
  ${flexBox()};
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary};
`;

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
