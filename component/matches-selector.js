/**
 * Module dependencies.
 */

// try {
//     var query = require('query');
//   } catch (err) {
//     var query = require('component-query');
//   }
import query from './component-query';
  /**
   * Element prototype.
   */
  


  // var Element = require('global-object').Element;

  var Element = window.Element
  var proto = Element && Element.prototype || {};
  
  /**
   * Vendor function.
   */
  
  var vendor = proto.matches
    || proto.webkitMatchesSelector
    || proto.mozMatchesSelector
    || proto.msMatchesSelector
    || proto.oMatchesSelector;
  
  /**
   * Expose `match()`.
   */
  

  
  /**
   * Match `el` to `selector`.
   *
   * @param {Element} el
   * @param {String} selector
   * @return {Boolean}
   * @api public
   */
  
  function match(el, selector) {
    if (!el || el.nodeType !== 1) return false;
    if (vendor) return vendor.call(el, selector);
    var nodes = query.all(selector, el.parentNode);
    for (var i = 0; i < nodes.length; ++i) {
      if (nodes[i] == el) return true;
    }
    return false;
  }
  

export default match;