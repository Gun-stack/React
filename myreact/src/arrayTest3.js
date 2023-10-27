let arr = ['아이템','인덱스','배열'];

arr.forEach(function(item,index,array) {
    console.log(`${index},${item},${array}`);
});

let users = [{id :1, name : 'john',age:'20'}
            ,{id :2, name : 'sohn',age:'24'}
            ,{id :3, name : 'bohn',age:'26'}
            ,{id :4, name : 'fohn',age:'42'}
            ,{id :5, name : 'gohn',age:'32'}
]
//find 조건 만족하는거 하나찾음
let user = users.find(function(item)
{           
    return item.id==1;
})
console.log(user);

//filter 조건 만족하는거 여러개 배열로 찾음 
let user2 = users.filter(function(item)
{           
    return item.name =='bohn';
})
console.log(user2);

let user3 = users.filter(function(item){
    return item.age >='20'&& item.age<='30';
})
console.log(user3);

let usersp = users.map(function(item){
    item.age++;
    return item;
})
console.log(usersp);

users.sort(function(item1,item2){
    return item2.age-item1.age;
})

console.log(users);

users.sort(function(item1,item2){
    return item1.name.localeCompare(item2.name);
})
console.log(users);
