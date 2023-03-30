function fibonacci(n){
    if(n == 0){         //stoping condition
        return 0;
    }
    if(n == 1){         //stoping condition
        return 1;
    }
    else{

        return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result=fibonacci(10);
console.log(result);