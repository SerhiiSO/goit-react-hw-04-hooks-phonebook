import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
    }

    body,
    html{
        height: 100%;
        font-family: Verdana, Geneva, Tahoma, sans-serif;
        /* overflow: hidden; */
    }
    
    p{
        overflow-wrap: break-word;
        font-size:10px;
        padding-top: 5px;
    }

    input{
        border-radius: 5px;
        padding: 5px;
        border: 1px solid #000;
        ::placeholder{
            font-size: 10px;
            font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
        }
    }
    ul{
        list-style: none;
    }

    button{
        cursor: pointer;
        background-color: inherit;
        border: none;
    }

    
`


export default GlobalStyle;