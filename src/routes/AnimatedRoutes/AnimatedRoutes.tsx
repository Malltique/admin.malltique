import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Contacts, Dashboard, Home, Order, Product, Settings, Auth, ProductDetail } from "../../pages";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/admin.malltique" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/product/" element={<Product />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/order" element={<Order />} />
        <Route path="/settings/:tab" element={<Settings />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </AnimatePresence>
  );
};
