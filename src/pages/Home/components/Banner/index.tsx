import banner from "../../../../assests/banner.svg";

import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";
import {
  BannerContainer,
  BannerContent,
  BenefitsContaner,
  BenefitsContent,
  IconBenefitsBase,
} from "./style";

export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <span className="description">
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </span>

          <BenefitsContaner>
            <BenefitsContent>
              <IconBenefitsBase backgroundcolor="YELLOW_DARK">
                <ShoppingCart size={16} weight="fill"></ShoppingCart>
              </IconBenefitsBase>
              <span>Compra simples e segura</span>
            </BenefitsContent>
            <BenefitsContent>
              <IconBenefitsBase backgroundcolor="BASE">
                <Package size={16} weight="fill"></Package>
              </IconBenefitsBase>
              <span>Embalagem mantém o café intacto</span>
            </BenefitsContent>
            <BenefitsContent>
              <IconBenefitsBase backgroundcolor="YELLOW">
                <Timer size={16} weight="fill"></Timer>
              </IconBenefitsBase>
              <span>Entrega rápida e rastreada</span>
            </BenefitsContent>
            <BenefitsContent>
              <IconBenefitsBase backgroundcolor="PURPLE">
                <Coffee size={16} weight="fill"></Coffee>
              </IconBenefitsBase>
              <span>O café chega fresquinho até você</span>
            </BenefitsContent>
          </BenefitsContaner>
        </div>
        <img src={banner} alt="" />
      </BannerContent>
    </BannerContainer>
  );
}
