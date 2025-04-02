import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import { IProductProps } from "./product.props";
import { PageTitle, Button } from "../../components";
import { Stack, Text, Button as MantineButton } from "@mantine/core";
import { ReactComponent as Stub } from '../../assets/stub.svg';
import { ProductCard } from "./ProductCard";
import { useNavigate } from "react-router-dom";
import { useDeleteProduct, useProduct } from "./query";
import styles from "./product.module.scss";

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

  const showStub = !data?.length


  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <PageTitle title="Products" withFilters withSearch/>
      {!showStub && (
        <MantineButton mb="md"
                       onClick={() => navigate("0")}
                       fullWidth
                       variant="gradient"
                       gradient={{ from: 'hsla(43,100%,68%,0.18)' , to:'hsla(353,100%,65%,0.66)', deg: 35 }}>
          Add Product
        </MantineButton>
      )}
      <div>
        {data?.map((product: any) => (
          <ProductCard product={product}
                       key={product.id}
                       onDelete={handleDelete}
          />
        ))}
        {showStub && (
          <div className={styles.stub_wrapper}>
            <Stack align="center" spacing="md">
              <Stub className={styles.stub} />
              <Text size="xl" weight={500}>
                No products available yet
              </Text>
              <Button onClick={() => navigate("0")}>
                Add Product
              </Button>
            </Stack>
          </div>
        )}
      </div>
    </motion.section>
  );
};
