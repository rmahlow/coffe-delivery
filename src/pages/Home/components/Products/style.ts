import { styled } from "styled-components";

export const ProductContainer = styled.div`
    padding: 2rem 20rem;

    h1{
        font-family:"Baloo 2" ;
        color:${props => props.theme["base-title"]};
        font-size: 2rem;
    }
`

export const ProductList = styled.div`
    margin-top:3.75rem;
    display:flex;
    flex-wrap:wrap ;
    row-gap: 2.5rem;
    column-gap: 1.5rem ;

`