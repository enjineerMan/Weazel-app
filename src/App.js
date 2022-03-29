import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import MainRoom from "./components/main_room.js";
import Login from "./components/login.js";
import PasswordBox from "./components/passwordBox.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Navigate replace to="/login"/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/main-room" element={<MainRoom/>}/>
          <Route path="/enter-password" element={<PasswordBox/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
