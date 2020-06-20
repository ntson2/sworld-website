import * as CONSTANT from '../constants/constants';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
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