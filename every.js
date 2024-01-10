Array.prototype.everyCustom = function (callbackfn) {
    for (let i = 0; i < this.length; i++) {
      if(!callbackfn(this[i], i, this))
        return false
    }
    return true
  };
  
  const res = [4, 6, 2, 4, 5].everyCustom((val, i, arr) => {
    return val > 3;
  });
  
  console.log(res);
  