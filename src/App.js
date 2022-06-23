import Students from "./modules/student/student";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import "./Boostrap/index.css";
function App() {
  const store = useSelector((store) => store);
  console.log("store", store);
  return (
    <div className="App">
      <h1 className="d-flex justify-content-center align-items-center">
        New Student Add
      </h1>
      <ToastContainer />
      <Students />
    </div>
  );
}
export default App;
