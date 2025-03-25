import React, { useState } from "react";
import { motion } from "framer-motion";
import { Card, FileButton, Group, Image, MultiSelect, PasswordInput, Textarea, TextInput } from "@mantine/core";
import { Button, PageTitle } from "../../components";
import styles from "../profile/profile.module.scss";
import { useCreateProduct } from "./query";

export const ProductDetail = () => {
  const [name, setName] = useState("Product Name");
  const [description, setDescription] = useState("Product Description");
  const [price, setPrice] = useState('100');
  const [quantity, setQuantity] = useState('20');
  const [categories, setCategories] = useState<string[]>([]);
  const [categoriesData, setCategoriesData] = useState([
    { value: '0', label: 'New' },
    { value: '1', label: 'Popular' },
  ]);

  const mutation = useCreateProduct();

  const handleSubmit = () => {
    // @ts-ignore
    mutation.mutate([{ seller: 82, name, description, categories: [1, 3, 5], quantity: 50, price: 100 }]);
  };

  const [productImage, setProductImage] = useState(
    "https://michaelkors.scene7.com/is/image/MichaelKors/49T0MAFS3D-3260_1?$large$"
  );

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.product_header}>
        <div className={styles.product_name}>
          <PageTitle>Profile</PageTitle>
        </div>
      </div>
      <Card shadow="sm" radius="md" withBorder>
        <Group align="flex-start" noWrap>
          <Image src={productImage} width={120} height={120} radius="md" alt="Store Logo" />
          <div style={{ flex: 1 }}>
            <TextInput
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              mb="sm"
            />
            <FileButton onChange={(file) => file && setProductImage(URL.createObjectURL(file))} accept="image/*">
              {(props) => <Button {...props}>Upload Store Logo</Button>}
            </FileButton>
          </div>
        </Group>
      </Card>
      <Card mb="md" shadow="sm" radius="md" withBorder>
        <TextInput
          label="Description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          mt="sm"
        />

        <Textarea
          label="Price"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          mt="sm"
        />

        <Textarea
          label="Quantity"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          mt="sm"
        />

        <MultiSelect
          label="Creatable MultiSelect"
          data={categoriesData}
          placeholder="Select items"
          searchable
          creatable
          getCreateLabel={(query) => `+ Create ${query}`}
          value={categories}
          onChange={setCategories}
          onCreate={(query) => {
            const item = { value: query, label: query };
            setCategoriesData((current) => [...current, item]);
            return item;
          }}
        />
      </Card>

      <Button onClick={handleSubmit}>Save Changes</Button>
    </motion.section>
  );
};
