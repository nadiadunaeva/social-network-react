import React from "react";
import classes from './Header.module.css';


const Header = () => {
  return(
      <header className={classes.header}>
          <img
              src='https://images.fastcompany.net/image/upload/w_1280,f_auto,q_auto,fl_lossy/w_596,c_limit,q_auto:best,f_auto/fc/3034007-inline-i-applelogo.jpg'></img>
      </header>
  )
}
export default Header