import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";



const Home = () => {
  return (
   <div>
    <Navbar text="PhoneBook"></Navbar>
    <div className="container">
    <div className="row">
      <div className="col-md-12 my-5 text-end">
        <Link to="/contact-add" className="btn btn-primary">
          Add Contact
        </Link>
        <td>
        <Link
          to={`/edit/`}
          className="btn btn-small btn-danger"> Delete
          </Link>
          </td>
          <Link
          to={`/edit/`}
          className="btn btn-small btn-success"> Edit
        </Link>
      </div>
      <div className="col-md-12 mx-auto">
        <h1>Contacts</h1>
        <table className="table table-bordered table-striped">
          <thead className=" text-center">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">LastName</th>
              <th scope="col">Address</th>
              <th scope="col">city</th>
              <th scope="col">country</th>
              <th scope="col">Email</th>
              <th scope="col">Number</th>
              <th scope="col">Edit</th>
              <th scope="col">Delete</th>
            </tr>
          </thead>
          <tbody className="text-center">
          </tbody>
        </table>
      </div>
    </div>
  </div>
  </div>
    
  );
};

export default Home;
