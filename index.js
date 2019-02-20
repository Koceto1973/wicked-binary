var matrix32 = [];
var bits = 10;
var equalies = 0; // equal zeroes and ones
var luckies = 0; // m ones in first k bits
var k = 5 // <= bits
var m = 1 // <= bits/2 , <= k

var matrixInit = function (){
  matrix32 = [];

  for (i=0; i<bits; i++){
    matrix32.push(0);
  }
}

var matrixShift = function (){
  for (i=bits-1;i>=0;i--){
    if(matrix32[i]===0){
      matrix32[i]=1;
      return true;
    } else {
      matrix32[i]=0;
      continue;
    }
  }
  return false;
}

var equaliesCheck = function (){
  var zeroes = 0;
  
  for (i=0; i<bits; i++){    
    if(matrix32[i]===0){
      zeroes += 1;
    }
  }

  if (zeroes===bits/2){
    return true;
  }
  return false;
}

var luckiesCheck = function(k,m){
  var check = 0;
  for (i=0; i<k; i++){
    if(matrix32[i]===1){ check += 1; }
  }
  
  if (check===m){ 
    return true;
  }
  return false;
}

var fact = function(x){
  if (x===1 || x===0) { 
    return 1; 
  } else {
    return x*fact(x-1);
  }
}

var comb = function(y,z){
  return fact(z)/(fact(y)*fact(z-y));
}

/////////////////////////

matrixInit(32);

do {
  if(equaliesCheck()){
    equalies += 1;
    if(luckiesCheck(k,m)){
      luckies += 1;
    }
  }
} while ( matrixShift());

console.log('equalies :',equalies,comb(bits/2,bits));
console.log('luckies :',luckies,comb(m,k)*comb(bits/2-m,bits-k));
console.log('total outcomes :',Math.pow(2,bits));
console.log('probability :',100*comb(m,k)*comb(bits/2-m,bits-k)/Math.pow(2,bits),'%');



