import { createContext, Dispatch, ReactNode, useMemo, useReducer } from 'react';

const SET_PRODUCTS = 'SET_PRODUCTS';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';

interface IProduct {
  id: string,
  name: string,
  price: number,
  quantity: number,
}

type Props = {
  children: ReactNode,
};

type ProductState = {
  products: IProduct[],
};

type ProductAction = {
  type: string,
  payload?: IProduct[] | IProduct | string,
}

type ProductContext = {
  state: ProductState;
  dispatch: Dispatch<ProductAction>;
};

const initialState: ProductState = {
  products: [],
};

const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { products: action.payload as IProduct[] };
    case UPDATE_PRODUCT: {
      return {
        products: state.products.map((item) => {
          if (item.id === (action.payload as IProduct).id) {
            return action.payload as IProduct;
          } return item;
        })
      };
    }
    case DELETE_PRODUCT: {
      const productId = action.payload;
      return {
        products: state.products.filter((item) => (item.id !== productId))
      };
    }
    default:
      return state;
  }
};


export const ProductContext = createContext<ProductContext>({ state: initialState, dispatch: () => undefined });

const ProductsReducer = ({ children }: Props) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  const contextValues = useMemo(() => ({ state, dispatch }), [state, dispatch]);
  return (
    <ProductContext.Provider value={contextValues}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductsReducer;
