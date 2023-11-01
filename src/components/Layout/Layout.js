import { Outlet } from 'react-router-dom';
import background from '../../assets/background.png';
import css from './Layout.module.css';
import { AuthChanger } from 'components/AuthChanger/AuthChanger';

export const Layout = () => {
  return (
    <>
      <img src={background} className={css.background}></img>
      <div className={css.auth}>
        <AuthChanger></AuthChanger>
        <hr></hr>
        <Outlet />
      </div>
    </>
  );
};
