module.exports = function check(str, bracketsConfig) {
   let config = [];
   for(let i=0;i<bracketsConfig.length;i++) {
      config.push(bracketsConfig[i].join(''))
   }
   for(let i=0; i<config.length;i++) {
      if(str.replace(config[i], '').length!==str.length) {
         str = str.replace(config[i], '');
         i=-1;
      }
   }
   return str.length==0 ? true : false
   }
