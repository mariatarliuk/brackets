module.exports = function check(str, bracketsConfig) {
   let configArray = [];
   for(let i=0;i<bracketsConfig.length;i++) {
      configArray.push(bracketsConfig[i].join(''))
   }
   for(let i=0; i<configArray.length;i++) {
      if(str.replace(configArray[i], '').length!==str.length) {
         str = str.replace(configArray[i], '');
         i=-1;
      }
   }
   return str.length==0 ? true : false
   }
