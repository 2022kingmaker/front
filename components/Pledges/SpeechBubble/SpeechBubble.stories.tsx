import React from 'react';
import SpeechBubble, { SpeechBubbleProps } from './SpeechBubble';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Components/SpeechBubble',
  component: SpeechBubble,
} as Meta;

const Template: Story<SpeechBubbleProps> = args => <SpeechBubble {...args} />;

export const Default = Template.bind({});
Default.args = {};
