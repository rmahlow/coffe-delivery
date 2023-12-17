import {
  CurrencyDollar,
  MapPin,
  Money,
  CreditCard,
  Bank,
} from "phosphor-react";
import {
  Cart,
  CartSelect,
  CartSelectContainer,
  CartSelectContent,
  CheckoutContaner,
  FormContainer,
  FormContent,
  FormHeaderContainer,
  FormHeaderContent,
  FormInputContainer,
  FormPaymentType,
  Input,
} from "./style";
import { ReactNode, useContext, useState } from "react";
import { CoffeeDeliveryContext } from "../../contexts/CartContex";
import { TypePayment } from "../../Models/TypePayment";

interface SelectCartProps {
  selected: boolean;
  typePayment: TypePayment;
  icon: ReactNode;
}

export function Checkout() {
  const context = useContext(CoffeeDeliveryContext);

  const [typePayment, setTypePayment] = useState<SelectCartProps[]>([
    {
      selected: false,
      typePayment: { name: "CARTÃO DE CRÉDITO" },
      icon: <CreditCard />,
    },
    {
      selected: false,
      typePayment: { name: "CARTÃO DE DÉBITO" },
      icon: <Bank />,
    },
    {
      selected: false,
      typePayment: { name: "DINHEIRO" },
      icon: <Money />,
    },
  ]);

  function handleTypePayment(typePaymentSelected: TypePayment) {
    console.log("caiu aqui")
    var _typePayment = typePayment.map((x) => {
      x.selected = false;
      return x;
    });

    _typePayment = _typePayment.map((x) => {
      if(x.typePayment.name === typePaymentSelected.name){
        x.selected = true;
      }
      return x;
    })

    setTypePayment([..._typePayment])
  }

  return (
    <CheckoutContaner>
      <FormContainer>
        <h1>Complete seu pedido</h1>
        <FormContent>
          <FormHeaderContainer>
            <MapPin size={22}></MapPin>
            <FormHeaderContent>
              <p>Endereço de Entrega</p>
              <span>Informe o endereço onde deseja receber seu pedido</span>
            </FormHeaderContent>
          </FormHeaderContainer>
          <form action="">
            <FormInputContainer>
              <Input name="cep" placeholder="CEP"></Input>
              <Input name="rua" placeholder="Rua"></Input>
              <Input name="numero" placeholder="Número"></Input>
              <Input name="complemento" placeholder="Complemento"></Input>
              <Input name="bairro" placeholder="Bairro"></Input>
              <Input name="cidade" placeholder="Cidade"></Input>
              <Input name="uf" placeholder="UF"></Input>
            </FormInputContainer>
          </form>
        </FormContent>
        <FormPaymentType>
          <FormHeaderContainer>
            <CurrencyDollar size={22}></CurrencyDollar>
            <FormHeaderContent>
              <p>Pagamento</p>
              <span>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </span>
            </FormHeaderContent>
          </FormHeaderContainer>
          <CartSelect>
            {typePayment.map((x) => {
              return (
                <Cart
                  onClick={() => handleTypePayment(x.typePayment)}
                  key={x.typePayment.name}
                  seleted={x.selected}
                >
                  {x.icon} {x.typePayment.name}
                </Cart>
              );
            })}
          </CartSelect>
        </FormPaymentType>
      </FormContainer>
      <CartSelectContainer>
        <h1>Cafés selecionados</h1>
        <CartSelectContent>
          <p>teste</p>
        </CartSelectContent>
      </CartSelectContainer>
    </CheckoutContaner>
  );
}
