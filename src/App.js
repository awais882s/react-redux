import Students from "./components/student";
import { ToastContainer } from 'react-toastify';
import "./Boostrap/index.css";
function App() {
  return (
    <div className="App">
      <h1 className="d-flex justify-content-center align-items-center">New Student Add</h1>
      <ToastContainer />
      <Students />
    </div>
  );
}
export default App;
