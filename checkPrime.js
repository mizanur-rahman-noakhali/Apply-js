// var n=128;
// for(i=2; i<n; i++){
// //console.log(i,n % i);
// if (n%i==0){
//     console.log( 'Not a prime number');
// break;
// }
// }
// console.log('This number prime');
function isPrime(n){
    for(i=2; i<n; i++){
        //console.log(i,n % i);
        if (n%i==0){
            return  'Not a prime number';
        
        }
        }
        return 'This number prime';
}
var result=isPrime(139);
console.log(result);
