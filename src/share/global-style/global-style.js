import * as CONSTANT from '../constants/constants';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

    html,
    body {
        font-size:1.5rem;
        font-weight:400;
        line-height:2rem;
        text-transform:none;
        text-transform:initial;
        letter-spacing:normal;
        letter-spacing:initial;
        font-weight:400;
    }

    @media (min-width: 40em) {
        html,
        body{
            font-size:1.4rem;
        }
    }
  
    html,
    body,
    button{
        font-family:-apple-system, BlinkMacSystemFont, San Francisco, Segoe UI, Roboto, Helvetica Neue, sans-serif;
    }
  
    html {
        position:relative;
        font-size:62.5%;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
        -webkit-text-size-adjust:100%;
                text-size-adjust:100%;
        text-rendering:optimizeLegibility;
    }
  
    body {
        min-height:100%;
        margin:0;
        padding:0;
        background: #ffffff;
    }
  
    *,
    *::before,
    *::after{
        box-sizing:border-box;
    }

    a::focus {
        border: none;
    }
  
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p {
        margin:0;
        font-size:1em;
        font-weight:400;
    }
  
    button::-moz-focus-inner,
    [type='button']::-moz-focus-inner,
    [type='reset']::-moz-focus-inner,
    [type='submit']::-moz-focus-inner {
        border-style:none;
    }
  

    @font-face {
        font-family: "SFUGillSans";
        src: url("${CONSTANT.ENV}/fonts/SFUGillSansRegular.eot"); /* IE9 Compat Modes */
        src: url("${CONSTANT.ENV}/fonts/SFUGillSansRegular.eot?#iefix") format("embedded-opentype"), /* IE6-IE8 */
        url("${CONSTANT.ENV}/fonts/SFUGillSansRegular.otf") format("opentype"), /* Open Type Font */
        url("${CONSTANT.ENV}/fonts/SFUGillSansRegular.svg") format("svg"), /* Legacy iOS */
        url("${CONSTANT.ENV}/fonts/SFUGillSansRegular.ttf") format("truetype"), /* Safari, Android, iOS */
        url("${CONSTANT.ENV}/fonts/SFUGillSansRegular.woff") format("woff"), /* Modern Browsers */
        url("${CONSTANT.ENV}/fonts/SFUGillSansRegular.woff2") format("woff2"); /* Modern Browsers */
        font-weight: normal;
        font-style: normal;
    }
`

export default GlobalStyle;