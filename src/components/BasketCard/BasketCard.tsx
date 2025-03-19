import { ActionIcon, Badge, Image } from "@mantine/core";
import React, { FC, useContext } from "react";

import styles from "./basketCard.module.scss";
import { IBasketCardProps } from "./basketCard.props";
import { IMainContext, MainContext } from "../../context";

export const BasketCard: FC<IBasketCardProps> = ({ onDeleteItemClick, product, ...props }) => {
  const { setInBasket, basket } = useContext<IMainContext>(MainContext);

  const handleIncreaseClick = () => {
    if (setInBasket && product.product.id) {
      setInBasket((prev) => ({
        ...prev,
        [product.product.id]: {
          ...prev[product.product.id],
          counter: prev[product.product.id].counter + 1,
        },
      }));
    }
  };

  const handleDecreaseClick = () => {
    if (setInBasket && product.product.id) {
      setInBasket((prev) => ({
        ...prev,
        [product.product.id]: {
          ...prev[product.product.id],
          counter: prev[product.product.id].counter - 1,
        },
      }));
    }
  };

  const handleDeleteItemClick = () => {
    if (setInBasket) {
      const newBasket = { ...basket };
      delete newBasket[product.product.id || ""];
      setInBasket(newBasket);
    }
  };

  return (
    <div className={styles.basket_card} {...props}>
      <div className={styles.basket_detail}>
        <div className={styles.basket_delete} onClick={handleDeleteItemClick}>
          Удалить
        </div>
        <Image height="5rem" src={product.product.images?.main} />
        <div className={styles.description}>
          <h3 className={styles.title}>{product.product.category}</h3>
          <div className={styles.counter_price}>
            <div className={styles.basket_counter}>
              {product.counter === 1 ? (
                  <ActionIcon onClick={handleDeleteItemClick}>
                    <i color="red" className="icon-close" />
                  </ActionIcon>
              ) : (
                  <ActionIcon onClick={handleDecreaseClick}>
                    <i className="icon-minus" />
                  </ActionIcon>
              )}
              {product.counter}
              <ActionIcon onClick={handleIncreaseClick}>
                <i className="icon-plus" />
              </ActionIcon>
            </div>
            <div className={styles.basket_price}>{product?.product?.price && product?.product?.price  * product.counter} $</div>
          </div>
        </div>
      </div>
    </div>
  );
};
