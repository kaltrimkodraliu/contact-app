import styles from './GeneralInput.module.css';

type Props = {
  label: string;
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const GeneralInput = ({ label, placeholder, onChange }: Props) => {
  return (
    <div className="d-flex align-items-center">
      <label className="me-3">{label}
      </label>
      <div className={`d-flex w-100 ${styles.TextInput}`}>
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