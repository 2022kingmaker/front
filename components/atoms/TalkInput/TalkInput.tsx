import styled from 'styled-components';
import React, { forwardRef } from 'react';

const MAX_HEIGHT = 141;
const HEIGHT_UNIT = 3;

const TalkInputBlock = styled.textarea`
  width: 100%;
  border-radius: 10px;
  border: 0.5px solid #c4c4c4;
  height: 42px;
  resize: none;
  padding: 8px 45px 8px 8px;
  font-size: 16px;
`;

const TalkInput = forwardRef((_, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
  const resizeHeight = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const $textArea = e.target as HTMLTextAreaElement;
    if ($textArea.scrollHeight >= MAX_HEIGHT) {
      return;
    }
    $textArea.style.height = '1px';
    $textArea.style.height = HEIGHT_UNIT + $textArea.scrollHeight + 'px';
  };
  return (
    <TalkInputBlock
      onKeyDown={resizeHeight}
      onKeyUp={resizeHeight}
      placeholder={'너의 댓글 삭제될 수 있다.'}
      spellCheck={false}
      ref={ref}
    />
  );
});

export default TalkInput;
