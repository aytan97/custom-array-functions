Array.prototype.findCustom = function (callbackfn) {
    for (let i = 0; i < this.length; i++) {
      if (true == callbackfn(this[i], i, this)) {
        return i;
      }
    }
    return -1;
  };
  
  const res = [0, 2, 3, 4, 5].findCustom((val, i, arr) => {
    return val > 2;
  });
  
  console.log(res);