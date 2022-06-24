import Students from "./modules/student/student";
import { ToastContainer } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/header/Header";
import { addStudent } from "./Redux/actions/studentActions";
import { fetchFollowers } from "./Redux/actions/githubActions";
import "./Boostrap/index.css";
function App() {
  const dispatch = useDispatch();
  const store = useSelector((store) => store.studentReducer);
  console.log("Store in app js ", store);
  const user = useSelector((store) => store.authReducers.user);
  console.log("store", user);
  const ctaHandlerForGithub = () => {
    let dataPassToAction = {
      name: "Muhammad Awais",
    };
    dispatch(fetchFollowers(dataPassToAction));
  };
  const ctaHandler = () => {
    let dataPassToStore = {
      agNo: "2015--ag--5563",
      date: "2020-01-01",
      createdAt: new Date(),
    };
    console.log("data in react component", dataPassToStore);
    dispatch(addStudent(dataPassToStore));
    // pass this data to action dataPassToStore
  };
  return (
    <div className="App">
      <h1 className="d-flex justify-content-center align-items-center">
        New Student Add
      </h1>
      <ToastContainer />
      <Students />
      new data we fetch
      <button onClick={ctaHandler}>fetch follower</button>
      <h1>Header</h1>
      <Header />
      <p>Name from redux {store}</p>
      <button onClick={ctaHandlerForGithub}>fetch Github Followers </button>
    </div>
  );
}
export default App;
