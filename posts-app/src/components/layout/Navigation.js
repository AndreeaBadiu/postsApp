//import { NavLink } from 'react-router-dom';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Mini Facebook</div>
      <nav className={classes.nav}>
        <ul>
          <li>
              Posts
          </li>
          <li>
              Gallery
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;