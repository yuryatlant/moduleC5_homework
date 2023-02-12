const jsonObj = `
{
 "list": [
  {
   "name": "Petr",
   "age": "20",
   "prof": "mechanic"
  },
  {
   "name": "Vova",
   "age": "60",
   "prof": "pilot"
  }
 ]
}
`;

const data = JSON.parse(jsonObj);
const ls = data.list;

const result = [
 {
   name : ls[0].name,
   age : ls[0].age,
   prof: ls[0].prof
 },
 {
   name : ls[1].name,
   age : ls[1].age,
   prof: ls[1].prof
 }];

 const rl = {list : result}

 console.log(rl)
 console.log(result[0])
 console.log(result[1])