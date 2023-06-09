import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import Main from './components/main';
import Login from './components/main/Login';
import Signup from './components/main/Signup';
import UserProfile from './components/user/UserProfile';
import MUICustomizer from './components/user/MUICustomizer';
import User from './components/user';
import { ThemeProvider, createTheme } from '@mui/material';
import { useState } from 'react';
import BootstrapCustomizer from './components/user/BootstrapCustomizer';
import AntDCustomizer from './components/user/AntDCustomizer';
import { ConfigProvider } from 'antd';
import TailCustomize from './components/user/TailCustomize';
import Home from './components/main/Home';
import NotePage from './components/main/NotePage';
import Profile from './components/main/Profile';

function App() {

  const [mainTheme, setMainTheme] = useState({});
  const [antDTheme, setAntDTheme] = useState({
    token: {
    }
  });

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
            <Route path="userProfile" element={<UserProfile />} />
            <Route path="profile" element={<Profile/>} />
            <Route path="*" element={<NotePage />} />
          </Route>

          <Route path='user' element={<User />} >
            <Route path="customizemui" element={<ThemeProvider theme={muiTheme}><MUICustomizer mainTheme={mainTheme} setMainTheme={setMainTheme} /></ThemeProvider>} />
            <Route path="customizebt" element={<BootstrapCustomizer />} />
            <Route path="customizeantd" element={<ConfigProvider theme={antDTheme}> <AntDCustomizer mainTheme={antDTheme} setMainTheme={setAntDTheme} /> </ConfigProvider>} />
            <Route path="customizetailwind" element={<TailCustomize />} />
            {/* <Route path="UserProfile" element={<UserProfile />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
