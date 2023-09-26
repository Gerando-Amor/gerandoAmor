import React from "react";
import logo from "../../img/Logo1.png";
import styles from "./Logo.module.css";
import {Link}  from "react-router-dom";

function Logo() {
  return (
    <Link className={styles.navIcon} to="/">
      <div>
        <img className={styles.img} src={logo} alt="Logo" />
      </div>
      <div>
        <h1>
          Gerando <span>Amor</span>
        </h1>
      </div>
    </Link>
  );
}

export default Logo;