export interface IProduct {
  images?: {
    main: string;
    all: string[];
  };
  seller?: {
    name: string;
    phone: string;
    email: string;
  };
  descriptions?: string;
  tags?: string[];
  title?: string;
  price: number;
  id: string | number;
  category?: string;
}
