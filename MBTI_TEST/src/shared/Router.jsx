import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Main from '../page/Main';
import Login from '../page/Login';
import Mypage from '../page/MyPage';
import SignUp from '../page/SignUp';
import { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import Test from '../page/Test';
import TestResult from '../page/TestResult';
import Layout from '../component/Layout';

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
      <Layout>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/login' element={<PublicRoute element={Login} />} />
          <Route path='/signup' element={<PublicRoute element={SignUp} />} />
          <Route path='/mypage' element={<PrivateRoute element={Mypage} />} />
          <Route path='/test' element={<PrivateRoute element={Test} />} />
          <Route path='/result/list' element={<PrivateRoute element={TestResult} />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
