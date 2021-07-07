import TopBar from './Components/topbar/TopBar';
import Header from './Components/header/Header';
import Home from './pages/home/Home'
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import "./App.css";

function App() {
  return (
    <div className="page1">
      <TopBar/>
      <Write/>
    </div>
   
  );
}

export default App;
