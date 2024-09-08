import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from '../page/Main';
import Login from '../page/Login';
import Mypage from '../page/Mypage';
import SignUp from '../page/signup';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Header from '../component/Header';

const PrivateRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? <Element {...rest} /> : <Navigate to='/login' />;
};

const PublicRoute = ({ element: Element, ...rest }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return !isAuthenticated ? <Element {...rest} /> : <Navigate to='/mypage' />;
};

const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/login' element={<PublicRoute element={Login} />} />
        <Route path='/signup' element={<PublicRoute element={SignUp} />} />
        <Route path='/mypage' element={<PrivateRoute element={Mypage} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
