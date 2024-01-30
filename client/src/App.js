
import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './Signup';
import Login from './Login';
import Dashboard from './Dashboard';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;