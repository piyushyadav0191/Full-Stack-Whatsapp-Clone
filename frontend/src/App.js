import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { io } from "socket.io-client";
import SocketContext from "./context/SocketContext";
//Pages
import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";
//socket io
const socket = io(process.env.REACT_APP_API_ENDPOINT.split("/api/v1")[0]);

function App() {
  //const [connected, setConnected] = useState(false);
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);
  const { token } = user;

  return (
    <div className="dark">
      <SocketContext.Provider value={socket}>
        <Router>
          <Routes>
            <Route
              exact
              path="/"
              element={
                token ? <Home socket={socket} /> : <Navigate to="/login" />
              }
            />
            <Route
              exact
              path="/login"
              element={!token ? <Login /> : <Navigate to="/" />}
            />
            <Route
              exact
              path="/register"
              element={!token ? <Register /> : <Navigate to="/" />}
            />
          </Routes>
        </Router>
      </SocketContext.Provider>
    </div>
  );
}

export default App;
