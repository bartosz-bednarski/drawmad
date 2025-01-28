import ButtonIcon from 'components/Ui/Buttons/ButtonIcon/ButtonIcon';
import imgIcon from 'assets/icons/imgIcon.svg';
import cursorIcon from 'assets/icons/cursorIcon.svg';
import bgcolorFillIcon from 'assets/icons/bgcolorFillIcon.svg';
import textIcon from 'assets/icons/textIcon.svg';
import undoIcon from 'assets/icons/undoIcon.svg';
import {CursorType, SettingsSetType} from 'store/CanvasStore';
import ButtonIconInputImg from 'components/Ui/Buttons/ButtonIconInputImg/ButtonIconInputImg';

interface ToolsMenu {
  listItemOnClickHandler: (
    settingsSet: SettingsSetType,
    cursor: CursorType
  ) => void;
  handleImage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  undoFncHandler: () => void;
}

const getToolsMenu = ({
  listItemOnClickHandler,
  handleImage,
  undoFncHandler,
}: ToolsMenu) => [
  <ButtonIcon
    key="buttonIcon1"
    icon={cursorIcon}
    alt="ikona kursora"
    onClick={() => listItemOnClickHandler(null, 'default')}
  />,
  <ButtonIcon
    key="buttonIcon2"
    icon={undoIcon}
    alt="ikona strzalki wstecz"
    onClick={undoFncHandler}
  />,
  <ButtonIcon
    key="buttonIcon3"
    icon={bgcolorFillIcon}
    alt="ikona koloru tla"
    onClick={() => listItemOnClickHandler('bgColor', 'default')}
  />,
  <ButtonIcon
    key="buttonIcon4"
    icon={textIcon}
    alt="ikona tekstu"
    onClick={() => listItemOnClickHandler('text', 'text')}
  />,
  <ButtonIconInputImg
    key="buttonIconInputImg1"
    icon={imgIcon}
    alt="ikona obrazu"
    id="file-input"
    onChange={handleImage}
  />,
];

export default getToolsMenu;
