import {Meta, StoryFn} from '@storybook/react/*';
import ButtonListItem, {
  ButtonListItemProps,
} from 'components/Ui/Buttons/ButtonListItem/ButtonListItem';
import saveIcon from 'assets/icons/saveIcon.svg';
export default {
  title: 'Components/Buttons/ButtonListItem',
  component: ButtonListItem,
  argTypes: {
    onClick: {action: 'clicked'},
    alt: {control: {type: 'text'}},
    title: {control: {type: 'text'}},
  },
} as Meta;

const Template: StoryFn<ButtonListItemProps> = (args) => (
  <ButtonListItem {...args} />
);
export const Save = Template.bind({});
Save.args = {
  icon: saveIcon,
  alt: 'saveIcon',
  title: 'Zapisz',
};
