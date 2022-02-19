import Talk from './Talk';

import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/Talk',
  component: Talk,
} as Meta;

const Template: ComponentStory<typeof Talk> = args => <Talk {...args} />;

export const Default = Template.bind({});
Default.args = {};
