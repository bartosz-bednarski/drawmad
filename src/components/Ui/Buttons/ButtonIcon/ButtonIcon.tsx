import styles from '../buttons.module.scss';

export interface ButtonIconProps {
  icon: string;
  onClick: () => void;
  alt: string;
}

const ButtonIcon = ({icon, alt, onClick}: ButtonIconProps) => {
  return (
    <button className={styles.buttonIcon} onClick={onClick}>
      <img src={icon} alt={alt} />
    </button>
  );
};

export default ButtonIcon;
