import Agora from './Agora';

import { Meta, ComponentStory } from '@storybook/react';

export default {
  title: 'Atoms/Agora',
  component: Agora,
} as Meta;

const Template: ComponentStory<typeof Agora> = args => <Agora {...args} />;

export const Default = Template.bind({});
Default.args = {};
