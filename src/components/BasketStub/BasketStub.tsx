import React from "react";
import { useNavigate } from "react-router-dom";

import styles from "./BasketStub.module.scss";
import { ReactComponent as EmptyIcon } from "../../assets/empty.svg";
import { Button } from "../_ui";

export const BasketStub = ({ onClose }: { onClose: () => void }) => {
  const navigate = useNavigate();
  return (
    <div className={styles.basket_stub}>
      <EmptyIcon className={styles.basket_stub_icon} />
      Ваша корзина пуста
      <Button
          variant="outline"
        onClick={() => {
          onClose();
          navigate("/product");
        }}>
        В магазин
      </Button>
    </div>
  );
};
