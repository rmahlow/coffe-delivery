import {
  CartContainer,
  CartQuantity,
  HeaderContainer,
  LocationContainer,
} from "./style";
import logo from "../../assests/logo.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CoffeeDeliveryContext } from "../../contexts/CartContex";

export function Header() {
  var context = useContext(CoffeeDeliveryContext);
  var { cart } = context;
  console.log("cart");
  console.log(cart);
  return (
    <HeaderContainer>
      <NavLink to="/">
        <img src={logo} alt="" />
      </NavLink>
      <nav>
        <LocationContainer>
          <MapPin size={18} weight="fill" /> Porto Alegre, RS
        </LocationContainer>
        <NavLink to="/checkout">
          <CartContainer>
            {cart?.products.length ? (
              <CartQuantity>{cart?.products.length}</CartQuantity>
            ) : (
              ""
            )}
            <ShoppingCart size={18} weight="fill" />
          </CartContainer>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
