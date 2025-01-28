import {Meta, StoryFn} from '@storybook/react';
import ButtonDropdown, {
  ButtonDropdownProps,
} from 'components/Ui/Buttons/ButtonDropdown/ButtonSelectList';

export default {
  title: 'Components/Buttons/ButtonDropdown',
  component: ButtonDropdown,
  argTypes: {
    onChange: {action: 'changed'},
  },
} as Meta;

const Template: StoryFn<ButtonDropdownProps> = (args) => (
  <ButtonDropdown {...args} />
);

export const Default = Template.bind({});
Default.args = {
  fontsList: [10, 12, 14, 16, 20, 24, 32, 40, 48, 64, 96, 128],
};
