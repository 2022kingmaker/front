import React from 'react';
import styled from 'styled-components';

const RECT_CLIP = [
  `3% 0, 94% 5%, 98% 95%, 0% 100%`,
  `3% 6%, 100% 0, 96% 100%, 5% 98%`,
  `0 0, 96% 4%, 93% 90%, 1% 99%`,
  `0 0, 100% 2%, 90% 100%, 4% 94%`,
];

const SpeechRectBlock = styled.div<Partial<SpeechRectProps>>`
  position: relative;
  width: 550px;
  min-height: 300px;
  background: ${({ theme, backgroundColor }) => theme.colors[backgroundColor!]};
  padding: 50px;
  clip-path: polygon(${({ rectType }) => RECT_CLIP[rectType! % 3]});

  h2 {
    font-size: 24px;
    color: white;
    margin-bottom: 20px;
  }
  p {
    color: white;
    white-space: pre-line;
  }
`;

export interface SpeechRectProps {
  backgroundColor: string;
  phrase: string;
  text: string;
  rectType: number;
}

const SpeechRect = ({ backgroundColor = 'black', phrase, text, rectType = 0 }: SpeechRectProps) => {
  return (
    <SpeechRectBlock data-phrase={phrase} backgroundColor={backgroundColor} rectType={rectType}>
      <h2>{phrase}</h2>
      <p>{text.replaceAll('\\n', '\n')}</p>
    </SpeechRectBlock>
  );
};

export default SpeechRect;
