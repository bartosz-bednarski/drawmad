import {Meta, StoryFn} from '@storybook/react/*';
import fileIcon from 'assets/icons/fileIcon.svg';
import ButtonListItemInputFile, {
  ButtonListItemInputFileProps,
} from 'components/Ui/Buttons/ButtonListItemInputFile/ButtonListItemInputFile';

export default {
  title: 'Components/Buttons/ButtonListItemInputFile',
  component: ButtonListItemInputFile,
  argTypes: {
    onChange: {action: 'changed'},
    alt: {control: {type: 'text'}},
    title: {control: {type: 'text'}},
  },
} as Meta;

const Template: StoryFn<ButtonListItemInputFileProps> = (args) => (
  <ButtonListItemInputFile {...args} />
);

export const Load = Template.bind({});
Load.args = {
  icon: fileIcon,
  alt: 'fileIcon',
  title: 'Otwórz',
};
