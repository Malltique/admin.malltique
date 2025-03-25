import React, { useState } from "react";
import { Button as ButtonWithIcon, Card, Divider, Group, PasswordInput, Textarea, TextInput } from "@mantine/core";
import { Button } from "../../../components";
import { IconBrandFacebook, IconBrandGoogle } from "@tabler/icons-react";
import { useRegister } from "./query";

export const Registration = () => {
  const [storeName, setStoreName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const userData = {name: storeName, password, email, roles: [0] }

  const { data, error, isLoading, refetch } = useRegister(userData);

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    refetch(); // Запускаем запрос вручную
  };

  return (
    <>
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

          <Group position="right" mt="md">
            <Button onClick={handleRegister}>Register</Button>
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
    </>
  );
};
