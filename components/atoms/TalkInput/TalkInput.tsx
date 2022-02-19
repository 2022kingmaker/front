import styled from 'styled-components';

const TalkInputBlock = styled.textarea<Partial<TalkInputProps>>`
  width: 100%;
  height: ${({ height }) => height}px;
  resize: none;
  border: none;
`;

interface TalkInputProps {
  height: number;
}

const TalkInput = ({ height }: TalkInputProps) => {
  return <TalkInputBlock height={height} placeholder={'너의 댓글 삭제될 수 있다.'} />;
};

export default TalkInput;
