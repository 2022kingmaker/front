import Calendar from './Calendar';

import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Molecules/Calendar',
  component: Calendar,
} as Meta;

const Template: ComponentStory<typeof Calendar> = args => <Calendar {...args} />;

export const Default = Template.bind({});
Default.args = {};
