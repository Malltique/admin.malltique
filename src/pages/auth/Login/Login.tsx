import React, { useState } from "react";
import { Card, Group, PasswordInput, TextInput } from "@mantine/core";
import { Button } from "../../../components";
import { useLogin } from "./query";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = useLogin();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate({ email, password });
  };

  return (
    <Card shadow="sm" radius="md" withBorder>
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        label="Email"
        placeholder="Enter your email"
        required
        mb="sm"
      />
      <PasswordInput
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        label="Password"
        placeholder="Enter your password"
        required
        mb="sm"
      />
      <Group position="right" mt="md">
        <Button onClick={handleLogin}>Login</Button>
      </Group>
    </Card>
  );
};
