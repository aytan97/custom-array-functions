Array.prototype.includesCustom = function (val) {
    for (let i = 0; i < this.length; i++) {
      if (this[i] === val)
      {
          return true;
      }
  
    }
    return false;
  };
  
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.includesCustom(7));