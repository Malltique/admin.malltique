import { ActionIcon, Avatar } from "@mantine/core";
import cn from "classnames";
import React, { FC, useState } from "react";
import { Link, NavLink } from "react-router-dom";

import styles from "./sidebar.module.scss";
import { ISidebarProps } from "./sidebar.props";
import Logo from "../../assets/logo.png";
import avatar from './avatar.jpg';

export const Sidebar: FC<ISidebarProps> = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const active = ({ isActive }: { isActive: boolean }) => ({
    color: isActive ? "hsl(43, 100%, 68%)" : "hsl(244, 24%, 26%)",
  });

  const token = localStorage.getItem("token");

  return (
    <>
      <aside
        className={cn(styles.aside, {
          [styles.aside_mobile_open]: openMenu,
        })}>
        <Link to={token ? '/settings/2' : '/admin.malltique'} className={styles.logo}>
          <Avatar src={token ? avatar : Logo} alt="ava" />
        </Link>

        <nav className={styles.nav}>
          <div className={styles.nav_menu}>
            <ul className={styles.nav_list}>
              {!token && (
                <li className={styles.nav_item} onClick={() => setOpenMenu((prev) => !prev)}>
                  <NavLink to='/admin.malltique' className={styles.nav_link} style={active}>
                    <i className="icon-home"></i>
                  </NavLink>
                </li>
              )}
              {token && (
                <>
                  <li className={styles.nav_item} onClick={() => setOpenMenu((prev) => !prev)}>
                    <NavLink to="/dashboard" className={styles.nav_link} style={active}>
                      <i className="icon-pie-chart"></i>
                    </NavLink>
                  </li>
                  <li className={styles.nav_item} onClick={() => setOpenMenu((prev) => !prev)}>
                    <NavLink to="/order" className={styles.nav_link} style={active}>
                      <i className="icon-wallet"></i>
                    </NavLink>
                  </li>
                  <li className={styles.nav_item} onClick={() => setOpenMenu((prev) => !prev)}>
                    <NavLink to="/product" className={styles.nav_link} style={active}>
                      <i className="icon-handbag"></i>
                    </NavLink>
                  </li>
                  <li className={styles.nav_item} onClick={() => setOpenMenu((prev) => !prev)}>
                    <NavLink to="/settings/2" className={styles.nav_link} style={active}>
                      <i className="icon-settings"></i>
                    </NavLink>
                  </li>
                </>
              )}
              <li className={styles.nav_item} onClick={() => setOpenMenu((prev) => !prev)}>
                <NavLink to="/contact" className={styles.nav_link} style={active}>
                  <i className="icon-envelope"></i>
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <div className={styles.nav_footer}></div>
      </aside>
      <ActionIcon
        className={cn(styles.nav_toggle, {
          [styles.nav_toggle_open]: openMenu,
        })}
        onClick={() => setOpenMenu((prev) => !prev)}>
        <i className={openMenu ? "icon-close" : "icon-menu"} />
      </ActionIcon>
      ;
    </>
  );
};
