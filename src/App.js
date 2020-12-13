import React,{useState,useEffect} from "react"
import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import Pertandingan from "./pages/Pertandingan/Pertandingan"
import Detail from "./pages/Detail/Detail"
import { setAuthToken } from "./config/api";
import { Provider } from "react-redux";
import store from "./redux/store/store";
import AdminRoute from './components/Routing/AdminRoute'
import UserRoute from './components/Routing/UserRoute'
import { loadUser } from "./redux/actions/auth";
import ModalLogin from './components/ModalLogin/Login'
import ModalRegister from './components/ModalRegister/Register'
import Form from  "./pages/Form/Form"
import Foother from "./components/Foother/Foother"
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
    }, []);

  const [HandleLogin,setHandleLogin]=useState(false)
  const [HandleRegister,setHandleRegister]=useState(false)

  const Register = () =>{
    setHandleRegister(!HandleRegister)
    setHandleLogin(false)
  }

  const Login = () =>{
    setHandleLogin(!HandleLogin)
    setHandleRegister(false)
  }
  return (
    <Provider store={store}>
    <div className="App">
      <Router>
        <div>
          <Navbar register={Register} login={Login}/>
        </div>
        <div>
          <Switch>
            <Route exact path="/" >
                <Home/>
            </Route>
            <UserRoute exact path="/profile" component={Profile}/>
            <UserRoute exact path="/pertandingan/:nama/:id" component={Pertandingan}/>
            <UserRoute exact path="/detail/:nama/:id" component={Detail}/>
          </Switch>
            
        </div>
        <div>
          {HandleLogin && (
            <ModalLogin 
            HandleLogin={HandleLogin} 
            setHandleLogin={setHandleLogin}
            Loginaksen={Login}
            Register={Register}
            />
            )}
            {HandleRegister && (
            <ModalRegister
            HandleRegister={HandleRegister} 
            setHandleRegister={setHandleRegister}
            Register={Register}
            Login={Login}
            />
            )}
        </div>
        <div>
          <Foother/>
        </div>
      </Router>
    </div>
    </Provider>
  );
}

export default App;
