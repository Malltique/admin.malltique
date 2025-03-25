import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import { IProfileProps } from "./profile.props";
import { Button, Input, PageTitle } from "../../components";
import styles from "./profile.module.scss";
import { Card, FileButton, Tabs, Textarea, TextInput, Text, Group, Image, PasswordInput } from "@mantine/core";

export const Profile: FC<IProfileProps> = () => {
  const [storeName, setStoreName] = useState("Store Name");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  const [storeImage, setStoreImage] = useState(
    "https://poscenter.kz/upload/iblock/01f/14onz36nubr0ora7rsrj9hfzhpr4tjpl.jpg"
  );

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
              <TextInput
                label="Store Name"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                required
                mb="sm"
              />
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
            <Card mb="md" shadow="sm" radius="md" withBorder>
              <TextInput
                label="ZIP Code"
                placeholder="Enter your ZIP code"
                value={zipCode}
                onChange={(e) => setZipCode(e.target.value)}
                required
                mt="sm"
              />

              <Textarea
                label="Legal Address"
                placeholder="Enter your legal address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                required
                mt="sm"
              />
              <TextInput
                label="Email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                required
                mt="sm"
              />

              <PasswordInput
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                mt="sm"
              />
            </Card>
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
  );
};
