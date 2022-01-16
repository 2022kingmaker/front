import React from 'react';
import OpinionContents, { OpinionContentsProps } from './OpinionContents';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Templates/OpinionContents',
  component: OpinionContents,
} as Meta;

const Template: Story<OpinionContentsProps> = args => <OpinionContents {...args} />;

export const Default = Template.bind({});
Default.args = {};
