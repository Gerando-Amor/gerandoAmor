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
                <li className={styles.item}
                  onMouseEnter={location.pathname === "/" ? abrirSubmenu : null}
                  onMouseLeave={location.pathname === "/" ? fecharmenu : null}
                >
                  <Link
                    to="/"
                    className={classNames(styles.link, {
                      [styles.activeLink]: location.pathname === "/" && !submenuAberto
                    })}
                  >
                    Home
                  </Link>
                  <ul className={classNames(styles.submenu, { [styles.submenuAtivo]: location.pathname === "/" && submenuAberto })}>

                    <li className={styles.item}>
                      <Link
                        to="#quemsomos"
                        className={classNames(styles.link, {
                          [styles.activeSubLink]: location.hash === "#quemsomos",
                        })}
                        onClick={fecharmenu}
                      >
                        Quem Somos
                      </Link>
                    </li>
                  </ul>
                </li>





                <li className={styles.item}
                  onMouseEnter={location.pathname === "/projects" ? abrirSubmenu : null}
                  onMouseLeave={location.pathname === "/projects" ? fecharmenu : null}
                >
                  <Link
                    to="/projects"
                    className={classNames(styles.link, {
                      [styles.activeLink]: location.pathname === "/projects" && !submenuAberto
                    })}
                  >
                    Projetos
                  </Link>
                  <ul className={classNames(styles.submenu, { [styles.submenuAtivo]: location.pathname === "/projects" && submenuAberto })}>

                    <li className={styles.item}>
                      <Link
                        to="#projetos"
                        className={classNames(styles.link, {
                          [styles.activeSubLink]: location.hash === "#projetos"
                        })}
                        onClick={fecharmenu}
                      >
                        Projetos
                      </Link>
                    </li>
                  </ul>
                </li>




                <li className={styles.item}
                  onMouseEnter={location.pathname === "/contact" ? abrirSubmenu : null}
                  onMouseLeave={location.pathname === "/contact"? fecharmenu: null}
                >
                  <Link
                    to="/contact"
                    className={classNames(styles.link, {
                      [styles.activeLink]: location.pathname === "/contact" && !submenuAberto
                    })}
                  >
                    Contato
                  </Link>
                  <ul className={classNames(styles.submenu, { [styles.submenuAtivo]: location.pathname === "/contact" && submenuAberto })}>

                    <li className={styles.item}>
                      <Link
                        to="#contact"
                        className={classNames(styles.link, {
                          [styles.activeSubLink]: location.hash === "#contact"
                        })}
                        onClick={fecharmenu}
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </li>





                <li className={styles.item}
                  onMouseEnter={location.pathname === "/location"? abrirSubmenu: null}
                  onMouseLeave={location.pathname === "/location"? fecharmenu: null}
                >
                  <Link
                    to="/location"
                    className={classNames(styles.link, {
                      [styles.activeLink]: location.pathname === "/location" && !submenuAberto
                    })}
                  >
                    Localização
                  </Link>
                  <ul className={classNames(styles.submenu, { [styles.submenuAtivo]: location.pathname === "/location" && submenuAberto })}>

                    <li className={styles.item}>
                      <Link
                        to="#location"
                        className={classNames(styles.link, {
                          [styles.activeSubLink]: location.hash === "#location"
                        })}
                        onClick={fecharmenu}
                      >
                        Location
                      </Link>
                    </li>
                  </ul>
                </li>

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
