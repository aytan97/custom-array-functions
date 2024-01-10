Array.prototype.someCustom = function (callbackfn) {
    for (let i = 0; i < this.length; i++) {
      if(callbackfn(this[i], i, this))
        return true
    }
    return false
  };
  
  const res = [4, 6, 2, 4, 5].someCustom((val, i, arr) => {
    return val > 5;
  });
  
  console.log(res);