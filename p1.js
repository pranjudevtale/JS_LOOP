// var i=1
// while (i<=100){
//     console.log("pranju")
//     i=i+1
// }

// var a=1
// while (a<=100){
//     console.log(a*a)
//     a=a+1
// }

let n=require("readline-sync")
var num=n.questionInt("enter the number ")
var k=65
var i=1
while (i<num){
    var j=1
    str=" "
    while (j<i+1){
        var a=Letter(k)
        str=str+(" ",a+" ")
        j=j+1
        k=k+1
    }
    console.log(str)
    i=i+1
}

