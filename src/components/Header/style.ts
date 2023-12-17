import { styled } from "styled-components"


export const HeaderContainer = styled.header`
    display:flex ;
    justify-content:space-between;
    align-items:center;
    padding: 2rem 20rem;

    nav {
        display:flex;
        flex-direction: row;
        gap:0.75rem;
        align-items:center;
        justify-content: center ;               
    }
`

export const CartContainer = styled.div`
    background:${props => props.theme["yellow-100"]} ;
    padding: 0.58rem;
    border-radius:6px;
    color:${props => props.theme["yellow-900"]};
    height:2.375rem;
    position:relative ;
`

export const CartQuantity= styled.div`
    position:absolute ;
    width: 1.25rem ;
    height: 1.25rem ;
    border-radius: 99px ;
    background: ${props => props.theme["yellow-900"]} ;
    color: ${props => props.theme.white};    
    bottom: 1.625rem;
    left: 1.625rem;
    color: white;
    display:flex ;
    align-items:center ;
    justify-content:center;
    font-weight: bold ;
    font-size:  0.875rem;

`

export const LocationContainer = styled.div`
    font-size:0.875rem;    
    display:flex;
    align-items: center;
    height:2.375rem;
    justify-content:center ;
    gap:0.5rem;
    background:${props => props.theme["purple-100"]} ;
    padding: 0.58rem;
    border-radius:6px;
    color:${props => props.theme["purple-700"]}
`