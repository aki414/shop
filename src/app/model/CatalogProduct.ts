export default interface CatalogProduct {
  id: string;
  code: string;
  name: string;
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
  status: Status;
  discount?: number;
  createdAt: Date;
  updatedAt: Date;
}



export interface SizeStock {
  id: string;
  size: string;
  stock: number;
}

export enum Status {
  INSTOCK = 'INSTOCK',
  LOWSTOCK = 'LOWSTOCK',
  OUTOFSTOCK = 'OUTOFSTOCK',
}


