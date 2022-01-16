import React from 'react';
import Pledges, { PledgesProps } from './Pledges';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Organisms/Pledges',
  component: Pledges,
} as Meta;

const Template: Story<PledgesProps> = args => <Pledges {...args} />;

export const Default = Template.bind({});
Default.args = {};
