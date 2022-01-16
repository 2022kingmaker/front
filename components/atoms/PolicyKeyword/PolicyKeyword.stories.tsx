import React from 'react';
import PolicyKeyword, { PolicyKeywordProps } from './PolicyKeyword';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Atoms/PolicyKeyword',
  component: PolicyKeyword,
} as Meta;

const Template: Story<PolicyKeywordProps> = args => <PolicyKeyword {...args} />;

export const Default = Template.bind({});
Default.args = {};
