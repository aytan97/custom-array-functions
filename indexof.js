Array.prototype.indexOfCustom = function (val) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === val)
      {
          return i;
      }
  
    }
    return -1;
  };
  
  const arr = [1, 4, 3, 4, 5];
  console.log(arr.indexOfCustom(4));
  