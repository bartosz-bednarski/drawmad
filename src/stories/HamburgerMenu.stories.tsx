import {Meta, StoryFn} from '@storybook/react';
import HamburgerMenu from '../components/MenuTop/HamburgerMenu/HamburgerMenu';

export default {
  title: 'Components/HamburgerMenu',
  component: HamburgerMenu,
} as Meta;

const Template: StoryFn = (args) => <HamburgerMenu {...args} />;

export const Default = Template.bind({});
