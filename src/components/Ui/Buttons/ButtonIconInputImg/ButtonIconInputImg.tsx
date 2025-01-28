import styles from '../buttons.module.scss';

export interface ButtonIconInputImgProps {
  icon: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  alt: string;
  id: string;
}

const ButtonIconInputImg = ({
  icon,
  alt,
  onChange,
  id,
}: ButtonIconInputImgProps) => {
  return (
    <button className={styles.buttonIcon}>
      <label htmlFor={id}>
        <input
          style={{display: 'none'}}
          id={id}
          type="file"
          onChange={onChange}
        ></input>
        <img src={icon} alt={alt} />
      </label>
    </button>
  );
};

export default ButtonIconInputImg;
