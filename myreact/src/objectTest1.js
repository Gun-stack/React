let user= {id :1, name : 'john',age:'20'}
let user2= user;
let user3 ={ ...user}

            // {id :2, name : 'sohn',age:'24'}
            // ,{id :3, name : 'bohn',age:'26'}

user.name='song';
console.log(user);
console.log(user2);
console.log(user3);

let user4= {...user, age:'40'};
console.log(user4);
