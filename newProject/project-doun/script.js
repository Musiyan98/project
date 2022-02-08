const encrypt = (text) => {
    let i = 0;
    let result = '';
    while (i < text.length) {
        if (i % 2 !== 0) {
            result = `${result}`;
            i +=1;
            } else if (text[i+1] === undefined ){
               result = `${result}${text[i]}`;
               return result;
            } else {               
                result = `${result}${text[i+1]}${text[i]}`;
            i += 1;
        }
         
    }
    return result;
      }