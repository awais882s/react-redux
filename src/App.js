import Students from "./modules/student/student";
import { ToastContainer } from "react-toastify";
import { useSelector } from "react-redux";
import Header from "./components/header/Header";
import "./Boostrap/index.css";
function App() {
  const user = useSelector((store) => store.authReducers.user);
  console.log("User", user);
  const store = useSelector((store) => store.authReducers.user);
  console.log("store", store);
  return (
    <div className="App">
      <h1 className="d-flex justify-content-center align-items-center">
        New Student Add
      </h1>
      <Header />
      <ToastContainer />
      <Students />
    </div>
  );
}
export default App;
