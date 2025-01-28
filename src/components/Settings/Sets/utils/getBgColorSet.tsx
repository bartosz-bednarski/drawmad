import ButtonColor from 'components/Ui/Buttons/ButtonColor/ButtonColor';

interface BgColorSet {
  changeBgColorHandler: (color: string) => void;
  setColorInputHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const getBgColorSet = ({
  changeBgColorHandler,
  setColorInputHandler,
}: BgColorSet) => [
  {
    label: 'Kolor tła',
    content: [
      <ButtonColor
        key="bgColor1"
        inputType="button"
        defaultColor="#d6d6d6"
        onClick={() => changeBgColorHandler('#d6d6d6')}
      />,
      <ButtonColor
        key="bgColor2"
        inputType="button"
        defaultColor="#f8f9fa"
        onClick={() => changeBgColorHandler('#f8f9fa')}
      />,
      <ButtonColor
        key="bgColor3"
        inputType="button"
        defaultColor="#f5faff"
        onClick={() => changeBgColorHandler('#f5faff')}
      />,
      <ButtonColor
        key="bgColor4"
        inputType="button"
        defaultColor="#fffce8"
        onClick={() => changeBgColorHandler('#fffce8')}
      />,
      <ButtonColor
        key="bgColor5"
        inputType="color"
        defaultColor="black"
        onChange={(e) => setColorInputHandler(e)}
      />,
    ],
  },
];

export default getBgColorSet;
