import {ActionIcon, Drawer, ScrollArea, useMantineTheme } from "@mantine/core";
import React, {FC, useContext, useState} from "react";
import cn from "classnames";

import styles from "./basket.module.scss";
import { IBasketProps } from "./basket.props";
import {BasketCard, BasketStub, Button, Input, Shapes} from "../../components";
import { IMainContext, MainContext } from "../../context";
import {useNavigate} from "react-router-dom";

export const Basket: FC<IBasketProps> = ({ onClose, ...props }) => {
  const { basket, setInBasket } = useContext<IMainContext>(MainContext);
  const theme = useMantineTheme();
  const basketItems = Object.values(basket);

  const navigation = useNavigate()
  const [openOrder, setOpenOrder] = useState(false)

  const handleDeleteItemClick = (id?: number | string) => {
    if (setInBasket) {
      const newBasket = { ...basket };
      delete newBasket[id || ""];
      setInBasket(newBasket);
    }
  };

  const totalPrice = basketItems.reduce((acc, currProduct) => acc + currProduct.product.price * currProduct.counter, 0)
  return (
    <Drawer
      onClose={onClose}
      position="right"
      overlayColor={theme.colors.gray[2]}
      overlayOpacity={0.55}
      overlayBlur={3}
      padding={15}
      {...props}>
      <Shapes />
      {!basketItems.length && <BasketStub onClose={onClose} />}
      {!!basketItems.length && (
        <div className={styles.basket_wrapper}>
          <ScrollArea h="75vh" className={styles.basket_orders}>
            {basketItems.map((item) => (
              <BasketCard key={item.product.id} product={item} onDeleteItemClick={handleDeleteItemClick} />
            ))}
            <div className={cn(styles.basket_price, {
              [styles.basket_price_order]: openOrder
            })}>Итого: {totalPrice} $</div>
            <div className={cn(styles.button_wrapper, {
              [styles.button_wrapper_order]: openOrder
            })} onClick={() => setOpenOrder((prev) => !prev)}>
              {openOrder ? "Заказать" : "Продолжить"}
            </div>
            <div className={cn(styles.basket_footer, {
              [styles.basket_footer_open]: openOrder
            })}>
              <ActionIcon onClick={() => setOpenOrder(false)} className={styles.close_order}><i className="icon-close"/></ActionIcon>
              <h3 className={styles.basket_info}>
                Наш менеджер свяжется с вами, чтобы уточнить актуальные цены и способ доставки.
              </h3>
              <div className={styles.input_wrapper}>
                <Input placeholder="Name" />
              </div>
              <div className={styles.input_wrapper}>
                <Input placeholder="Phone" />
              </div>
              <div className={styles.input_wrapper}>
                <Input placeholder="Email" />
              </div>
            </div>
          </ScrollArea>
          <Button variant="outline" onClick={() => {
            navigation("/product")
            onClose()
          }}>Вернуться в магазин</Button>
        </div>
      )}
    </Drawer>
  );
};
