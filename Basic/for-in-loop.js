const student={
    id:101,
    name:"John",
    age:20,
};
//it return the key we can get value from key
for(let key in student)
{
    console.log('key:',key,' value:',student[key]);
}
//it return the key
for(let i in student)
{
    console.log(i)
}