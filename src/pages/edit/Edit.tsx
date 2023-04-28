import GeneralButton from "../../uikit/buttons/GeneralButton";
import GeneralInput from "../../uikit/inputs/GeneralInput";
import styles from './Edit.module.css';

const Edit = () => {

  return (
    <div className= {`w-100 mt-5 d-flex align-items-center justify-content-center`}>
      
      <div className={`d-flex flex-column ${styles.divContainer}`}>
      <h2>Register new contact</h2>
        <GeneralInput label="Name:" />
        <div className="mt-2">
        <GeneralInput label="Last Name:" />
        </div>
        <div className="mt-2">
          <GeneralInput label="Address:" />
        </div>
        <div className="mt-2">
        <GeneralInput label="City:" />
        </div>
        <div className="mt-2">
        <GeneralInput label="Country:" />
        </div>
        <div className="d-flex mt-2">
        <div className={`${styles.inputContainer}`}>
        <GeneralInput label="Email:" />
        </div>
        <div className={`d-flex ${styles.buttonAdd}`}>
        <GeneralButton text="Add"></GeneralButton>
        </div>
        </div>
        <div className="d-flex mt-2">
        <div className={`${styles.inputContainer}`}>
        <GeneralInput label="Number:" />
        </div>
        <div className={`d-flex ${styles.buttonAdd}`}>
        <GeneralButton text="Add"></GeneralButton>
        </div>
        </div>
        
        <div className={styles.buttonContainer}>
          <GeneralButton text="Save"></GeneralButton>
        </div>
      </div>
    </div>
   
    
  );
};

export default Edit;

