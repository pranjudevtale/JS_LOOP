var sum=0
for (var i=1;i<=10;i++){
    let n=require("readline-sync");
    var num=n.questionInt("enter the number:-");
    sum=sum+num
}
console.log(sum)