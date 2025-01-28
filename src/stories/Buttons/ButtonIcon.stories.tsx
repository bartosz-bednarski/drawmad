import {Meta, StoryFn} from '@storybook/react';
import ButtonIcon, {
  ButtonIconProps,
} from 'components/Ui/Buttons/ButtonIcon/ButtonIcon';
import fileIcon from 'assets/icons/fileIcon.svg';
import saveIcon from 'assets/icons/saveIcon.svg';
import imgIcon from 'assets/icons/imgIcon.svg';
import cursorIcon from 'assets/icons/cursorIcon.svg';
import bgcolorFillIcon from 'assets/icons/bgcolorFillIcon.svg';
import textIcon from 'assets/icons/textIcon.svg';
import undoIcon from 'assets/icons/undoIcon.svg';
import fontNormalIcon from 'assets/icons/fontNormalIcon.svg';
import fontItalicIcon from 'assets/icons/fontItalicIcon.svg';
import fontWeightNormal from 'assets/icons/fontWeightNormalIcon.svg';
import fontWeightSemiBold from 'assets/icons/fontWeightSemiBoldIcon.svg';
import fontWeightBold from 'assets/icons/fontWeightBoldIcon.svg';
import trashIcon from 'assets/icons/trashIcon.svg';
export default {
  title: 'Components/Buttons/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
    onClick: {action: 'clicked'},
    alt: {control: {type: 'text'}},
  },
} as Meta;

const Template: StoryFn<ButtonIconProps> = (args) => <ButtonIcon {...args} />;

export const FileIcon = Template.bind({});
FileIcon.args = {
  icon: fileIcon,
  alt: 'fileIcon',
};

export const SaveIcon = Template.bind({});
SaveIcon.args = {
  icon: saveIcon,
  alt: 'saveIcon',
};

export const ImgIcon = Template.bind({});
ImgIcon.args = {
  icon: imgIcon,
  alt: 'imgIcon',
};

export const CursorIcon = Template.bind({});
CursorIcon.args = {
  icon: cursorIcon,
  alt: 'cursorIcon',
};

export const BgcolorFillIcon = Template.bind({});
BgcolorFillIcon.args = {
  icon: bgcolorFillIcon,
  alt: 'bgcolorFillIcon',
};

export const TextIcon = Template.bind({});
TextIcon.args = {
  icon: textIcon,
  alt: 'textIcon',
};

export const UndoIcon = Template.bind({});
UndoIcon.args = {
  icon: undoIcon,
  alt: 'undoIcon',
};

export const FontNormalIcon = Template.bind({});
FontNormalIcon.args = {
  icon: fontNormalIcon,
  alt: 'fontNormalIcon',
};

export const FontItalicIcon = Template.bind({});
FontItalicIcon.args = {
  icon: fontItalicIcon,
  alt: 'fontItalicIcon',
};

export const FontWeightNormal = Template.bind({});
FontWeightNormal.args = {
  icon: fontWeightNormal,
  alt: 'fontWeightNormal',
};

export const FontWeightSemiBold = Template.bind({});
FontWeightSemiBold.args = {
  icon: fontWeightSemiBold,
  alt: 'fontWeightSemiBold',
};

export const FontWeightBold = Template.bind({});
FontWeightBold.args = {
  icon: fontWeightBold,
  alt: 'fontWeightBold',
};

export const TrashIcon = Template.bind({});
TrashIcon.args = {
  icon: trashIcon,
  alt: 'trashIcon',
};

