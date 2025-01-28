import ButtonColor from 'components/Ui/Buttons/ButtonColor/ButtonColor';
import ButtonIcon from 'components/Ui/Buttons/ButtonIcon/ButtonIcon';
import fontNormalIcon from 'assets/icons/fontNormalIcon.svg';
import fontItalicIcon from 'assets/icons/fontItalicIcon.svg';
import fontWeightNormal from 'assets/icons/fontWeightNormalIcon.svg';
import fontWeightSemiBold from 'assets/icons/fontWeightSemiBoldIcon.svg';
import fontWeightBold from 'assets/icons/fontWeightBoldIcon.svg';
import trashIcon from 'assets/icons/trashIcon.svg';
import {FontSizeType, FontStyleType, FontWeightType} from 'store/CanvasStore';
import ButtonDropdown from 'components/Ui/Buttons/ButtonDropdown/ButtonSelectList';

interface TextSet {
  changeTextColorHandler: (color: string) => void;
  setColorInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setFontStyleHandler: (style: FontStyleType) => void;
  setFontWeightHandler: (weight: FontWeightType) => void;
  setFontSizeHandler: (size: FontSizeType) => void;
  deleteActiveObjectHandler: () => void;
}

const FONT_SIZES_LIST: FontSizeType[] = [
  10, 12, 14, 16, 20, 24, 32, 40, 48, 64, 96, 128,
];

const getTextSet = ({
  changeTextColorHandler,
  setColorInputHandler,
  setFontStyleHandler,
  setFontWeightHandler,
  setFontSizeHandler,
  deleteActiveObjectHandler,
}: TextSet) => [
  {
    label: 'Kolor tekstu',
    content: [
      <ButtonColor
        key="textColor1"
        inputType="button"
        defaultColor="#d6d6d6"
        onClick={() => changeTextColorHandler('#d6d6d6')}
      />,
      <ButtonColor
        key="textColor2"
        inputType="button"
        defaultColor="#f8f9fa"
        onClick={() => changeTextColorHandler('#f8f9fa')}
      />,
      <ButtonColor
        key="textColor3"
        inputType="button"
        defaultColor="#f5faff"
        onClick={() => changeTextColorHandler('#f5faff')}
      />,
      <ButtonColor
        key="textColor4"
        inputType="button"
        defaultColor="#fffce8"
        onClick={() => changeTextColorHandler('#fffce8')}
      />,
      <ButtonColor
        key="textColor5"
        inputType="color"
        defaultColor="black"
        onChange={(e) => setColorInputHandler(e)}
      />,
    ],
  },
  {
    label: 'Styl czcionki',
    content: [
      <ButtonIcon
        key="fontStyleNormal"
        icon={fontNormalIcon}
        alt="ikona czcionka normalna"
        onClick={() => setFontStyleHandler('normal')}
      />,
      <ButtonIcon
        key="fontStyleItalic"
        icon={fontItalicIcon}
        alt="ikona czcionka pochylona"
        onClick={() => setFontStyleHandler('italic')}
      />,
    ],
  },
  {
    label: 'Waga czcionki',
    content: [
      <ButtonIcon
        key="fontWeightNormal"
        icon={fontWeightNormal}
        alt="ikona czcionka normalna"
        onClick={() => setFontWeightHandler('400')}
      />,
      <ButtonIcon
        key="fontWeightSemiBold"
        icon={fontWeightSemiBold}
        alt="ikona czcionka średnio-gruba"
        onClick={() => setFontWeightHandler('600')}
      />,
      <ButtonIcon
        key="fontWeightBold"
        icon={fontWeightBold}
        alt="ikona gruba"
        onClick={() => setFontWeightHandler('800')}
      />,
    ],
  },
  {
    label: 'Rozmiar czcionki',
    content: [
      <ButtonDropdown
        key="dropdownList"
        fontsList={FONT_SIZES_LIST}
        onChange={(fontSize) => setFontSizeHandler(fontSize)}
      />,
    ],
  },
  {
    label: 'Akcje',
    content: [
      <ButtonIcon
        key="delete"
        icon={trashIcon}
        alt="ikona kosz"
        onClick={deleteActiveObjectHandler}
      />,
    ],
  },
];

export default getTextSet;
