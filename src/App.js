import './App.css';
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Profile from "./pages/Profile/Profile"
import Pertandingan from "./pages/Pertandingan/Pertandingan"
import Detail from "./pages/Detail/Detail"
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar/>
        </div>
        <div>
            <Route exact path="/" >
                <Home/>
            </Route>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/pertandingan/:nama/:id" component={Pertandingan}/>
            <Route exact path="/detail/:nama" component={Detail}/>
        </div>
      </Router>
    </div>
  );
}

export default App;
