import { useNavigate } from "react-router-dom";
import GeneralButton from "../uikit/buttons/GeneralButton";


const Home = () => {
const navigate = useNavigate()
  return (
    <div className="w-100 mt-5 ">
      <GeneralButton onClick={() => navigate('/edit')} text="ADD"></GeneralButton>
    </div>
  );
};

export default Home;
