import './App.css';
import Header from './components/Header';
import AddStudent from './components/AddStudent';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import AllStudents from './components/AllStudents';


function App() {
  return (

    <Router>
    <div>
      <Header />

      
      <Routes>
        <Route path="/add" exact element={<AddStudent />} />
        <Route path="/" exact element={<AllStudents/>} />
      </Routes>
      
    </div>
    </Router>
  );
}

export default App;



