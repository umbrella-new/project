import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
:root {
	--space0 :12px;
	--space1 : 10px;
	--space2 : 8px;
	--space3 : 5px;
	--space4: 3px;
	--controller-width:278px;
	--chart-width:580px
	
	--font-size3: 14px;
	--font-size4: 16px;
	--font-size5: 18px;
	--font-size6: 20px;
	--font-size7: 12px;
	
}
* {
	box-sizing: border-box;
	margin: 0;
  padding: 0;
	/* transition: all 300ms ease-in; */
}
body {

	
  /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/
font-family: 'Orbitron', sans-serif;

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;	
	vertical-align: baseline;
	color: #fff;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
  

}
button {
	outline: none;
	border: none;
	cursor: pointer;
	background-color: transparent;
	margin: 0;
  padding: 0;
	font-family: 'Orbitron', sans-serif;		
	color: #fff;
}
input {
	border: none;
	text-align: center;
	font-family: 'Orbitron', sans-serif;		
	color: #fff;
	::placeholder {
		font-family: 'Orbitron', sans-serif;		
	}
}
ol, ul,li {
	list-style: none;
	padding: 0;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
input:focus {
	outline:none
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
}
`;

export default GlobalStyle;
