import React, { FC, FunctionComponent, useContext } from "react";

import { Login } from "./login/Login";
import styles from "./layout.module.scss";
import { ILayoutProps } from "./layout.props";
import { Sidebar } from "./sidebar/Sidebar";
import { Button, Languages } from "../components";
import { IMainContext, MainContext, MainContextProvider } from "../context";
import { useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const Layout: FC<ILayoutProps> = ({ children, ...props }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const auth = () => {
      if (!token) {
          navigate("/auth");
      } else {
          localStorage.removeItem("token");
          navigate("/admin.malltique");
      }
  }
  return (
    <div {...props}>
      <Sidebar />
      <main className={styles.main}>
        <Languages />
        <div className={styles.login_icon}>
          <Button onClick={auth} variant="secondary">
            {!token ? <i className="icon-user" /> : <i className="icon-login" />}
          </Button>
        </div>
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
};

export const withLayout =
  <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  (props: T) =>
    (

        <MainContextProvider token={null} openLogin={false}>
          <Layout>
            <Component {...props} />
          </Layout>
        </MainContextProvider>
    );
