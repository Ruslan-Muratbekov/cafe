import { RootState } from '../store';

export const selectCart = (state: RootState) => state.cart;

export const selectCartItemCountById = (id: string) => (state: RootState) =>
  state.cart.items.filter((obj) => obj.cardId === id).map(item => item.count).reduce((acc, item) => acc + item, 0);
