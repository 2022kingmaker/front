import React from 'react';

import { Meta, Story } from '@storybook/react';
import SideBar, { SideBarProps } from './SideBar';

export default {
  title: 'Atoms/SideBar',
  component: SideBar,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta;

const Template: Story<SideBarProps> = args => <SideBar {...args} />;

export const Default = Template.bind({});
Default.args = { categories: ['카테고리하나', '카테고리둘', '카테고리셋', '에너지/과학/기술'] };
