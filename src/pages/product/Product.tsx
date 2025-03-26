import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import { IProductProps } from "./product.props";
import { Button, Input, PageTitle } from "../../components";

import styles from "./product.module.scss";

import { IconPlus } from "@tabler/icons-react";
import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { useDeleteProduct, useProduct } from "./query";

const categories = ['Category 1', 'Category 2', 'Category 3'];
const tags = ['New', 'Popular', 'Trending', 'Discount'];

const products = [
  {
    id: 1,
    images: ['https://michaelkors.scene7.com/is/image/MichaelKors/49T0MAFS3D-3260_1?$large$'],
    title: 'Product Name',
    category: 'Category 1',
    tags: ['New', 'Popular'],
    rating: 4.5,
    description: 'A brief description of the product. Very useful and interesting item.',
  },
  {
    id: 2,
    images: ['https://michaelkors.scene7.com/is/image/MichaelKors/49T0MAFS3D-3260_1?$large$'],
    title: 'Another Product',
    category: 'Category 2',
    tags: ['Trending'],
    rating: 4.0,
    description: 'Description of the second product. A great choice for buyers.',
  },
];

export const Product: FC<IProductProps> = () => {
  const navigate = useNavigate()
  const {data} = useProduct();
  const { mutate: deleteProducts } = useDeleteProduct();

  const handleDelete = (id: number) => {
    // @ts-ignore
    deleteProducts([id]);
  };


  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.product_header}>
        <div className={styles.product_name}>
          <PageTitle>Products</PageTitle>
        </div>
        <div className={styles.filter_wrapper}>
          <div className={styles.input_wrapper}>
            <div className={styles.search_icon_wrapper}>
              <i className="icon-magnifier" />
            </div>
            <Input type="text" placeholder="Search" />
          </div>
          <Button onClick={() => navigate("0")}>
            <IconPlus size={18}/>
          </Button>
        </div>
      </div>
      <div >
        {data?.map((product: any) => (
          <ProductCard product={product}
                       key={product.id}
                       onDelete={handleDelete}
          />
        ))}
      </div>
    </motion.section>
  );
};
