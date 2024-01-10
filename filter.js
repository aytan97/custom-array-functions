Array.prototype.filterCustom = function (callbackfn) {
    let reverseArr=[]
    for (let i = 0; i<this.length; i++) {
      if(callbackfn(this[i], i, this))
      reverseArr.push(this[i]) 
    }
   return reverseArr
  };
  
  const res = [8, 6, 2, 4, 5].filterCustom((val, i, arr) => {
    return val > 5;
  });
  
  console.log(res);
  