import { createGlobalStyle } from "styled-components";
import wonder from "./fonts/wonder.ttf";
const FontStyles = createGlobalStyle`

@font-face {
  font-family: 'wonder';
  src: url(${wonder}) format('truetype');
}
`;

export default FontStyles;