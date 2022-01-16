import React from 'react';
import Opinion, { OpinionProps } from './Opinion';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Molecules/Opinion',
  component: Opinion,
} as Meta;

const Template: Story<OpinionProps> = args => <Opinion {...args} />;

export const Default = Template.bind({});
Default.args = {};
