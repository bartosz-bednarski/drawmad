import styles from '../buttons.module.scss';

export interface ButtonListItemProps {
  icon: string;
  onClick: () => void;
  alt: string;
  title: string;
}

const ButtonListItem = ({icon, onClick, alt, title}: ButtonListItemProps) => {
  return (
    <button className={styles.buttonListItem} onClick={onClick}>
      <img src={icon} alt={alt} />
      {title}
    </button>
  );
};
export default ButtonListItem;
