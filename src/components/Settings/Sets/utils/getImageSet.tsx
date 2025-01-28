import ButtonIcon from 'components/Ui/Buttons/ButtonIcon/ButtonIcon';
import trashIcon from 'assets/icons/trashIcon.svg';
import {ImageFiltersType} from './imageFilters';
import ButtonText from 'components/Ui/Buttons/ButtonText/ButtonText';

interface ImageSet {
  deleteActiveObjectHandler: () => void;
  setImageFilterHandler: (imageFilter: ImageFiltersType) => void;
}

const getImageSet = ({
  deleteActiveObjectHandler,
  setImageFilterHandler,
}: ImageSet) => [
  {
    label: 'Filtry',
    content: [
      <ButtonText
        key="grayScale"
        text="GrayScale"
        onClick={() => setImageFilterHandler('grayscale')}
      />,
      <ButtonText
        key="hsl"
        text="HSL"
        onClick={() => setImageFilterHandler('hsl')}
      />,
      <ButtonText
        key="pointillize"
        text="Pointillize"
        onClick={() => setImageFilterHandler('pointillize')}
      />,
      <ButtonText
        key="sepia"
        text="Sepia"
        onClick={() => setImageFilterHandler('sepia')}
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

export default getImageSet;
