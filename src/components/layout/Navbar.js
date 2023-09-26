import React from "react";
import Container from "./Container";
import styles from "./Navbar.module.css";
import { useState, useEffect } from 'react';
import Logo from "./partials/Logo";
import NavigationLink from "./partials/NavigationLinks";

function Navbar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1023);

  useEffect(() => {
    // ouvinte de redimencionamento que ativa a função handleResize
    window.addEventListener('resize', handleResize);

    // Função que é ativada quando redimencionam a tela
    function handleResize() {
      // se o width for maior que 1023 é True
      setIsDesktop(window.innerWidth >= 1023);
    }

    return () => {
      // Remove o ouvinte de redimensionamento quando o componente for desmontado
      window.removeEventListener('resize', handleResize);
    };
  }, []);



  function abrirmenu() { };


  return (
    <nav className={styles.navbar}>
      <Container>
        <Logo />
        {
          isDesktop ?

            (
              <NavigationLink />
            )
            :
            (
              <div className={styles.mobilehamburguer}>
                <label className={styles.mobileIcon} htmlFor="check">
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
