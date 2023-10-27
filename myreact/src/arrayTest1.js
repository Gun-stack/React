// let arr = [10,20,30,40];
// console.log(arr.length);
// // delete arr[3];
// arr.splice(1,1);// 삭제 첫번쨰배열에 한개의 요소삭제
// console.log(arr);
// console.log(arr.length);

// arr.splice(1,2,100,200);
// console.log(arr);
// console.log(arr.length);

// arr.splice(2,0,300,400);
// console.log(arr);
// console.log(arr.length) ;

// let narr=[10,20,30,40,50]
// let subarr= narr.slice(2,5 );
// console.log(subarr);
// console.log(subarr.length);

// let arr2=[1,2];
// let totarr= arr2.concat(3,4);
// console.log(arr2);
// console.log(totarr);

// let totarr2 = arr2.concat([3,4]);
// console.log(totarr2);
// let arr3=[10,20];
// let totarr3= arr2.concat(arr3);
// console.log(totarr3);
// let totarr4 = arr2.concat(3,4,[5,6,],arr3);
// console.log(totarr4);


let fruits = ['banana'];
let arr =fruits;

fruits.push('orange');
console.log(fruits);
console.log(arr);
//전개 연산자 
let carr= [...fruits];
fruits.push('apple');
console.log(carr);



