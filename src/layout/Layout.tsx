import React, { FC, FunctionComponent, useContext } from "react";

import { Basket } from "./basket/Basket";
import styles from "./layout.module.scss";
import { ILayoutProps } from "./layout.props";
import { Sidebar } from "./sidebar/Sidebar";
import { Button, Languages } from "../components";
import { IMainContext, MainContext, MainContextProvider } from "../context";

export const Layout: FC<ILayoutProps> = ({ children, ...props }) => {
  const { openBasket, setOpenBasket, basket } = useContext<IMainContext>(MainContext);
  const counter = Object.values(basket).reduce((acc, curr) => acc + curr.counter, 0);

  return (
    <div {...props}>
      <Sidebar />
      <main className={styles.main}>
        <Languages />
        <Basket
          opened={openBasket ? openBasket : false}
          onClose={() => {
            if (setOpenBasket) {
              setOpenBasket(false);
            }
          }}
        />
        {/*<div className={styles.basket_icon}>*/}
        {/*  <Button*/}
        {/*    onClick={() => {*/}
        {/*      if (setOpenBasket) {*/}
        {/*        setOpenBasket(true);*/}
        {/*      }*/}
        {/*    }}*/}
        {/*    variant="secondary"*/}
        {/*    counter={counter}>*/}
        {/*    <i className="icon-basket" />*/}
        {/*  </Button>*/}
        {/*</div>*/}
        <div className={styles.container}>{children}</div>
      </main>
    </div>
  );
};

export const withLayout =
  <T extends Record<string, unknown>>(Component: FunctionComponent<T>) =>
  (props: T) =>
    (
      <MainContextProvider basket={{}}>
        <Layout>
          <Component {...props} />
        </Layout>
      </MainContextProvider>
    );
