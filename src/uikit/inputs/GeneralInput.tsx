import styles from './GeneralInput.module.css';

type Props = {
  label?: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const GeneralInput = ({ label, placeholder, onChange }: Props) => {
  return (
    <div className={`w-100 ${styles.textLabel}`}>
      <label>{label}
      </label>
      <div className={`w-100 mt-2 ${styles.TextInput}`}>
        <input
          className={styles.FormInput}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default GeneralInput;