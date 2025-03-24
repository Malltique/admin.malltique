import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import { IAuthProps } from "./auth.props";
import styles from "./auth.module.scss";
import {
  Button as ButtonWithIcon,
  Divider,
  Group,
  PasswordInput,
  Tabs,
  Textarea,
  TextInput,
  Card,
} from "@mantine/core";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";
import { PageTitle, Button } from "../../components";

export const Auth: FC<IAuthProps> = () => {
  const [activeTab, setActiveTab] = useState<any>("Login");
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = () => {
    // Validation and submission logic
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log({
      storeName,
      email,
      password,
      zipCode,
      address,
    });
  };
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.product_name}>
        <PageTitle>{activeTab}</PageTitle>
      </div>

      <Tabs value={activeTab} onTabChange={setActiveTab}>
        <Tabs.List grow>
          <Tabs.Tab value="Login">Login</Tabs.Tab>
          <Tabs.Tab value="Registration">Registration</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel value="Login" pt="md">
          <Card shadow="sm" radius="md" withBorder>
            <TextInput label="Email" placeholder="Enter your email" required mb="sm" />
            <PasswordInput label="Password" placeholder="Enter your password" required mb="sm" />
            <Button>Login</Button>
          </Card>
        </Tabs.Panel>

        <Tabs.Panel value="Registration" pt="md">
          <Card shadow="sm" radius="md" withBorder>
            <form onSubmit={(e) => e.preventDefault()}>
              <TextInput
                label="Store Name"
                placeholder="Enter store name"
                value={storeName}
                onChange={(e) => setStoreName(e.target.value)}
                required
                mb="sm"
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

              <PasswordInput
                label="Confirm Password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                mt="sm"
              />

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

              <Divider my="md" />

              <Group position="right" mt="md">
                <Button onClick={handleSubmit}>Register</Button>
              </Group>
            </form>
          </Card>
          <Divider my="md" label="Or continue with" labelPosition="center" />
          <Group grow>
            <ButtonWithIcon
              leftIcon={<IconBrandGoogle size={16} />}
              variant="outline"
              color="gray"
              fullWidth
              radius="md"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                textTransform: "none",
                fontWeight: "500",
                padding: "12px",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
              }}>
              Google
            </ButtonWithIcon>

            <ButtonWithIcon
              leftIcon={<IconBrandFacebook size={16} />}
              variant="outline"
              color="blue"
              fullWidth
              radius="md"
              style={{
                backgroundColor: "#fff",
                border: "1px solid #ddd",
                textTransform: "none",
                fontWeight: "500",
                padding: "12px",
                boxShadow: "none",
                display: "flex",
                alignItems: "center",
              }}>
              Facebook
            </ButtonWithIcon>
          </Group>
        </Tabs.Panel>
      </Tabs>
    </motion.section>
  );
};
