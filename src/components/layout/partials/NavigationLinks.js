import React from "react";
import { useState} from 'react';
import { Link, useLocation } from "react-router-dom";
import styles from "./NavigationLinks.module.css";

import classNames from "classnames";
import Nav from "../../../Data/NavigationData";

function NavigationLink() {
    const location = useLocation();
    const [submenuAberto, setSubmenuAberto] = useState(false);

    const abrirSubmenu = () => {
        setSubmenuAberto(true);
    };
    const fecharSubmenu = () => {
        setSubmenuAberto(false)
    }


    const rendermenu = (submenu, nav) => {
        return (
            <ul className={classNames(styles.submenu, { [styles.submenuAtivo]: location.pathname === nav.url && submenuAberto })}>
                {
                    submenu.map((submenu) => (
                        <li className={styles.subitem}>
                            <Link
                                to={submenu.url}
                                className={classNames(styles.link, {
                                    [styles.activeSubLink]: location.hash === submenu.url,
                                })}
                                onClick={fecharSubmenu}
                            >
                                {submenu.label}
                            </Link>
                        </li>
                    ))
                }
            </ul>)
    }


    return (
        <ul className={styles.list}>
            {Nav.map((nav) => (

                <li className={styles.item}
                    onMouseEnter={location.pathname === nav.url ? abrirSubmenu : null}
                    onMouseLeave={location.pathname === nav.url ? fecharSubmenu : null}
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
}
export default NavigationLink