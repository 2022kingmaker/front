import styled from 'styled-components';
import SortButton from '@atoms/SortButton/SortButton';
import Agora from '@atoms/Agora/Agora';

const TalksContentsBlock = styled.div`
  position: relative;
  padding: 80px 30px 0 230px;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;

  width: 100%;
  @media ${({ theme }) => theme.desktop} {
    width: 100%;
    padding: 125px 12px 200px 12px;
    .topic-container {
      width: 100%;
    }
  }
`;

const TalksContents = () => {
  return (
    <TalksContentsBlock>
      <SortButton />
      <ul>
        <li>
          <Agora
            agenda={'야권 단일화 어떻게 생각하시나요?'}
            description={
              '모든 후보가 공격적인 일자리 창출 공약을 내걸고 있는데요. 여러분의 생각은 어떠신가요?\n' +
              '자유로운 의견 나눠주세요!'
            }
            talks={[]}
          />
        </li>
        <li>
          <Agora agenda={'e'} description={'e'} talks={[]} />
        </li>
        <li>
          <Agora agenda={'e'} description={'e'} talks={[]} />
        </li>
        <li>
          <Agora agenda={'e'} description={'e'} talks={[]} />
        </li>
      </ul>
    </TalksContentsBlock>
  );
};

export default TalksContents;
