import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
  Navigate,
  useHistory,
  useLocation
} from "react-router-dom";
import MainRoom from "./components/main_room.js";
import Login from "./components/login.js";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/main-room" element={<MainRoom/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
