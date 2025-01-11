function checkEvenOdd(number) {
    if(number % 2 === 0){
        return("number is even number");
    } 
    else {
        return("number is odd number");
    }
}

console.log(checkEvenOdd(6));


const checkEvenOdd = (num) => {
    if (num % 2 === 0) {
      console.log(`${num} is even.`);
    } else {
      console.log(`${num} is odd.`);
    }
  };
  

  checkEvenOdd(5); 
  checkEvenOdd(8); 
   
