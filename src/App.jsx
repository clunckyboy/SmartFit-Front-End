import { Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import DashboardPage from './pages/DashboardPage';
import React from 'react';
import { getUserLogged, putAccessToken } from './utils/network-data';

function App() {
  const [authedUser, setAuthedUser] = React.useState(null);

  async function onLoginSuccess({ accessToken }) {
    putAccessToken(accessToken);
    const { data } = await getUserLogged();

    setAuthedUser(data);
  }

  React.useEffect(() => {
    getUserLogged().then(({ data }) => {
      setAuthedUser(data);
    })
  }, []);
  
  return (
    authedUser === null ? (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/signup' element={<SignupPage />}/>
        <Route path='/login' element={<LoginPage onLoginSuccess={onLoginSuccess} />}/>
        {/* <Route path='/dashboard' element={<DashboardPage />}/> */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    ) : (
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/dashboard' element={<DashboardPage />} />
        <Route path='*' element={<Navigate to='/dashboard' replace />} />
      </Routes>
    )
  )
}

export default App
