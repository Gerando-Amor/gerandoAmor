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
    if (!submenuAberto){
    setSubmenuAberto(true);}
    else{
    setSubmenuAberto(false);}
  };


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
                <li className={styles.item}>
                  <Link
                    to="/"
                    className={classNames(styles.link, {
                      [styles.activeLink]: location.pathname === "/" && !submenuAberto})}
                    onClick={location.pathname === "/" ? abrirSubmenu : null}
                  >
                    Home
                  </Link>
                  <ul className={classNames(styles.submenu, {[styles.submenuAtivo]: location.pathname === "/" && submenuAberto})}>

                    <li className={styles.item}>
                      <Link
                        to="/#quemsomos"
                        className={classNames(styles.link, {
                          [styles.activeSubLink]: location.hash === "#quemsomos",
                        })}
                      >
                        Quem Somos
                      </Link>
                    </li>

                    <li className={styles.item}>
                      <Link
                        to="/#comotransformamos"
                        className={classNames(styles.link, {
                          [styles.activeSubLink]: location.hash === "#comotransformamos",
                        })}
                      >
                        Como Transformamos
                      </Link>
                    </li>
                    <li className={styles.item}>
                      <Link
                        to="/#misao"
                        className={classNames(styles.link, {
                          [styles.activeSubLink]: location.hash === "#misao",
                        })}
                      >
                        Misão
                      </Link>
                    </li>
                    <li className={styles.item}>
                      <Link
                        to="/#objetivo"
                        className={classNames(styles.link, {
                          [styles.activeSubLink]: location.hash === "#objetivo",
                        })}
                      >
                        Objetivo
                      </Link>
                    </li>

                  </ul>
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
