export type Sizes = {
  id: string;
  name: string;
  price: number;
  isActive: boolean;
  item: number;
};

export type Pizza = {
  id: string;
  title: string;
  price: number;
  image: string;
  sizes: Sizes[];
  rating: number;
};

export type Data = {
  count: number
  next: null | string
  previous: null | string
  results: Pizza[]
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'completed',
  ERROR = 'error',
}

export type SearchPizzaParams = {
  ordering: string;
  category: string;
  search: string;
  currentPage: string;
};

export interface PizzaSliceState {
  data: Data;
  status: Status;
}
