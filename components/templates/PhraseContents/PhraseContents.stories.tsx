import React from 'react';
import PhraseContents, { ContentsProps } from './PhraseContents';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Templates/Contents',
  component: PhraseContents,
} as Meta;

const Template: Story<ContentsProps> = args => <PhraseContents {...args} />;

export const Default = Template.bind({});
Default.args = {};
