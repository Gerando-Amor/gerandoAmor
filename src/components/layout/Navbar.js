import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../img/Logo.png";
import classNames from "classnames";

function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.navbar}>
      <Container>
        <Link className={styles.navBarr} to="/">
          <div>
            <img className={styles.img} src={logo} alt="Logo" />
          </div>
          <div>
            <h1>
              Gerando <span>Amor</span>
            </h1>
          </div>
        </Link>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link
              to="/"
              className={classNames(styles.link, {
                [styles.activeLink]: location.pathname === "/",
              })}
            >
              Home
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/Projects"
              className={classNames(styles.link, {
                [styles.activeLink]: location.pathname === "/Projects",
              })}
            >
              Contato
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/contact"
              className={classNames(styles.link, {
                [styles.activeLink]: location.pathname === "/contact",
              })}
            >
              Sobre
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/company"
              className={classNames(styles.link, {
                [styles.activeLink]: location.pathname === "/company",
              })}
            >
              Localização
            </Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
}

export default Navbar;
