import QuestionMark from './QuestionMark';

import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'atoms/QuestionMark',
  component: QuestionMark,
} as Meta;

const Template: ComponentStory<typeof QuestionMark> = props => <QuestionMark {...props} />;

export const Default = Template.bind({});
Default.args = {};
