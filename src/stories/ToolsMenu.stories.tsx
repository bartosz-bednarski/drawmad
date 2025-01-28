import {Meta, StoryFn} from '@storybook/react';
import ToolsMenu from '../components/MenuTop/ToolsMenu/ToolsMenu';

export default {
  title: 'Components/ToolsMenu',
  component: ToolsMenu,
} as Meta;

const Template: StoryFn = (args) => <ToolsMenu {...args} />;

export const Default = Template.bind({});
