import { motion } from "framer-motion";
import React, { FC } from "react";

import {IDashboardProps} from "./product.props";
import { Button, Input, PageTitle } from "../../components";
import styles from "./product.module.scss";

export const Dashboard: FC<IDashboardProps> = () => (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.product_header}>
        <div className={styles.product_name}>
          <PageTitle>Dashboard</PageTitle>
        </div>
      </div>
      <div className={styles.product_grid}>
      </div>
    </motion.section>
  );
