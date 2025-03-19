import { motion } from "framer-motion";
import React, { FC } from "react";
import { useNavigate } from "react-router-dom";
import Typical from "react-typical";

import styles from "./home.module.scss";
import { IHomeProps } from "./home.props";
import { ReactComponent as Avatar } from "../../assets/balloon seller-cuate.svg";
import { Button, Shapes, Socials } from "../../components";

export const Home: FC<IHomeProps> = () => {
  const navigate = useNavigate();
  const steps = ["Deep Cleaning 🧹", 3000, "Move-In/Move-Out 🧽", 3000, "Apartment Cleaning 🏠", 3000];
  return (
    <motion.section className={styles.home} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className={styles.intro}>
        <Avatar className={styles.home_img} />
        <h1 className={styles.home_name}>Become A Seller</h1>
        {/*<span className={styles.education}>*/}
        {/*  We offer: <Typical steps={steps} loop={Infinity} wrapper="span" />*/}
        {/*</span>*/}
        <Socials />
        <Button onClick={() => navigate("/product")}>Sign Up </Button>
      </div>
      <Shapes />
    </motion.section>
  );
};
