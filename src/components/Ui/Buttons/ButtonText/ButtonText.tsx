import styles from '../buttons.module.scss';

export interface ButtonTextProps {
  text: string;
  onClick: () => void;
}

const ButtonText = ({text, onClick}: ButtonTextProps) => {
  return (
    <button className={styles.buttonText} onClick={onClick}>
      {text}
    </button>
  );
};

export default ButtonText;
