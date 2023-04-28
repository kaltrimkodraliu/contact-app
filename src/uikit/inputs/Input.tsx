import styles from './Input.module.css';

type Props = {
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ placeholder, onChange }: Props) => {
  return (
      <div className={`w-100  ${styles.TextInput}`}>
        <input
          className={styles.FormInput}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
  );
};

export default Input;