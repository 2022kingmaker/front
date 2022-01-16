import React from 'react';
import Phrase, { PhraseProps } from './Phrase';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Molecules/Phrase',
  component: Phrase,
} as Meta;

const Template: Story<PhraseProps> = args => <Phrase {...args} />;

export const Default = Template.bind({});
Default.args = {};
