import styles from '../buttons.module.scss';

export interface ButtonColorProps {
  inputType: 'button' | 'color';
  defaultColor: string;
  onClick?: () => void;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ButtonColor = ({
  onClick,
  onChange,
  defaultColor,
  inputType,
}: ButtonColorProps) => {
  if (inputType === 'button' && onClick)
    return (
      <input
        type="button"
        className={styles.buttonColor}
        style={{background: defaultColor}}
        onClick={onClick}
      ></input>
    );

  if (inputType === 'color' && onChange)
    return (
      <input
        type={inputType}
        className={styles.buttonColor}
        style={{background: defaultColor}}
        onChange={(e) => onChange(e)}
      ></input>
    );

  return null;
};

export default ButtonColor;
