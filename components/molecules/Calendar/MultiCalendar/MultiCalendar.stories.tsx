import MultiCalendar from './MultiCalendar';

import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'molecules/MultiCalendar',
  component: MultiCalendar,
} as Meta;

const Template: ComponentStory<typeof MultiCalendar> = args => <MultiCalendar {...args} />;

export const Default = Template.bind({});
Default.args = {};
