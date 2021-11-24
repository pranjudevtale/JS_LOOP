var sum=0;
for (var i=50;i>=40;i--){
    var n=require("readline-sync")
    var num=n.questionInt("enter the number:-")
    sum=sum+num
}
console.log(sum)