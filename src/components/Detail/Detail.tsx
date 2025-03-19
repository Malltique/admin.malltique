import { Carousel } from "@mantine/carousel";
import { Badge, Image, ActionIcon } from "@mantine/core";
import React, { FC, useContext } from "react";

import styles from "./detail.module.scss";
import { IDetailProps } from "./detail.props";
import { IMainContext, MainContext } from "../../context";
import { IProduct } from "../../interface";
import { Button } from "../_ui";
import { Notification } from "../Notification/Notification";

export const Detail: FC<IDetailProps> = ({ product, onClose, ...props }) => {
  const { basket, setInBasket, setOpenBasket } = useContext<IMainContext>(MainContext);

  const counter = basket[product.id || "0"]?.counter;

  const handleSetProductInBasketClick = () => {
    if (setInBasket) {
      setInBasket((prev: { [key: string]: { product: IProduct; counter: number } }) => {
        if (product.id && prev[product.id]) {
          return {
            ...prev,
            [product.id]: {
              ...prev[product.id],
              counter: prev[product.id].counter + 1,
            },
          };
        } else {
          return {
            ...prev,
            [product.id || "0"]: {
              counter: 1,
              product,
            },
          };
        }
      });
    }
  };

  const handleOpenBasketClick = () => {
    onClose();
    if (setOpenBasket) {
      setOpenBasket(true);
    }
  };

  return (
    <div {...props} className={styles.detail}>
      <Carousel withControls={false} withIndicators slideGap="md" dragFree>
        {product?.images?.all.map((img) => (
          <Carousel.Slide className={styles.slide} key={img}>
            <Image src={img} />
          </Carousel.Slide>
        ))}
      </Carousel>
      <div className={styles.price_wrapper}><span className={styles.price}>{product.price} $</span></div>
      <div className={styles.seller}>
        <div className={styles.title}>Продавец</div>
        <h3>{product?.seller?.name}</h3>
        <div className={styles.contacts}>
          <p>Телефон:</p> <span>{product?.seller?.phone}</span>
        </div>
        <div className={styles.contacts}>
          <p>Email:</p> <span>{product?.seller?.email}</span>
        </div>
      </div>
      <div className={styles.description}>
        <div className={styles.title}>Описание</div>
        <h3>{product.category}</h3>
        <p className={styles.description_text}>{product.descriptions}</p>
        <div className={styles.basket_wrapper}>
          <div className={styles.badge}>
            {product?.tags?.map((tag) => (
              <Badge key={tag} color="gray">
                {tag}
              </Badge>
            ))}
          </div>
          <Button onClick={handleSetProductInBasketClick} variant="secondary">
            <i className="icon-basket" />
          </Button>
          <Notification
            onOpenBasketClick={handleOpenBasketClick}
            img={product.images?.main}
            counter={counter}
            productId={product.id}
            isOpenNotification={!!counter}
          />
        </div>
      </div>
      <div className={styles.detail_footer}>
        <ActionIcon onClick={onClose}>
          <i className="icon-close" />
        </ActionIcon>
        <p className={styles.date}>25.02.2023</p>
      </div>
    </div>
  );
};
