// create triagle function 
let output = ""
function triangle(num){
  for(let i=0; i<num;i++){
     console.log(output += "#");
  }
}
console.log("print out triange(num) function");
triangle(7);

// create fizzbuzz function 
function fizzbuzz(n){
  for(let i=1; i <= n; i++){
  if(i%3==0 && i%5==0){
    console.log(i + " fizzbuzz");
  }else if(i%3==0){
    console.log(i + " fizz");
  }else if(i%5==0){
    console.log(i + " buzz");
  }else {
    console.log(i);
  }
}
}
console.log("print out fizzbuzz(n) function");
fizzbuzz(50);

//create chess function 
function chess(width, height){
  let result = "";
  for(let h=0; h < height; h++){
    for(let w=0;w < width; w++){
      if((w+h)%2 ==0 ){
        result += " ";
      }else {
        result += "[]";
      }
    }
    result += "\n";
  }
  console.log(result);
}
console.log("print out chess(width,height) function");
chess(8,8);

// create min function 
function min(a,b){
  if(a<b){
    return a;
  }else {
    return b;
  }
}
console.log("print out min(a,b) function");
console.log(min(4,8));
console.log(min(2,1));
console.log(min(-2,1));

// Even Odd function 
function isEven(n){
  if(n%2 == 0){
    return true;
  }else if(n%2 != 0){
    return false;
  }else if(n < 0){
    return isEven(-n);
  }else{
    return isEven(n-2);
  }
}

console.log("print out isEven(n) function");
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));

// create countBs function using countChar function
function countBs(text){
 return countChar(text,"B");
}
// create countChar function
function countChar(text, char){
    let count = 0;
  for(let i=0; i<text.length; i++){
    if(text[i] == char){
      count++;
    }
  }
    return count;
}
console.log("print out countBs(text) using countChar(text,char) function");
console.log(countBs("BeeBooBooBbb"));
console.log(countChar("KahdkKK","a"));
