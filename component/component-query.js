function one(selector, el) {
    return el.querySelector(selector);
  }

  function all(selector, el){
    el = el || document;
    return el.querySelectorAll(selector);
  };

//   function engine(obj) {
//     if (!obj.one) throw new Error('.one callback required');
//     if (!obj.all) throw new Error('.all callback required');
//     one = obj.one;
//     exports.all = obj.all;
//     return exports;
//   }
//   exports = module.exports = function(selector, el){
//     el = el || document;
//     return one(selector, el);
//   };
  
  export default {
      one: one,
      all: all,
      // engine: engine
  }

 
  