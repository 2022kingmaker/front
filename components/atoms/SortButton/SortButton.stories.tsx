import SortButton from './SortButton';

import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/SortButton',
  component: SortButton,
} as Meta;

const Template: ComponentStory<typeof SortButton> = args => <SortButton {...args} />;

export const Default = Template.bind({});
Default.args = {};
