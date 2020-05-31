/*taskl*/
let arr1 = [2, 3, 4, 5];
let res1 = 1;
for(let i=0; i < arr1.length; i++){
    res1 = res1 * arr1[i];
}
alert(res1); 

let arr2 = [2, 3, 4, 5];
let res2 = 1;
let i = 0;
while(i < arr2.length) {
    res2 = res2 * arr2[i];
    i++;
}
alert(res2);

/*task2*/
document.write("Sample Output:"); 
for(let i = 0; i <= 15; i++) {
    if(i%2 == 0){
        document.write("<div>" + i + " is even" + "<\/div>");
    } else if (i%2 !== 0) {
        document.write(i + " is odd");
    }
}

/*task3*/
const randomArr = [];
function randArray(k){
	for(let i = 0; i <= k; i++) {
        const rand = 1 - 0.5 + Math.random() * (500 - 1 + 1);
        randomArr.push(Math.round(rand));
   }
}
randArray(4);
document.write("<div>" + "Sample Output:" + "<\/div>" + "<div>" + randomArr + "<\/div>");

/*task4*/
function raiseToDegree(a,b){
    a = Number(prompt("enter your number", "3"));
    b = Number(prompt("enter degree", "3"));
    res = a;
    
    if(Number.isInteger(a) && Number.isInteger(b)){
    for(let i = 1; i < b; i++) {
        res = res * a;
    }
    return alert(res);
    }
    else return alert("data is not correct");

}
raiseToDegree();

/*task5*/
    function findMin(minArg){
        if(Number.isInteger(minArg)) {
            return alert(Math.min(...arguments));
        } else alert("Ведіть ціле число");
    }
    findMin(2,5,4, 1,333);

/*task6*/
function findUnique(arr) {
    for(let i = 0, len = arr.length; i < len; i++) {
     for(let j = 0, len = arr.length; j < len; j++) {
      if ( i !== j && arr[i] === arr[j]) {
          return false;
      }
     } 
    }
    return true;
  }
  alert(findUnique([1, 2, 3, 5, 3]));
  alert(findUnique([1, 2, 3, 5, 11])); 

  /*task7*/
  function lastElem(arr, x=1){
	return arr.slice(-x);
}
console.log(lastElem([3, 4, 10, -5])); 

/*task8*/
function toCapitalize(str) {
	const splitArr = str.split(' ');
  splitArr.forEach((st, i) => splitArr[i] = st.charAt(0).toUpperCase() + st.slice(1))
  return splitArr.join(" ");
} 
alert(toCapitalize("ghghvh hvhvh hvh"));