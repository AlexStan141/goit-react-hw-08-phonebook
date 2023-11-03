import { useDispatch } from 'react-redux';
import { useAuth } from 'hooks/useAuth';
import { useEffect } from 'react';
import { getCurrentUserData } from 'redux/users/operations';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';
import { Contacts } from 'pages/Contacts/Contacts';
import { Welcome } from './Welcome/Welcome';

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(getCurrentUserData());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/goit-react-hw-08-phonebook" element={<Layout />}>
        <Route index element={<Welcome></Welcome>}></Route>
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
      </Route>
      <Route
        path="contacts"
        element={
          <PrivateRoute
            redirectTo="/goit-react-hw-08-phonebook"
            component={<Contacts />}
          />
        }
      />
    </Routes>
  );
};
