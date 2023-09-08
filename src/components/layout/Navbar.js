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
              to="/projects"
              className={classNames(styles.link, {
                [styles.activeLink]: location.pathname === "/projects",
              })}
            >
              Projetos
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/contact"
              className={classNames(styles.link, {
                [styles.activeLink]: location.pathname === "/contact",
              })}
            >
              Contato
            </Link>
          </li>
          <li className={styles.item}>
            <Link
              to="/location"
              className={classNames(styles.link, {
                [styles.activeLink]: location.pathname === "/location",
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
