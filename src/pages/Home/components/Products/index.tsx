import { useContext } from "react";
import { CoffeeCard } from "../CoffeeCard";
import { ProductContainer, ProductList } from "./style";
import { CoffeeDeliveryContext } from "../../../../contexts/CartContex";

export function Products() {
  const coffeDeliveryContext= useContext(CoffeeDeliveryContext)

  const {products } = coffeDeliveryContext;
  return (    
    <ProductContainer>
      <h1>Nossos Cafés</h1>

    
      <ProductList>
      {
        products.map((product)=>{
          return <CoffeeCard key={product.id} product={product}></CoffeeCard>  
        })
      }                
      </ProductList>
    </ProductContainer>
  );
}
