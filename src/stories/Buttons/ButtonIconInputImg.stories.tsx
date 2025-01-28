import {Meta, StoryFn} from '@storybook/react/*';
import ButtonIconInputImg, {
  ButtonIconInputImgProps,
} from 'components/Ui/Buttons/ButtonIconInputImg/ButtonIconInputImg';
import imgIcon from 'assets/icons/imgIcon.svg';

export default {
  title: 'Components/Buttons/ButtonIconInputImg',
  component: ButtonIconInputImg,
  argTypes: {
    onChange: {action: 'changed'},
    alt: {control: {type: 'text'}},
  },
} as Meta;

const Template: StoryFn<ButtonIconInputImgProps> = (args) => (
  <ButtonIconInputImg {...args} />
);
export const Default = Template.bind({});
Default.args = {
  icon: imgIcon,
  alt: 'imgIcon',
};
