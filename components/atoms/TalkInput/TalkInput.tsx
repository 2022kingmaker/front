import styled from 'styled-components';
import React, { forwardRef } from 'react';
import { InputEventType, KeyCodeType } from '@lib/constant';
import { useRecoilState } from 'recoil';
import { inputState } from '../../../states/inputState';

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
  ::placeholder {
    font-size: 14px;
  }
`;

interface TalkInputProps {
  mutationMessage: (text: string) => void;
}

const TalkInput = forwardRef(({ mutationMessage }: TalkInputProps, ref: React.ForwardedRef<HTMLTextAreaElement>) => {
  const [input, setInput] = useRecoilState(inputState);

  const resizeHeight = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const $textArea = e.target as HTMLTextAreaElement;
    if ($textArea.scrollHeight >= MAX_HEIGHT) {
      return;
    }
    $textArea.style.height = '1px';
    $textArea.style.height = HEIGHT_UNIT + $textArea.scrollHeight + 'px';
  };
  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    const isPressShift = e.shiftKey;
    const keyCode = e.code;

    if (!isPressShift && (keyCode === KeyCodeType.NumpadEnter || keyCode === KeyCodeType.Enter)) {
      mutationMessage(input);
      return;
    }
    if (isPressShift && keyCode === KeyCodeType.Enter) {
      setInput(prev => prev + '\n');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { inputType } = e.nativeEvent as InputEvent;
    if (inputType === InputEventType.insertLineBreak) {
      return;
    }
    setInput(e.target.value);
  };

  return (
    <TalkInputBlock
      onKeyDown={resizeHeight}
      onKeyUp={resizeHeight}
      onKeyPress={handleKeyPress}
      onChange={handleChange}
      placeholder={'작성된 의견은 수정/삭제할 수 없습니다.'}
      spellCheck={false}
      value={input}
      ref={ref}
    />
  );
});

TalkInput.displayName = 'TalkInput';

export default TalkInput;
