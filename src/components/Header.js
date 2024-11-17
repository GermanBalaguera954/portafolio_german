import React from "react";
import "../styles/Header.css";
import { motion } from 'framer-motion';

function Header() {
  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1>¡Hola! Soy German Balaguera</h1>
      <p>Desarrollador/a Frontend | React | JavaScript</p>
    </motion.header>
  );
}

export default Header;

