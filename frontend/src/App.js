import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Home } from './components/main/Home';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import UserProfile from './components/user/UserProfile';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={<Navigate to="/main/home" />} />
          <Route path='main' element={<Main />} >
            <Route path="home" element={<Home />} />
            <Route path="signup" element={<Signup />} />
            <Route path="login" element={<Login />} />
            <Route path="userProfile" element={<UserProfile/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
