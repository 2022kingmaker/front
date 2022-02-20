import styled from 'styled-components';
import TalkInput from '@atoms/TalkInput/TalkInput';
import { flexBox } from '@styles/mixin';
import { Avatar } from '@atoms/index';
import { Writer } from '@atoms/TalkBubble/TalkBubble';
import Submit from '@assets/icons/submit.svg';

const CommentContainerBlock = styled.form<{ toggle: boolean }>`
  ${flexBox('center', 'flex-start')};
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: auto;

  @media ${({ theme }) => theme.desktop} {
    width: 100%;
    height: auto;
  }
  position: absolute;
  bottom: 50px;
  display: ${({ toggle }) => (toggle ? 'flex' : 'none')};
`;
const InputContainer = styled.section`
  margin-left: 5px;
  width: 90%;
  height: 180px;
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
  padding: 4px 12px 0 12px;
  border-top: 1px solid rgba(162, 162, 162, 0.54);
`;

const InfoTab = styled.div``;
const ButtonTab = styled.div`
  button {
    ${flexBox()};
    width: 45px;
    height: 35px;
    border: none;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.primary};
  }
`;

interface CommentContainerProps {
  toggle: boolean;
}

const CommentContainer = ({ toggle }: CommentContainerProps) => {
  return (
    <CommentContainerBlock toggle={toggle}>
      <Avatar writer={'고양이'} />
      <InputContainer>
        <CommentWriter>고양이</CommentWriter>
        <TalkInput height={80} />
        <ToolBox>
          <InfoTab>0/500</InfoTab>
          <ButtonTab>
            <button children={<Submit />} />
          </ButtonTab>
        </ToolBox>
      </InputContainer>
    </CommentContainerBlock>
  );
};

export default CommentContainer;
