import {Meta, StoryFn} from '@storybook/react';
import ButtonColor, {
  ButtonColorProps,
} from 'components/Ui/Buttons/ButtonColor/ButtonColor';

export default {
  title: 'Components/Buttons/ButtonColor',
  component: ButtonColor,
  argTypes: {
    defaultColor: {control: 'color'},
    onClick: {action: 'clicked'},
    onChange: {action: 'changed'},
  },
} as Meta;

const Template: StoryFn<ButtonColorProps> = (args) => <ButtonColor {...args} />;

export const Button = Template.bind({});
Button.args = {
  inputType: 'button',
  defaultColor: '#007bff',
  onClick: () => console.log('Button clicked!'),
};

export const InputColor = Template.bind({});
InputColor.args = {
  inputType: 'color',
  defaultColor: '#ff0000',
  onChange: (e) => console.log('Color changed:', e.target.value),
};
