export type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  ququantity: number;
};

export interface Props {
  product: ProductType;
  fill?: boolean;
}
