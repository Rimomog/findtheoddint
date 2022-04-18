function findOdd(A) {
    //happy coding!
    let counter = {}
    // Creates an object with the number in the array as the key and its value as the number of times it
    // appears in the array.
    for( let i = 0; i < A.length; i++){
      let value = A[i];
      counter[value] = counter[value] ? counter[value] +1 : 1;
    }
    
    const values = Object.values(counter); // sets an array of the values of the keys in the object
    let odd;
    // gets the odd value
    values.forEach( e => {
      if( e % 2 !== 0) {
         odd = e;
      }
    })
    // finds the key whose value is odd
    for(let key in counter){
      if(counter[key] == odd) {
        return Number(key);
        }
    }
}
  