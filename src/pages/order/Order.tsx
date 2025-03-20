import { Image, Modal, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import {IOrderProps} from "./order.props";
import { Button, Input, PageTitle } from "../../components";
import { PRODUCT_MOCK } from "../../data";
import { IProduct } from "../../interface";

import styles from "./order.module.scss";

export const Order: FC<IOrderProps> = () => {
  const [openModal, setOpenModal] = useState(false);

  const theme = useMantineTheme();

  const handleCloseModalClick = () => setOpenModal(false);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.product_header}>
        <div className={styles.product_name}>
          <PageTitle>Orders</PageTitle>
        </div>
        <div className={styles.filter_wrapper}>
          <div className={styles.input_wrapper}>
            <div className={styles.search_icon_wrapper}>
              <i className="icon-magnifier" />
            </div>
            <Input type="text" placeholder="Search" />
          </div>
          <Button>
            <i className="icon-equalizer" />
          </Button>
        </div>
      </div>
      <div className={styles.product_grid}>
        {/*{PRODUCT_MOCK.map((product) => (*/}
        {/*  <div className={styles.product_card} key={product.id}>*/}
        {/*    <div className={styles.product_thumbnail}>*/}
        {/*      <Image src={product?.images?.main} alt="" className={styles.product_img} />*/}
        {/*      <div className={styles.product_mask}></div>*/}
        {/*    </div>*/}
        {/*    <span className={styles.product_category}>{product.category}</span>*/}
        {/*    <h3 className={styles.product_title}>{product.title}</h3>*/}
        {/*    <a onClick={() => handleOpenModalClick(product)} className={styles.product_button}>*/}
        {/*      <i className="icon-list" />*/}
        {/*    </a>*/}
        {/*  </div>*/}
        {/*))}*/}
      </div>
    </motion.section>
  );
};
