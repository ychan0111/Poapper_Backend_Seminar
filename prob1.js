var res = '';

for (var i = 1; i<10;i++){
    for (var j = 1; j<10; j++){
        res += i + 'x' + j + '=' + i*j + '\n';
    }
}
console.log(res);