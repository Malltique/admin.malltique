import { Drawer, useMantineTheme } from "@mantine/core";
import React, {FC, useContext } from "react";

import { ILoginProps } from "./login.props";
import { Shapes} from "../../components";
import { IMainContext, MainContext } from "../../context";

export const Login: FC<ILoginProps> = ({ onClose, ...props }) => {
  const { token, setToken, openLogin, setOpenLogin } = useContext<IMainContext>(MainContext);
  const theme = useMantineTheme();
  return (
    <Drawer
      onClose={onClose}
      position="right"
      overlayColor={theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      padding={15}
      {...props}>

    </Drawer>
  );
};
