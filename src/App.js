import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router,Routes,Route} from  "react-router-dom";
import Registration from "./Components/Registration"
import Login from "./Components/Login";



const App = () => {
  return (
    <div className="App">
         <Router>
            <Routes>
                <Route path="/" element={<Registration/>} />
                <Route path="/login" element={<Login/>}/>
            </Routes>
         </Router>
    </div>
  )
}

export default App