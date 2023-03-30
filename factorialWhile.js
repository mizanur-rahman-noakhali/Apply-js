// var i=1;
// factorial= 1;
// while(i<=10){
//     factorial= factorial*i;
//     console.log(i,factorial);
//     i++;
// }
function factorial(n){
var i=1;
factorial= 1;
while(i<=n){
    factorial= factorial*i;
    
    i++;
}
return factorial;
}
var result=factorial(5);
console.log(result);