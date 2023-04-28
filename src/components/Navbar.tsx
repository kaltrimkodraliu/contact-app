import styles from './Navbar.module.css';

type Props = {
    text: string;  
  };

const Navbar = ({text}:Props) => {

    return (
      <div className={`d-flex align-items-center  ${styles.divContainer}`}>
        {text}
        
      </div>
     
      
    );
  };
  
  export default Navbar;
  
  