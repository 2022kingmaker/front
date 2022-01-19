import React from 'react';
import Avatar, { AvatarProps } from './Avatar';

import { Meta, Story } from '@storybook/react';

export default {
  title: 'Atoms/Avatar',
  component: Avatar,
} as Meta;

const Template: Story<AvatarProps> = args => <Avatar {...args} />;

// export const firstCandidate = Template.bind({});
// firstCandidate.args = {
//   imgUrl: 'http://localhost:3000/images/candidate1.png',
// };
//
// export const secondCandidate = Template.bind({});
// secondCandidate.args = {
//   imgUrl: 'http://localhost:3000/images/candidate2.png',
// };
//
// export const thirdCandidate = Template.bind({});
// thirdCandidate.args = {
//   imgUrl: 'http://localhost:3000/images/candidate3.png',
// };
//
// export const fourthCandidate = Template.bind({});
// fourthCandidate.args = {
//   imgUrl: 'http://localhost:3000/images/candidate4.png',
// };
