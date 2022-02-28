import styled from 'styled-components';
import TalkInput from '@atoms/TalkInput/TalkInput';
import { flexBox } from '@styles/mixin';
import Submit from '@assets/icons/submit.svg';
import { useMutation, useQueryClient } from 'react-query';
import { PostMessage, postMessage } from '../../../apis/agora';
import React, { useRef } from 'react';
import { getSupportCandidate, resetTextArea } from '@lib/utils';
import { useRecoilState } from 'recoil';
import { inputState } from '../../../states/inputState';
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
  background: ${({ theme }) => theme.colors.disable};
  &.able {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

interface CommentContainerProps {
  agoraId: string;
}

const CommentContainer = ({ agoraId }: CommentContainerProps) => {
  const [input, setInput] = useRecoilState(inputState);
  const queryClient = useQueryClient();
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const submitMessage = useMutation(
    ['postMessage'],
    ({ roomId, text, candidateId }: PostMessage) => postMessage({ roomId, text, candidateId }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('getTalks');
        resetTextArea(inputRef.current!);
        setInput('');
      },
    },
  );

  const mutationMessage = (input: string) => {
    const candidateId = +getSupportCandidate();
    const isWhiteSpace = /^\s*$/;
    if (input.length === 0 || isWhiteSpace.test(input.trim())) {
      return;
    }
    submitMessage.mutate({ roomId: +agoraId, candidateId, text: input.replaceAll('\n', '\\n') });
  };

  return (
    <CommentContainerBlock onSubmit={e => e.preventDefault()}>
      <TalkInput ref={inputRef} mutationMessage={mutationMessage} />
      <Button className={input.length ? 'able' : ''}>
        <Submit onClick={() => mutationMessage(input)} />
      </Button>
    </CommentContainerBlock>
  );
};

export default CommentContainer;
