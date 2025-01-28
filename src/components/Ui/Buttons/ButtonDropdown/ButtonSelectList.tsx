import {FontSizeType} from 'store/CanvasStore';
import styles from '../buttons.module.scss';

export interface ButtonDropdownProps {
  fontsList: FontSizeType[];
  onChange: (fontSize: FontSizeType) => void;
}

const ButtonDropdown = ({fontsList, onChange}: ButtonDropdownProps) => {
  const onChangeHandler = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = Number(e.target.value) as FontSizeType;
    onChange(value);
  };

  return (
    <select
      className={styles.buttonSelectList}
      id="fontSizeBox"
      onChange={onChangeHandler}
    >
      {fontsList.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
export default ButtonDropdown;
