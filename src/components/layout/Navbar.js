import React from "react";
import { Link, useLocation } from "react-router-dom";
import Container from "./Container";
import styles from "./Navbar.module.css";
import logo from "../img/Logo1.png";
import classNames from "classnames";
import { useState, useEffect } from 'react';
import Nav from "../../Data/NavigationData";

function Navbar() {
  const location = useLocation();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isDesktop = windowWidth >= 1023;
  const [submenuAberto, setSubmenuAberto] = useState(false);

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



  function abrirmenu() { };

  const abrirSubmenu = () => {
    setSubmenuAberto(true);
  };
  const fecharmenu = () => {
    setSubmenuAberto(false)
  }
  const rendermenu = (submenu, nav) => {
    return (
      <ul className={classNames(styles.submenu, { [styles.submenuAtivo]: location.pathname === nav.url && submenuAberto })}>
        {
          submenu.map((submenu) => (
            <li className={styles.item}>
              <Link
                to={submenu.url}
                className={classNames(styles.link, {
                  [styles.activeSubLink]: location.hash === submenu.url,
                })}
                onClick={fecharmenu}
              >
                {submenu.label}
              </Link>
            </li>
          ))
        }
      </ul>
    );
  }

  return (
    <nav className={styles.navbar}>
      <Container>

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
        {
          isDesktop ?

            (
              <ul className={styles.list}>
                {Nav.map((nav) => (

                  <li className={styles.item}
                    onMouseEnter={location.pathname === nav.url ? abrirSubmenu : null}
                    onMouseLeave={location.pathname === nav.url ? fecharmenu : null}
                  >
                    <Link
                      to={nav.url}
                      className={classNames(styles.link, {
                        [styles.activeLink]: location.pathname === nav.url && !submenuAberto
                      })}
                    >
                      {nav.label}
                    </Link>
                    {nav.submenu?.length > 0 && rendermenu(nav.submenu, nav)}
                  </li>
                ))}
              </ul>
            )
            :
            (
              <div className={styles.list}>
                <label className={styles.listIcon} htmlFor="check">
                  <input type="checkbox" onChange={abrirmenu} id="check" />
                  <span></span>
                  <span></span>
                  <span></span>
                </label>
              </div>
            )
        }
      </Container>
    </nav>
  );
}

export default Navbar;
