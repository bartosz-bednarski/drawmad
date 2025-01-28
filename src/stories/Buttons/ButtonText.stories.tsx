import {Meta, StoryFn} from '@storybook/react/*';
import ButtonListItem from 'components/Ui/Buttons/ButtonListItem/ButtonListItem';
import ButtonText, {
  ButtonTextProps,
} from 'components/Ui/Buttons/ButtonText/ButtonText';

export default {
  title: 'Components/Buttons/ButtonText',
  component: ButtonListItem,
  argTypes: {
    onClick: {action: 'clicked'},
    text: {control: {type: 'text'}},
  },
} as Meta;

const Template: StoryFn<ButtonTextProps> = (args) => <ButtonText {...args} />;
export const Default = Template.bind({});
Default.args = {
  text: 'Zapisz',
};
