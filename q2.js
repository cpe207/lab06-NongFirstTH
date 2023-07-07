const axios = require("axios");

const getTodo = async (todoId) => {
  try{
    const resp = await axios.get("https://jsonplaceholder.typicode.com/todos/"+todoId)
    const resp2 = await axios.get("https://jsonplaceholder.typicode.com/users/"+resp.data.userId)
    const result = {}
    const owner = resp2.data.name
    const title = resp.data.title
    const completed = resp.data.completed
    result.owner = owner
    result.title = title
    result.completed = completed
  return  result
  }catch (error){
    return 'INVALID TODO ID'
   }
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

module.exports = getTodo;
