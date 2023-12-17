import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box ;
}

body{
    background: ${props =>  props.theme.background};
    color: ${props => props.theme['base-text']};
    -wekit-font-smoothing:antialiased;
}

body,input,textarea,button{
    font-family: 'roboto',sans-serif;
    font-weight:400 ;
    font-size:1rem ;
}
`