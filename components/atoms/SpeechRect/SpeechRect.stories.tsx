import React from 'react';
import SpeechRect, { SpeechRectProps } from './SpeechRect';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Atoms/SpeechRect',
  component: SpeechRect,
} as Meta;

const Template: Story<SpeechRectProps> = args => <SpeechRect {...args} />;

export const Type0 = Template.bind({});
Type0.args = {
  rectType: 0,
  backgroundColor: '#1F4D9C',
};

export const Type1 = Template.bind({});
Type1.args = {
  rectType: 1,
  backgroundColor: '#D33736',
};

export const Type2 = Template.bind({});
Type2.args = {
  rectType: 2,
  backgroundColor: '#F7CE46',
};

export const Type3 = Template.bind({});
Type3.args = {
  rectType: 3,
  backgroundColor: '#D95F29',
};
