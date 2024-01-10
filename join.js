Array.prototype.joinCustom = function (val=',') {
    let joinArr=""
  for (let i = 0; i < this.length; i++) {
    joinArr+=this[i]
    if(i!=this.length-1){
        joinArr+=val
    }

  }
 return joinArr;
};

const arr = [1, 4, 3, 4, 5];
console.log(arr.joinCustom('-'));