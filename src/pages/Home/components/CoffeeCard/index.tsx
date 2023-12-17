import {
  CardButton,
  CardContainer,
  CardContent,
  CardDescription,
  CardFooter,
  CardInput,
  CardPrice,
  CardTag,
  CardTags,
  CardTitle,
} from "./style";
import { ShoppingCart, Plus } from "phosphor-react";
import { Product } from "../../../../Models/Product";
import { useContext } from "react";
import { CoffeeDeliveryContext } from "../../../../contexts/CartContex";

interface CoffeeCardProps {
  product: Product;
}

export function CoffeeCard({ product }: CoffeeCardProps) {
  const contextCart = useContext(CoffeeDeliveryContext);


  const { AddItemToCart } = contextCart;

  function handleAddItemToCart(){    
    AddItemToCart(product);
  }

  return (
    <CardContainer>
      <CardContent>
        <img src={`/src/assests/${product.imagem}`} alt="" />
        <CardTags>
          {product.tags.map((tag) => {
            return <CardTag key={tag}>{tag}</CardTag>;
          })}
        </CardTags>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
        <CardFooter>
          <CardPrice>R$ {product.price.toLocaleString()}</CardPrice>
          <CardInput>
            <input type="number"></input>
            <CardButton onClick={handleAddItemToCart}>
              <ShoppingCart size={18} weight="fill"  />
            </CardButton>
          </CardInput>
        </CardFooter>
      </CardContent>
    </CardContainer>
  );
}
