function fibo(n){
     var arrf = [0,1];
     
     for (i = 2; i<= n; i++){
        arrf[i] = arrf[i-1]+arrf[i-2];
     }
    return arrf[n];
}

console.log(fibo(12));