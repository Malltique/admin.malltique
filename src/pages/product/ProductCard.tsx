import React, { useState } from "react";
import { ActionIcon, Badge, Card, Group, Image, Rating, Text } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { DeleteModal } from "../../components";


export const ProductCard = ({product, onDelete, loading}: any) => {
  const [opened, setOpened] = useState(false);

return (
  <Card key={product.id} shadow="sm" radius="md" withBorder mb="md">
    <DeleteModal
      opened={opened}
      onClose={() => setOpened(false)}
      onConfirm={() => {
        onDelete(product.id);
        setOpened(false)
      }}
      loading={loading}
    />
    <Group align="flex-start" noWrap>
      <Image
        src="https://michaelkors.scene7.com/is/image/MichaelKors/49T0MAFS3D-3260_1?$large$"
        width={100}
        height={100}
        radius="md"
      />
      <div style={{ flex: 1 }}>
        <Group position="apart">
          <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: "none" }}>
            <Text size="sm" color="blue" style={{ cursor: "pointer" }}>
              {product.name}
            </Text>
          </Link>
          <Group>
            <ActionIcon variant="subtle" color="red">
              <IconTrash size={18} onClick={() => setOpened(true)} />
            </ActionIcon>
          </Group>
        </Group>
        <Text size="sm" c="dimmed">
          {product.price}
        </Text>
        {product.tags && (
          <Group mt="xs">
            {product.tags.map((tag: any) => (
              <Badge key={tag} color="blue" variant="light">
                {tag}
              </Badge>
            ))}
          </Group>
        )}
        <Rating value={4} readOnly mt="xs" />
        <Text size="sm" mt="xs" c="dimmed">
          {product.description}
        </Text>
      </div>
    </Group>
  </Card>
);};
