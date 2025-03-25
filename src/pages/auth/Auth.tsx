import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import { IAuthProps } from "./auth.props";
import styles from "./auth.module.scss";
import { Tabs } from "@mantine/core";
import { PageTitle } from "../../components";
import { Registration } from "./Registration/Registration";
import { Login } from "./Login/Login";

export const Auth: FC<IAuthProps> = () => {
  const [activeTab, setActiveTab] = useState<any>("Login");

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.product_name}>
        <PageTitle>{activeTab}</PageTitle>
      </div>

      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List grow>
          <Tabs.Tab value="Login">Login</Tabs.Tab>
          <Tabs.Tab value="Registration">Registration</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Login" pt="md">
          <Login />
        </Tabs.Panel>

        <Tabs.Panel value="Registration" pt="md">
          <Registration />
        </Tabs.Panel>
      </Tabs>
    </motion.section>
  );
};
