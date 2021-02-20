const student = [
    { id:20, name:"Sakil"},
    { id:21, name:"Eleas"},
    {id:22, name:"Dudro"},
    {id:22, name:"Manik"},
];

const names = student.map( n => n.name);
console.log(names);

const ids = student.filter( i => i.id>21);
console.log(ids);