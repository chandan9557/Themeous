import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Home } from './components/main/Home';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import UserProfile from './components/user/UserProfile';
import MUICustomizer from './components/user/MUICustomizer';
import User from './components/user';
import { ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';


function App() {

  const [mainTheme, setMainTheme] = useState({});

  const muiTheme = createTheme(mainTheme);

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
          <Route path='user' element={  <User />} >

            <Route path="customizemui" element={ <ThemeProvider theme={muiTheme}><MUICustomizer mainTheme={mainTheme} setMainTheme={setMainTheme}/></ThemeProvider>} />
            
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
