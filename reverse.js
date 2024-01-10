Array.prototype.reverseCustom = function () {
    for (let i = 0; i < Math.floor(this.length / 2); i++) {
      const temp = this[i];
      this[i] = this[this.length - 1 - i];
      this[this.length - 1 - i] = temp;
    }
  };
  
  const arr=[1,2,3,4,5]
  arr.reverseCustom();
  console.log(arr)
  
  