import { motion } from "framer-motion";
import React, { FC, useState } from "react";
import { useParams } from "react-router-dom";

import { ISettingsProps } from "./settings.props";
import { Button, PageTitle } from "../../components";
import { Card, FileButton, Tabs, Textarea, TextInput, Text, Group, Image, PasswordInput } from "@mantine/core";
import avatar from '../../layout/sidebar/avatar.jpg';

const TABS: any = {
  "1": "settings",
  "2": "myStore"
}

export const Settings: FC<ISettingsProps> = () => {
  const {tab} = useParams<string>()
  const [storeName, setStoreName] = useState(tab ? TABS[tab] : TABS["1"]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  const [storeImage, setStoreImage] = useState(
    "https://poscenter.kz/upload/iblock/01f/14onz36nubr0ora7rsrj9hfzhpr4tjpl.jpg"
  );

  const [mainImage, setMainImage] = useState(avatar);

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <PageTitle title="Settings"/>
      <Tabs defaultValue="1" mt="md">
        <Tabs.List grow>
          <Tabs.Tab value="1">My store</Tabs.Tab>
          <Tabs.Tab value="2">Settings</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="2" pt="md">
          <Card shadow="sm" radius="md" withBorder mb="md">
            <Group align="flex-start" noWrap>
              <Image src={mainImage} width={120} height={120} radius="md" alt="Store Logo" />
              <div style={{ flex: 1 }}>
                <TextInput
                  label="Name"
                  value={storeName}
                  onChange={(e) => setStoreName(e.target.value)}
                  required
                  mb="sm"
                />
                <FileButton onChange={(file) => file && setMainImage(URL.createObjectURL(file))} accept="image/*">
                  {(props) => <Button {...props}>Upload main photo</Button>}
                </FileButton>
              </div>
            </Group>
          </Card>
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
        <Tabs.Panel value="1" pt="md">
          <Card shadow="sm" radius="md" withBorder mb="md">
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
      </Tabs>
      <>


      </>
    </motion.section>
  );
};
