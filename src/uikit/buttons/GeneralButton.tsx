import styles from './GeneralButton.module.css';

type Props = {
    text: string;
    onClick?: () => void;
  };

const GeneralButton = ({
  text,
  onClick,
}: Props) => {


  return (
    <button
    className={`w-100 text-white ${styles.generalButton}`}
    onClick={onClick}
    style={{backgroundColor:"blue"}}>{text}

  </button>
  );
};
export default GeneralButton;
