import withReact from '../../../utils/with-react.js';
import AXACookieDisclaimer from './index.wc.js';

export default (createElement, version) =>
  withReact(createElement, AXACookieDisclaimer, version);
