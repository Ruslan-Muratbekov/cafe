export type CartItem = {
  id: string | number;
  cardId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  count: number;
  description: any;
};
export type CartItemMinus = {
  id: string;
  cardId: string;
  name: string;
  price: number;
  image: string;
  size: string;
  count: number;
  description: any;
};

export interface CartSliceState {
  totalPrice: number;
  items: CartItem[];
}
