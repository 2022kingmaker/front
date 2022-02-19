import styled from 'styled-components';
import SortButton from '@atoms/SortButton/SortButton';
import Agora from '@atoms/Agora/Agora';

const TalksContentsBlock = styled.div`
  position: relative;
  padding: 44px 30px 0 230px;
  height: 100vh;
  overflow: scroll;
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
          <Agora agenda={'e'} description={'e'} talks={[]} />
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
