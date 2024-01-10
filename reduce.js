Array.prototype.reduceCustom = function (callbackfn, prevValue) {
    let initialValue=  prevValue!==undefined ? prevValue : this[0]
      for (let i =prevValue!==undefined ? 0 : 1; i<this.length; i++) {
        initialValue=callbackfn(initialValue,this[i],i,this);
      }
    return initialValue;
    };
    
    const res = [8, 6, 2, 4, 5].reduceCustom((prevValue,value, i, arr) => {
      return prevValue+value;
    });
    
    console.log(res);
    