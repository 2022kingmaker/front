import styled from 'styled-components';
import React, { forwardRef } from 'react';
import { InputEventType, KeyCodeType } from '@lib/constant';

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

interface TalkInputProps {
  mutationMessage: (text: string) => void;
}

const TalkInput = forwardRef(({ mutationMessage }: TalkInputProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
  const resizeHeight = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const $textArea = e.target as HTMLTextAreaElement;
    if ($textArea.scrollHeight >= MAX_HEIGHT) {
      return;
    }
    $textArea.style.height = '1px';
    $textArea.style.height = HEIGHT_UNIT + $textArea.scrollHeight + 'px';
  };
  const handleKeyPress = (e: any) => {
    const isPressShift = e.shiftKey;
    const keyCode = e.code;

    if (!isPressShift && (keyCode === KeyCodeType.NumpadEnter || keyCode === KeyCodeType.Enter)) {
      mutationMessage(e.target.value);
      return;
    }
  };
  return (
    <TalkInputBlock
      onKeyDown={resizeHeight}
      onKeyUp={resizeHeight}
      onKeyPress={handleKeyPress}
      placeholder={'너의 댓글 삭제될 수 있다.'}
      spellCheck={false}
      ref={ref}
    />
  );
});

TalkInput.displayName = 'TalkInput';

export default TalkInput;
