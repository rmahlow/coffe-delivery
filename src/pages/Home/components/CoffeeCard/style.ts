import { styled } from "styled-components";


export const CardContainer = styled.div`

    height:19.375rem ;
    width: 16rem;
    background: ${props => props.theme["base-card"]} ;
    border-top-left-radius: 6px ;
    border-top-right-radius: 36px ;
    border-bottom-left-radius: 36px ;
    border-bottom-right-radius: 6px ;
`
export const CardContent = styled.div`
    display: flex ;
    align-items:center ;
    justify-content: center ;
    flex-direction:column ;


   img{
        margin-top:-20px ;
        width:7.5rem ;
        height:7.5rem ;
    }
`

export const CardTags = styled.div`
    margin-top:0.75rem;
    display: flex;
    gap:0.25rem;

`

export const CardTag = styled.div`
    background:${props => props.theme["yellow-100"]};
    color:${props => props.theme["yellow-900"]};
    border-radius: 99px;
    padding: 0.25rem 0.5rem;
    font-weight: bold ;
    text-transform: uppercase ;
    font-size:0.75rem ;
`

export const CardTitle = styled.div`
    font-family: "Baloo 2",sans-serif;
    font-size: 1.25rem ;
    color: ${props => props.theme["base-title"]};
    margin-top: 1rem;
`

export const CardDescription = styled.div`
    color:${props => props.theme["base-label"]};
    font-size: 0.875rem;
    margin-top: 0.5rem ;
    padding-left:1.25rem;
    padding-right:1.25rem;
    text-align:center ;


`

export const CardFooter = styled.footer`
    width:100% ;
    display:flex ;
    justify-content:space-between;    
    align-items:center;
    
    margin-top:2.062rem ;
    padding-left:1.25rem;
    padding-right:1.25rem;
`

export const CardPrice = styled.div``

export const CardInput = styled.div`
    display: flex ;
    gap:0.5rem;
    input{
        width:4.5rem ;
        background:${props => props.theme["base-input"]} ;
        border:0;
        text-align: center ;        
        color:${props => props.theme["base-title"]}
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }    
`

export const CardInputValue = styled.div`
    width:4.5rem ;
    background:${props => props.theme["base-input"]} ;
    border:0;
    text-align: center ;        
    color:${props => props.theme["base-title"]}
`
export const CardButton = styled.div`
    cursor: pointer;
    background:${props => props.theme["purple-700"]} ;
    color:${props => props.theme["base-card"]};
    border-radius: 6px ;
    width: 2.35rem ;
    height: 2.35rem ;
    display:flex;
    align-items:center;
    justify-content:center;
`
