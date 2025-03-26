import { motion } from "framer-motion";
import React, { FC, useState } from "react";

import {IDashboardProps} from "./product.props";
import { Container, Card, Title, Grid, ColSpan } from "@mantine/core";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell, AreaChart, Area } from "recharts";
import styles from "./product.module.scss";
import { PageTitle } from "../../components";

const salesData = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 600 },
  { month: "Mar", sales: 800 },
  { month: "Apr", sales: 1200 },
];

const productSales = [
  { product: "Laptops", sales: 300 },
  { product: "Phones", sales: 500 },
  { product: "Tablets", sales: 200 },
];

const COLORS = ["#8884d8", "hsl(353, 100%, 65%)", "hsl(43, 100%, 68%)"];

export const Dashboard: FC<IDashboardProps> = () => {
  return (
    <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.product_header}>
        <div className={styles.product_name}>
          <PageTitle>Dashboard</PageTitle>
        </div>
      </div>
      <Container size="lg">
        <Grid grow gutter="lg">
          {/* Линейныйрафик */}
          <Grid.Col span={4}>
              <Title order={4} mb="sm">Monthly Sales</Title>
              <LineChart width={400} height={250} data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="sales" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
          </Grid.Col>

          {/* Столбчатый график */}
          <Grid.Col span={4}>
              <Title order={4} mb="sm">Sales by Month</Title>
              <BarChart width={400} height={250} data={salesData}>
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="sales" fill="#82ca9d" />
              </BarChart>
          </Grid.Col>

          {/* Круговая диаграмма */}
          <Grid.Col span={4}>
              <Title order={4} mb="sm">Sales by Product</Title>
              <PieChart width={300} height={300}>
                <Pie data={productSales} dataKey="sales" nameKey="product" cx="50%" cy="50%" outerRadius={100} label>
                  {productSales.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
          </Grid.Col>

          {/* Площадной график */}
          <Grid.Col span={4}>
              <Title order={4} mb="sm">Sales Trend</Title>
              <AreaChart width={400} height={250} data={salesData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="sales" stroke="#ffc658" fill="#ffc658" />
              </AreaChart>
          </Grid.Col>
        </Grid>
      </Container>
    </motion.section>
  )};
