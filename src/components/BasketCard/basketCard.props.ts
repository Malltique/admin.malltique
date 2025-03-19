import { DetailedHTMLProps, HTMLAttributes } from "react";

import { IProduct } from "../../interface";

export interface IBasketCardProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: { counter: number; product: IProduct };
  onDeleteItemClick: (id?: number | string) => void;
}
