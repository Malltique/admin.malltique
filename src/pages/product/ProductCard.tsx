import React from "react";
import { ActionIcon, Badge, Card, Group, Image, Rating, Text } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export const ProductCard = ({product, openEditModal}: any) => (
    <Card key={product.id} shadow="sm" radius="md" withBorder mb="md">
      <Group align="flex-start" noWrap>
        <Image src={product.images[0]} width={100} height={100} radius="md" />
        <div style={{ flex: 1 }}>
          <Group position="apart">
            <Link key={product.id} to={`/product/${product.id}`} style={{ textDecoration: 'none' }}>
              <Text size="sm" color="blue" style={{ cursor: 'pointer' }}>{product.title}</Text>
            </Link>
            <Group>
              <ActionIcon variant="subtle" color="blue">
                <IconEdit size={18} onClick={() => openEditModal(product)}/>
              </ActionIcon>
              <ActionIcon variant="subtle" color="red">
                <IconTrash size={18} />
              </ActionIcon>
            </Group>
          </Group>
          <Text size="sm" c="dimmed">{product.category}</Text>
          <Group mt="xs">
            {product.tags.map((tag: any) => (
              <Badge key={tag} color="blue" variant="light">{tag}</Badge>
            ))}
          </Group>
          <Rating value={product.rating} readOnly mt="xs" />
          <Text size="sm" mt="xs" c="dimmed">{product.description}</Text>
        </div>
      </Group>
    </Card>
  );
