import { Image, Modal, useMantineTheme } from "@mantine/core";
import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import { IProductProps } from "./product.props";
import { Button, Detail, Input, PageTitle } from "../../components";
import { PRODUCT_MOCK } from "../../data";
import { IProduct } from "../../interface";

import styles from "./product.module.scss";

export const Product: FC<IProductProps> = () => {
  const [openModal, setOpenModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState<IProduct>({ id: 0, price: 0 });

  const theme = useMantineTheme();

  const handleOpenModalClick = (product: IProduct) => {
    setCurrentProduct(product);
    setOpenModal(true);
  };
  const handleCloseModalClick = () => setOpenModal(false);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Modal
        withCloseButton={false}
        opened={openModal}
        onClose={handleCloseModalClick}
        overlayColor={theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        size="md">
        <Detail onClose={handleCloseModalClick} product={currentProduct} />
      </Modal>
      <div className={styles.product_header}>
        <div className={styles.product_name}>
          <PageTitle>Магазин</PageTitle>
        </div>
        <div className={styles.filter_wrapper}>
          <div className={styles.input_wrapper}>
            <div className={styles.search_icon_wrapper}>
              <i className="icon-magnifier" />
            </div>
            <Input type="text" placeholder="Поиск" />
          </div>
          <Button>
            <i className="icon-equalizer" />
          </Button>
        </div>
      </div>
      <div className={styles.product_grid}>
        {PRODUCT_MOCK.map((product) => (
          <div className={styles.product_card} key={product.id}>
            <div className={styles.product_thumbnail}>
              <Image src={product?.images?.main} alt="" className={styles.product_img} />
              <div className={styles.product_mask}></div>
            </div>
            <span className={styles.product_category}>{product.category}</span>
            <h3 className={styles.product_title}>{product.title}</h3>
            <a onClick={() => handleOpenModalClick(product)} className={styles.product_button}>
              <i className="icon-list" />
            </a>
          </div>
        ))}
      </div>
    </motion.section>
  );
};
