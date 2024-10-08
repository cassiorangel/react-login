import { createGlobalStyle } from "styled-components";
import 'bootstrap/dist/css/bootstrap.min.css';

const GlobalStyle = createGlobalStyle`
    
   * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;   
   }

   body {
     width: 100vw;
     height: 100vh;
     background: #f0f2f5;
     font-family: Poppins;
   }
  `

export default GlobalStyle;