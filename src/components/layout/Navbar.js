import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../img/Logo1.png";
import classNames from "classnames";
import { useState, useEffect } from 'react';

function Navbar() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isDesktop = windowWidth >= 1023;


  useEffect(() => {
    // Atualize a largura da janela quando a janela for redimensionada
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }

    window.addEventListener('resize', handleResize);

    return () => {
      // Remova o ouvinte de redimensionamento quando o componente for desmontado
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav className={styles.navbar}>
      <Container>

        <Link className={styles.navIcon} to="/">
          <div>
            <img className={styles.img} src={logo} alt="Logo"/>
          </div>
          <div>
            <h1>
              Gerando <span>Amor</span>
            </h1>
          </div>
        </Link>
        {
          isDesktop?

            (
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
            )
            :
            (
              <div></div>
            )
        }
      </Container>
    </nav>
  );
}

export default Navbar;
