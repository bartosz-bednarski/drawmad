import ButtonListItem from 'components/Ui/Buttons/ButtonListItem/ButtonListItem';
import fileIcon from 'assets/icons/fileIcon.svg';
import saveIcon from 'assets/icons/saveIcon.svg';
import ButtonListItemInputFile from 'components/Ui/Buttons/ButtonListItemInputFile/ButtonListItemInputFile';

interface DropdownMenuInterface {
  saveCanvasStateHandler: () => void;
  loadCanvasStateHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const getDropdownMenu = ({
  saveCanvasStateHandler,
  loadCanvasStateHandler,
}: DropdownMenuInterface) => [
  <ButtonListItemInputFile
    title="Otwórz"
    icon={fileIcon}
    alt="ikona pliku"
    id="user-file"
    onChange={loadCanvasStateHandler}
  />,
  <ButtonListItem
    title="Zapisz"
    icon={saveIcon}
    alt="ikona dyskietki"
    onClick={saveCanvasStateHandler}
  />,
];

export default getDropdownMenu;
