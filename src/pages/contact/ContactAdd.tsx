import GeneralButton from "../../uikit/buttons/GeneralButton";
import GeneralInput from "../../uikit/inputs/GeneralInput";
import Input from "../../uikit/inputs/Input";
import styles from './ContactAdd.module.css';

const ContactAdd = () => {

    return (
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
          <div>
          <GeneralInput label="Email:" placeholder="Enter the Email"/>
          <Input  placeholder="Enter the Email"/>
          <Input  placeholder="Enter the Email"/>
          </div>
          <div className={` ${styles.buttonAdd}`}>
          <GeneralButton text="Add"></GeneralButton>
          </div>
          <div>
          <GeneralInput label="Number:" placeholder="Enter the Number"/>
          <Input placeholder="Enter the Number"/>
          <Input placeholder="Enter the Number"/>
          <Input placeholder="Enter the Number"/>
          </div>
          <div className={`${styles.buttonAdd}`}>
          <GeneralButton text="Add"></GeneralButton>
          </div>
     
          <div className={`mt-4 ${styles.buttonContainer}`}>
            <GeneralButton text="Save"></GeneralButton>
          </div>
        </div>
      </div>
     
      
    );
  };
  
  export default ContactAdd;
  
  