import { css, styled } from "styled-components";

export const CheckoutContaner = styled.div`

    padding: 2rem 20rem;
    display:grid ;
    grid-template-columns: 40rem 1fr  ;
    column-gap:2rem ;
  

    h1{
        font-size: 1.125rem ;
        font-family:"Baloo 2",sans-serif ;
        color:${props => props.theme["base-subtitle"]};        
        
    }
    
    
`

export const Input = styled.input `
    background: ${props => props.theme["base-input"]} ;
    padding: 0.75rem ;
    border:1px solid ${props => props.theme["base-button"]};
    color: ${props => props.theme["base-text"]};
    border-radius: 6px ;
    width:100% ;

    &::placeholder {
        color: ${props => props.theme["base-label"]};
    }
`

export const FormInputContainer = styled.div`
    display:grid ;
    row-gap: 1rem;
    column-gap: 0.75rem ;  
    
    grid-template-columns: 200px 1fr 60px;

    grid-template-areas: 'cep . .'
                         'rua rua rua'
                         'numero complemento complemento'
                         'bairro cidade uf' ;

    > input[name="cep"]{
        grid-area: cep;
    }

    > input[name="rua"]{
        grid-area: rua;
    }
    > input[name="numero"]{
        grid-area: numero;
    }
    > input[name="complemento"]{
        grid-area: complemento;
    }
    > input[name="bairro"]{
        grid-area: bairro;
    }

    > input[name="cidade"]{
        grid-area: cidade;
    }

    > input[name="uf"]{
        grid-area: uf;
    }

    
    :focus{
        outline:0 ;
        box-shadow: 0 0 0 2px ${props => props.theme["yellow-900"]} ;
    }

`

export const FormContainer = styled.div`   
    display:flex ;
    flex-direction:column ;
    row-gap: 0.875rem ;
    /* gap:0.875rem; */
`

export const FormContent = styled.div`
   
    width:100% ;
    background: ${props => props.theme["base-card"]} ;
    padding:2.5rem;
    border-radius: 6px ;

    svg{
        color:${props => props.theme["yellow-900"]}
    }
`

export const FormHeaderContainer = styled.div`
    display: flex ;
    justify-content:flex-start;
    align-items:start;
    gap:0.5rem;
    line-height: 1.5;

    margin-bottom: 2rem;

    
`

export const FormHeaderContent = styled.div`      
    p{
        color:${props => props.theme["base-subtitle"]};
        font-size:1rem;
        font-weight:bold ;
    }

    span{
        color:${props => props.theme["base-text"]};
        font-size:0.875rem ;

    }

`

export const FormPaymentType = styled.div`
    background: ${props => props.theme["base-card"]} ;
    padding:2.5rem;
    border-radius: 6px ;

    svg{
        color:${props => props.theme["purple-500"]}
    }
`

export const CartSelectContainer = styled.div`    
    display:flex ;
    flex-direction:column ;
    row-gap: 0.875rem;
    
`

export const CartSelectContent = styled.div `
   // margin-top: 1rem;
    width:100% ;
    background: ${props => props.theme["base-card"]} ;
    padding:2.5rem;
    border-radius: 6px ;
    border-top-right-radius: 44px;
    border-bottom-left-radius: 44px;
`

export const CartSelect = styled.div`
    margin-top:2rem;
    display: flex ;
    flex-direction:row;
    gap:0.75rem ;
`

interface SelectedProps {
    seleted : boolean
}

export const Cart = styled.div<SelectedProps>`
    background:${props => props.theme["base-button"]} ;
    border: 1px solid ${props => props.theme["base-button"]} ;
    padding:1rem;
    border-radius:6px ;
    text-transform:uppercase ;
    display:flex;
    gap:0.75rem;
    color:${props => props.theme["base-text"]};
    font-size:0.75rem ;
    flex:1;
    cursor: pointer;  
    transition: all 0.2s ;
    
    &:hover{
        background:${props => props.theme["base-hover"]} ;
    }

    ${props => props.seleted && css`
        background:${props => props.theme["purple-100"]};
        border: 1px solid ${props => props.theme["purple-500"]};
    `}
    
`
