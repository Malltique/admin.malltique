import React, { FC, FunctionComponent, useContext } from "react";

import { Login } from "./login/Login";
import styles from "./layout.module.scss";
import { ILayoutProps } from "./layout.props";
import { Sidebar } from "./sidebar/Sidebar";
import { Button, Languages } from "../components";
import { IMainContext, MainContext, MainContextProvider } from "../context";

export const Layout: FC<ILayoutProps> = ({ children, ...props }) => {
  const { openLogin, setOpenLogin, token } = useContext<IMainContext>(MainContext);

  return (
    <div {...props}>
      <Sidebar />
      <main className={styles.main}>
        <Languages />
        <Login
          opened={openLogin}
          onClose={() => {
            if (setOpenLogin) {
              setOpenLogin(false);
            }
          }}
        />
        <div className={styles.basket_icon}>
          <Button
            onClick={() => {
              if (setOpenLogin) {
                setOpenLogin(true);
              }
            }}
            variant="secondary"
            >
            <i className="icon-login" />
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
