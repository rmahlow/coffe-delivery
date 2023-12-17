import {
  ReactNode,
  createContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { Checkout } from "../Models/Checkout";
import { GetProducts, Product } from "../Models/Product";
import { Cart, ProductCart } from "../Models/Cart";
import { CartReducer } from "../reducers/cart/reducer";
import {
  AddItemToCart,
  DeleteItemToCart,
  UpdateQuantityDown,
  UpdateQuantityUP,
} from "../reducers/cart/actions";

interface CoffeeDeliveryContextType {
  products: Product[];
  checkout?: Checkout;
  cart?: Cart;
  AddItemToCart: (product: Product) => void;
  RemoveItemToCart: (id: number) => void;
  UpdateItemUP: (id: number) => void;
  UpdateItemDown: (id: number) => void;
}

export const CoffeeDeliveryContext = createContext(
  {} as CoffeeDeliveryContextType
);

interface CoffeeDeliveryProvider {
  children: ReactNode;
}

export function CoffeeDeliveryProvider({ children }: CoffeeDeliveryProvider) {
  const [products, setProducts] = useState<Product[]>([]);
  const [cartState, dispatch] = useReducer(CartReducer, { cart: {
    products:[]
  } });

  useEffect(() => {
    setProducts(GetProducts());
  }, []);

  function AddITem(product: Product) {
    let cardProduct :ProductCart;
    cardProduct ={...product,quantity: 1}
    dispatch(AddItemToCart(cardProduct));
  }

  function RemoveItem(id: number) {
    dispatch(DeleteItemToCart(id));
  }

  function UpdateUp(id: number) {
    dispatch(UpdateQuantityUP(id));
  }

  function UpdateDown(id: number) {
    dispatch(UpdateQuantityDown(id));
  }

  return (
    <CoffeeDeliveryContext.Provider
      value={{
        cart:cartState.cart,
        products: products,
        AddItemToCart: AddITem,
        RemoveItemToCart: RemoveItem,
        UpdateItemUP: UpdateUp,
        UpdateItemDown: UpdateDown,
      }}
    >
      {children}
    </CoffeeDeliveryContext.Provider>
  );
}
