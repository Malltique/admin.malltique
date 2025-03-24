import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import { IProductProps } from "./product.props";
import { Button, Input, PageTitle } from "../../components";

import styles from "./product.module.scss";
import {
  Card,
  Image,
  Text,
  Badge,
  Group,
  Rating,
  ActionIcon,
  Modal,
  TextInput,
  Select,
  MultiSelect, FileInput, Textarea
} from "@mantine/core";
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { ProductCard } from "./ProductCard";

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
  const [editProduct, setEditProduct] = useState<any>(null);
  const [modalOpened, setModalOpened] = useState(false);

  const openEditModal = (product: any) => {
    setEditProduct(product);
    setModalOpened(true);
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
          <Button>
            <i className="icon-equalizer" />
          </Button>
        </div>
      </div>
      <div >
        {products.map((product) => (
          <ProductCard product={product} openEditModal={openEditModal}/>
        ))}
      </div>
      <Modal opened={modalOpened} onClose={() => setModalOpened(false)} title="Edit Product">
        {editProduct && (
          <form>
            <TextInput label="Title" defaultValue={editProduct.title} required mb="sm" />
            <Select label="Category" data={categories} defaultValue={editProduct.category} required mb="sm" />
            <MultiSelect label="Tags" data={tags} defaultValue={editProduct.tags} mb="sm" />
            <FileInput label="Upload Images (up to 6)" multiple accept="image/*" mb="sm" />
            <Textarea label="Description" defaultValue={editProduct.description} required mb="sm" />
            <Button type="submit">Save</Button>
          </form>
        )}
      </Modal>
    </motion.section>
  );
};
