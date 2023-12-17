import { styled } from "styled-components"

export const BannerContainer = styled.div`
    background: url("/src/assests/background-banner.png");
    background-repeat: round;
`


export const BannerContent = styled.div`

    padding: 2rem 20rem;
    display:flex;    
    justify-content:space-between ;
    padding-top:5.75rem;
    padding-bottom:5.75rem;
    gap:3.5rem;
    


    img{
        height:360px;
        width: 476px;
    }

    h1{
        color:${props => props.theme["base-title"]};
        font-family: "Baloo 2",sans-serif ;
        font-size: 3rem ;
        line-height: 1.3;
    }

    .description{
        margin-top:1rem;
        display:block ;
        font-size: 1.25rem;
    }
`

export const BenefitsContaner = styled.div`
    margin-top:4.125rem;
    display:grid;
    grid-template-columns: 1fr 1fr ;
    grid-row-gap:1.25rem ;
    grid-column-gap: 2.5rem;


    
`
const BACKGOUND_ICON_COLOR ={
    YELLOW_DARK:"yellow-900",
    YELLOW:"yellow-500",
    BASE:"base-text",
    PURPLE:"purple-500",

}

interface BackgroundIconBenefitsProps {
    backgroundcolor: keyof typeof BACKGOUND_ICON_COLOR
}
export const IconBenefitsBase = styled.div<BackgroundIconBenefitsProps>`
    background-color: ${props => props.theme[BACKGOUND_ICON_COLOR[props.backgroundcolor]] } ;    
    border-radius: 99px;
    width: 32px;
    height: 32px;   
    color:${props => props.theme.background};    
    display:flex;
    align-items:center ;
    justify-content:center;    
    
`

export const BenefitsContent = styled.div`
    display:flex;
    align-items: center;
    gap:0.75rem;

    span{
        font-size:0.875rem ;
    }

`



