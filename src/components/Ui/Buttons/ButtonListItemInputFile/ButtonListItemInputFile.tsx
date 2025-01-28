import styles from '../buttons.module.scss';

export interface ButtonListItemInputFileProps {
  icon: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  alt: string;
  title: string;
  id: string;
}

const ButtonListItemInputFile = ({
  icon,
  onChange,
  alt,
  title,
  id,
}: ButtonListItemInputFileProps) => {
  return (
    <button className={styles.buttonListItemInputFile}>
      <label htmlFor={id}>
        <input
          style={{display: 'none'}}
          id={id}
          data-testid="input-file-upload"
          type="file"
          onChange={onChange}
        ></input>
        <img src={icon} alt={alt} /> {title}
      </label>
    </button>
  );
};

export default ButtonListItemInputFile;
