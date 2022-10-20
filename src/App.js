import { Routes, Route} from "react-router-dom";
import Dashboard from './pages/dashboard/Dashboard';
import Auth from "./pages/Auth";


function App() {
  return (
    <div className="App">
      <Routes>
            <Route path = "/" element ={ <Auth/>}/>
            <Route path = "/dashboard/*" element ={<Dashboard/>}/>
        </Routes>
    </div>
  );
}

export default App;
