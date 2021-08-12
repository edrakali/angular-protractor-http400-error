export const sleep = async function(milliseconds: number){
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve(null);
  
        }, milliseconds);
    })
  }
  