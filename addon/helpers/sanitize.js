import { helper } from '@ember/component/helper';
import sanitizeHtml from 'sanitize-html';

/*
 * Sanitize HTML according to: https://www.npmjs.com/package/sanitize-html
 * Used to sanitize HTML in the search result
 */
export default helper(function sanitize([html]) {
  return sanitizeHtml(html);
});
