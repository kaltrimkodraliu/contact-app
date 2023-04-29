import Navbar from "../../components/Navbar";
import GeneralButton from "../../uikit/buttons/GeneralButton";
import GeneralInput from "../../uikit/inputs/GeneralInput";
import styles from './Edit.module.css';

const Edit = () => {

  return (
    <div>
      <Navbar text="PhoneBook"></Navbar>
    
    <div className= {`w-100 mt-5 d-flex align-items-center justify-content-center`}>
      
      
      <div className={`d-flex flex-column ${styles.divContainer}`}>
      <h2>Register new contact</h2>
        <GeneralInput label="Name:" placeholder="Enter the Name" />
        <div>
        <GeneralInput label="Last Name:" placeholder="Enter Last Name"/>
        </div>
        <div>
          <GeneralInput label="Address:" placeholder="Enter Address"/>
        </div>
        <div>
        <GeneralInput label="City:" placeholder="Enter City"/>
        </div>
        <div>
        <GeneralInput label="Country:" placeholder="Enter Country"/>
        </div>
        <div className="d-flex">
        <div className={`${styles.inputContainer}`}>
        <GeneralInput label="Email:" placeholder="Enter the Email"/>
        </div>
        <div className={`d-flex ${styles.buttonAdd}`}>
        <GeneralButton text="Add"></GeneralButton>
        </div>
        </div>
        <div className="d-flex">
        <div className={`${styles.inputContainer}`}>
        <GeneralInput label="Number:" placeholder="Enter the Number"/>
        </div>
        <div className={`d-flex ${styles.buttonAdd}`}>
        <GeneralButton text="Add"></GeneralButton>
        </div>
        </div>
        <div className={`mt-2 ${styles.buttonContainer}`}>
          <GeneralButton text="Save"></GeneralButton>
        </div>
      </div>
    </div>
    </div>
    
  );
};

export default Edit;
