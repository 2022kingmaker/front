import styled from 'styled-components';

const TalkInputBlock = styled.textarea<Partial<TalkInputProps>>`
  width: 100%;
  border-radius: 10px;
  border: 0.5px solid #c4c4c4;
  height: ${({ height }) => height}px;
  resize: none;
  padding: 12px 8px;
`;

interface TalkInputProps {
  height: number;
}

const TalkInput = ({ height }: TalkInputProps) => {
  return <TalkInputBlock height={height} placeholder={'너의 댓글 삭제될 수 있다.'} spellCheck={false} />;
};

export default TalkInput;
