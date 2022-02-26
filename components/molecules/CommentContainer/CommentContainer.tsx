import styled from 'styled-components';
import TalkInput from '@atoms/TalkInput/TalkInput';
import { flexBox } from '@styles/mixin';
import Submit from '@assets/icons/submit.svg';
import { useMutation } from 'react-query';
import { postMessage } from '../../../apis/agora';

const CommentContainerBlock = styled.form`
  ${flexBox('flex-start', 'flex-start')};
  margin-top: 10px;
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
  bottom: 3px;
  ${flexBox()};
  width: 35px;
  height: 35px;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.primary};
`;

interface CommentContainerProps {}

const CommentContainer = ({}: CommentContainerProps) => {
  const submitMessage = useMutation(['postMessage'], () => postMessage(1, '테스팅'));

  const handleClick = () => {
    console.log('e');
    submitMessage.mutate();
  };

  return (
    <CommentContainerBlock onSubmit={e => e.preventDefault()}>
      <TalkInput />
      <Button>
        <Submit onClick={handleClick} />
      </Button>
    </CommentContainerBlock>
  );
};

export default CommentContainer;
