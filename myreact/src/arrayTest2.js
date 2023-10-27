let arr=['사과','오렌지','딸기'];
for (let i=0 ; i <arr.length; i++){
    console.log(arr[i]);  
}

for(let f of arr){
    console.log(f);
}

for (const idx in arr) {
    console.log(arr[idx]);
}
let info = {name :'kim',age:30,nickname:'KK'};
for (let key in info) {
    console.log(key,info[key]);



}