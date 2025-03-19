import {DetailedHTMLProps, HTMLAttributes} from "react";
import {IProduct} from "../../interface";

export interface IDetailProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    onClose: () => void;
    product: IProduct;
}