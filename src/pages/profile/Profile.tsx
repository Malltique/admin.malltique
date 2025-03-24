import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import {IProfileProps} from "./profile.props";
import { Button, Input, PageTitle } from "../../components";
import styles from "./profile.module.scss";
import { Card, FileButton, Tabs, Textarea, TextInput, Text, Group, Image } from "@mantine/core";

export const Profile: FC<IProfileProps> = () => {
  const [storeName, setStoreName] = useState('Store Name');
  const [storeDescription, setStoreDescription] = useState('Store description, policies, and contact info...');
  const [storeImage, setStoreImage] = useState('https://poscenter.kz/upload/iblock/01f/14onz36nubr0ora7rsrj9hfzhpr4tjpl.jpg');


  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.product_header}>
        <div className={styles.product_name}>
          <PageTitle>Profile</PageTitle>
        </div>
      </div>
      <>
        <Card shadow="sm" radius="md" withBorder>
          <Group align="flex-start" noWrap>
            <Image src={storeImage} width={120} height={120} radius="md" alt="Store Logo" />
            <div style={{ flex: 1 }}>
              <TextInput label="Store Name" value={storeName} onChange={(e) => setStoreName(e.target.value)} required
                         mb="sm" />
              <FileButton onChange={(file) => file && setStoreImage(URL.createObjectURL(file))} accept="image/*">
                {(props) => <Button {...props}>Upload Store Logo</Button>}
              </FileButton>
            </div>
          </Group>
        </Card>

        <Tabs defaultValue="details" mt="md">
          <Tabs.List grow>
            <Tabs.Tab value="details">Store Details</Tabs.Tab>
            <Tabs.Tab value="products">Questions</Tabs.Tab>
            <Tabs.Tab value="reviews">Reviews</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="details" pt="md">
            <Textarea label="Store Description" value={storeDescription}
                      onChange={(e) => setStoreDescription(e.target.value)} required mb="sm" />
            <Button>Save Changes</Button>
          </Tabs.Panel>

          <Tabs.Panel value="products" pt="md">
            <Text size="sm">Admin product management section...</Text>
          </Tabs.Panel>

          <Tabs.Panel value="reviews" pt="md">
            <Text size="sm">Customer reviews and ratings...</Text>
          </Tabs.Panel>
        </Tabs>
      </>
    </motion.section>
)};
