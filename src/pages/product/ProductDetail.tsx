import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  FileButton,
  Group,
  Image,
  MultiSelect,
  Textarea,
  TextInput
} from "@mantine/core";
import { Button, DeleteModal, PageTitle } from "../../components";
import { useCreateProduct, useDeleteProduct } from "./query";
import { useParams } from "react-router-dom";

export const ProductDetail = () => {
  const [openDeleteModal, setOpenDeleteModal] = useState(false)
  const [name, setName] = useState("Product Name");
  const [description, setDescription] = useState("Product Description");
  const [model, setModel] = useState("Product Model");
  const [article, setArticle] = useState("Product Article");
  const [price, setPrice] = useState("100");
  const [quantity, setQuantity] = useState("20");
  const [categories, setCategories] = useState<string[]>([]);
  const [categoriesData, setCategoriesData] = useState([
    { value: "0", label: "New" },
    { value: "1", label: "Popular" },
  ]);



  const {id} = useParams()
  const isCreate = id === "0"

  const mutation = useCreateProduct();
  const { mutate: deleteProducts } = useDeleteProduct();

  const handleDelete = () => {
    // @ts-ignore
    deleteProducts([+id], {
      onSuccess: () => {
        setOpenDeleteModal(false)
      }
    });
  };

  const handleSubmit = () => {
    // @ts-ignore
    mutation.mutate([{ seller: 82, name, description, categories: [1, 3, 5], quantity: 50, price: 100,  model, article, pictureLinks: []}]);
  };

  const [productImage, setProductImage] = useState(
    "https://michaelkors.scene7.com/is/image/MichaelKors/49T0MAFS3D-3260_1?$large$"
  );

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <PageTitle title={isCreate ? 'Create' : 'Edit'} />
      <Card shadow="sm" radius="md" withBorder>
        <Group align="flex-start" noWrap>
          <Image src={productImage} width={120} height={120} radius="md" alt="Logo" />
          <div style={{ flex: 1 }}>
            <TextInput label="Name" value={name} onChange={(e) => setName(e.target.value)} required mb="sm" />
            <FileButton onChange={(file) => file && setProductImage(URL.createObjectURL(file))} accept="image/*">
              {(props) => <Button {...props}>Upload Images</Button>}
            </FileButton>
          </div>
        </Group>
      </Card>
      <Card mt="md" mb="md" shadow="sm" radius="md" withBorder>
        <Textarea
          label="Description"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          mt="sm"
        />

        <TextInput
          label="Price"
          placeholder="Enter price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
          mt="sm"
        />

        <TextInput
          label="Quantity"
          placeholder="Enter quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          mt="sm"
        />

        <TextInput
          label="Model"
          placeholder="Enter model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
          mt="sm"
        />

        <TextInput
          label="Article"
          placeholder="Enter article"
          value={article}
          onChange={(e) => setArticle(e.target.value)}
          required
          mt="sm"
        />

        <MultiSelect
          label="Categories"
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
      <Group align="flex-start" noWrap>
        <Button onClick={handleSubmit}>{isCreate ? "Add Product" : "Save Changes"}</Button>
        {!isCreate && <Button variant="outline" onClick={() => setOpenDeleteModal(true)}>Delete</Button>}
      </Group>
      <DeleteModal onConfirm={handleDelete} opened={openDeleteModal} onClose={() => setOpenDeleteModal(false)}/>
    </motion.section>
  );
};
