import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import CardContainer from "./components/CardContainer/CardContainer";
import './App.css';
import LogIn from "./components/LogIn/LogIn";

function App() {
  const isUserLoogedIn = Boolean(localStorage.getItem('token'));

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={ isUserLoogedIn ?  <CardContainer/> : <Navigate to='/login' /> } />
          <Route path='/login' element={ isUserLoogedIn ?  <Navigate to='/' /> : <LogIn /> } />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
