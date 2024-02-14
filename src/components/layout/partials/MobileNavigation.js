import React from "react";
import styles from "./MobileNavigation.module.css";
import Nav from "../../../Data/NavigationData";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MobileNavigation({ abrirmenu }) {
  return (
    <div className={styles.modal}>
      <ul>
        {Nav.map((Nav) => (
          <li>
            <Link onClick={() => abrirmenu()} to={Nav.url}>
              {Nav.label}
            </Link>
          </li>
        ))}
      </ul>
      <button onClick={() => abrirmenu()}>Voltar</button>
    </div>
  );
}
