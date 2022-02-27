import styled from 'styled-components';
import TalkInput from '@atoms/TalkInput/TalkInput';
import { flexBox } from '@styles/mixin';
import Submit from '@assets/icons/submit.svg';
import { useMutation, useQueryClient } from 'react-query';
import { PostMessage, postMessage } from '../../../apis/agora';
import React, { useRef } from 'react';
import { getSupportCandidate, hasSupportCandidate } from '@lib/utils';
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

interface CommentContainerProps {
  agoraId: string;
}

const CommentContainer = ({ agoraId }: CommentContainerProps) => {
  const queryClient = useQueryClient();
  const submitMessage = useMutation(
    ['postMessage'],
    ({ roomId, text, candidateId }: PostMessage) => postMessage({ roomId, text, candidateId }),
    {
      onSuccess: (data, variables, context) => {
        queryClient.invalidateQueries('getTalks');
      },
    },
  );
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleClick = () => {
    if (inputRef.current?.value) {
      const candidateId = +getSupportCandidate();
      submitMessage.mutate({ roomId: +agoraId, candidateId, text: inputRef.current?.value });
    }
  };

  return (
    <CommentContainerBlock onSubmit={e => e.preventDefault()}>
      <TalkInput ref={inputRef} />
      <Button>
        <Submit onClick={handleClick} />
      </Button>
    </CommentContainerBlock>
  );
};

export default CommentContainer;
