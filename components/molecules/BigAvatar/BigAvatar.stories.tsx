import React from 'react';
import BigAvatar, { BigAvatarProps } from './BigAvatar';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Molecules/BigAvatar',
  component: BigAvatar,
} as Meta;

const Template: Story<BigAvatarProps> = args => <BigAvatar {...args} />;

export const Default = Template.bind({});
Default.args = {};
