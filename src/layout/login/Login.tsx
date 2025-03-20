import { Drawer, useMantineTheme } from "@mantine/core";
import React, { ChangeEvent, FC, FormEvent, useContext, useState } from "react";

import { ILoginProps } from "./login.props";
import { Button, Input } from "../../components";
import { IMainContext, MainContext } from "../../context";
import styles from './login.module.scss';

interface FormData {
  email: string;
  password: string;
}

export const Login: FC<ILoginProps> = ({ onClose, ...props }) => {
  const theme = useMantineTheme();
  const { token, setToken, openLogin, setOpenLogin } = useContext<IMainContext>(MainContext);
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Обработка данных (например, отправка на сервер)
    console.log("Submitted data:", formData);
  };

  return (
    <Drawer
      onClose={onClose}
      position="right"
      overlayColor={theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      padding={15}
      {...props}>
      <form onSubmit={handleSubmit} action="" className={styles.form}>
        <div className={styles.form_group}>
          <div className={styles.input_wrapper}>
            <Input type="email"
                   name="email"
                   placeholder="Email"
                   value={formData.email}
                   onChange={handleChange}
            />
          </div>
          <div className={styles.input_wrapper}>
            <Input type="password"
                   name="password"
                   placeholder="Password"
                   value={formData.password}
                   onChange={handleChange}
            />
          </div>
        </div>
        <Button type="submit">Sign in</Button>
      </form>
    </Drawer>
);
};
