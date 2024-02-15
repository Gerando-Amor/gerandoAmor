import React from "react";
import styles from "./MobileNavigation.module.css";
import Nav from "../../../Data/NavigationData";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNavigation({ abrirmenu }) {
  return (
    <div className={styles.modal}>
      <ul>
        {Nav.map((navItem) => (
          <li key={navItem.id}>
            <Link to={navItem.url} onClick={() => abrirmenu()}>
              {navItem.label}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => abrirmenu()}>Voltar</button>
    </div>
  );
}
