import React, { createContext, Dispatch, PropsWithChildren, SetStateAction, useState } from "react";

import { IProduct } from "../interface";

export interface IMainContext {
  token: string | null;
  setToken?: Dispatch<SetStateAction<null | string>>;
  openLogin: boolean;
  setOpenLogin?: Dispatch<SetStateAction<boolean>>;
}

export const MainContext = createContext<IMainContext>({
  token: null,
  openLogin: false,
});

export const MainContextProvider = ({ children }: PropsWithChildren<IMainContext>): JSX.Element => {
  const [token, setToken] = useState<string | null>(null);
  const [openLogin, setOpenLogin] = useState(false);


  return (
    <MainContext.Provider value={{ openLogin, setOpenLogin, token, setToken }}>{children}</MainContext.Provider>
  );
};
