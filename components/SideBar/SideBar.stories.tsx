import React from 'react';

import { Meta, Story } from '@storybook/react';
import SideBar, { SideBarProps } from './SideBar';

export default {
  title: 'Components/SideBar',
  component: SideBar,
} as Meta;

const Template: Story<SideBarProps> = args => <SideBar {...args} />;

export const Basic = Template.bind({});
Basic.args = { categories: ['카테고리하나'] };

export const Test1 = Template.bind({});
Test1.args = { categories: [] };
