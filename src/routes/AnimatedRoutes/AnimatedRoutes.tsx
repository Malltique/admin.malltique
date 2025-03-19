import { AnimatePresence } from "framer-motion";
import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import { Contacts, Home, Product } from "../../pages";

export const AnimatedRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/admin.malltique" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </AnimatePresence>
  );
};
