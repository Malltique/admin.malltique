import { motion } from "framer-motion";
import React, { FC } from "react";

import {ISettingsProps} from "./settings.props";
import { Button, Input, PageTitle } from "../../components";
import styles from "./settings.module.scss";

export const Settings: FC<ISettingsProps> = () => (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.product_header}>
        <div className={styles.product_name}>
          <PageTitle>Settings</PageTitle>
        </div>
      </div>
      <div className={styles.product_grid}>
      </div>
    </motion.section>
  );
