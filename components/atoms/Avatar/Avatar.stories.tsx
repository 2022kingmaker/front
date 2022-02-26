import React from 'react';
import Avatar, { AvatarProps } from './Avatar';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

export const firstCandidate = Template.bind({});
firstCandidate.args = {
  imgId: 1,
  size: 55,
};
