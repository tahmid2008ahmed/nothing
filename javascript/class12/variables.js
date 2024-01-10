let weather = 30 ;

if ( weather <= 25 ) {
    console.log("cold");
} else {
    console.log("hot")
}
    
    
var age = 55 ;

if ( age <= 25 ) {
    console.log("teenager");
} else {
    console.log("Not a teenager");
}   

let math =  78 ;
let english =  81 ;
let physics =  89 ;
let average = (math+english+physics) / 3;

// full mark
console.log( "full mark =", math+english+physics);

// average
console.log( "average mark =",average);

if (average >= 90 ) {
    console.log("grade A")
} else if (average >= 80 ) {
    console.log("grade B")
} else if (average >= 70 ) {
    console.log("grade C")
} else if (average >= 60 ) {
    console.log("grade D")
} else if (average >= 40 ) {
    console.log("grade E")
} else {
    console.log("grade F")
}