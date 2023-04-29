import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import GeneralButton from "../uikit/buttons/GeneralButton";


const Home = () => {
const navigate = useNavigate()
  return (
  <div>
      <Navbar text="PhoneBook"></Navbar>
    
    <div className="d-flex align-items-center w-50 mt-5 ">
      <GeneralButton onClick={() => navigate('/edit')} text="EDIT"></GeneralButton>
      <GeneralButton onClick={() => navigate('/contact-add')} text="CONTACT"></GeneralButton>
    </div>
    </div>
  );
};

export default Home;
