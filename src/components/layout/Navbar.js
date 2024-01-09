import React, { useRef } from "react";
import Container from "./Container";
import styles from "./Navbar.module.css";
import { useState, useEffect } from 'react';
import Logo from "./partials/Logo";
import NavigationLink from "./partials/NavigationLinks";
import MobileNavigation from "./partials/MobileNavigation";

function Navbar() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1023);
  const [open , setOpen] = useState(false)
  const checkboxRef = useRef(null);

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



  function abrirmenu() { 
    let body = document.body.style
    
    if(!open){
     setOpen(true)
     body.overflow = 'hidden' 
     checkboxRef.current.checked = true
    } 
    else{ 
      setOpen(false);
      body.overflow = 'auto'
      checkboxRef.current.checked = false
    }
   
  };


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
              <>
                <div className={styles.mobilehamburguer}>
                  <label className={styles.mobileIcon} htmlFor="check">
                    <input ref={checkboxRef} type="checkbox" onChange={abrirmenu} id="check" />
                    <span></span>
                    <span></span>
                    <span></span>
                  </label>
                </div>
                {open && <MobileNavigation abrirmenu={abrirmenu}/>}
              </>
            )
        }
      </Container>
    </nav>
  );
}

export default Navbar;
