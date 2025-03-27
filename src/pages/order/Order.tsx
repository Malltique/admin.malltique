import { Badge, Tabs, Table, Group, Card } from "@mantine/core";
import { motion } from "framer-motion";
import React, { FC } from "react";

import { IOrderProps } from "./order.props";
import { PageTitle } from "../../components";

import { IconCheck, IconClipboardList, IconClock, IconTruck } from "@tabler/icons-react";

const ordersData = {
  new: [
    { article: "A001", name: "Product 1", quantity: 5, message: "Urgent delivery" },
    { article: "A002", name: "Product 2", quantity: 2, message: "Gift wrap please" },
  ],
  inProgress: [{ article: "B001", name: "Product 3", quantity: 3, message: "Handle with care" }],
  inDelivery: [{ article: "C001", name: "Product 4", quantity: 10, message: "Deliver before 5 PM" }],
  completed: [{ article: "D001", name: "Product 5", quantity: 7, message: "No rush" }],
};

export const Order: FC<IOrderProps> = () => {

  const renderTable = (data: any) => (
    <Table>
      <thead>
        <tr>
          <th>Article</th>
          <th>Name</th>
          <th>Quantity</th>
          <th>Message from Customer</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item: any, index: any) => (
          <tr key={index}>
            <td>{item.article}</td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.message}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );

  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <PageTitle title="Orders" withFilters withSearch/>
        <Tabs defaultValue="new" mt="md">
          <Tabs.List mb="md">
            <Tabs.Tab value="new">
              <Group>
                <IconClipboardList size={16} /> New <Badge color="green">{ordersData.new.length}</Badge>
              </Group>
            </Tabs.Tab>
            <Tabs.Tab value="inProgress">
              <Group>
                <IconClock size={16} /> In Progress <Badge color="pink">{ordersData.inProgress.length}</Badge>
              </Group>
            </Tabs.Tab>
            <Tabs.Tab value="inDelivery">
              <Group>
                <IconTruck size={16} /> In Delivery <Badge color="pink"> {ordersData.inDelivery.length}</Badge>
              </Group>
            </Tabs.Tab>
            <Tabs.Tab value="completed">
              <Group>
                <IconCheck size={16} /> Completed <Badge color="pink">{ordersData.completed.length}</Badge>
              </Group>
            </Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="new">
            <Card mb="md" shadow="sm" radius="md" withBorder>
              {renderTable(ordersData.new)}
            </Card>
          </Tabs.Panel>
          <Tabs.Panel value="inProgress">
            <Card mb="md" shadow="sm" radius="md" withBorder>
              {renderTable(ordersData.inProgress)}
            </Card>
          </Tabs.Panel>
          <Tabs.Panel value="inDelivery">
            <Card mb="md" shadow="sm" radius="md" withBorder>
              {renderTable(ordersData.inDelivery)}
            </Card>
          </Tabs.Panel>
          <Tabs.Panel value="completed">
            <Card mb="md" shadow="sm" radius="md" withBorder>
              {renderTable(ordersData.completed)}
            </Card>
          </Tabs.Panel>
        </Tabs>
    </motion.section>
  );
};
