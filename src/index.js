module.exports = function check(str, bracketsConfig) {

  let tempFlag = true;
    while(tempFlag) {
      tempFlag = false;
      for (let i = 0; i < bracketsConfig.length; i++) {
        let spliter = bracketsConfig[i][0] + bracketsConfig[i][1]; // '()' for example
        let splitedStrArray = str.split(spliter);
        
        
        if(splitedStrArray.length > 1) {  // splitedStrArray[] always will have atleast one element
          tempFlag = true;                // even if we .split last pair of brackets - it'll be [''] element
          str = splitedStrArray.join(''); // and str here will be '' if splitedStrArray[] = ['']
        }
      } 
    }
                                          
  return (str) ? false : true;            // if all brackets will have a pair str will be '' == false
}
