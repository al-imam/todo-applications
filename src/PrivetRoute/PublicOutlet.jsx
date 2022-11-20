import { Outlet, Navigate } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const PublicOutlet = () => {
  let theAuth = true;

  if (!theAuth) {
    return <Outlet />;
  } else {
    return <Navigate to="home" />;
  }
};

export default PublicOutlet;