//async and await

const getTodos = async () => {
    const response = await fetch('todos/first.json');
    return response.json();
}

getTodos()
    .then(data=>console.log('resolved : ', data));

// //fetch api
// fetch('todos/second.json').then(response =>{
//     console.log('resolved : ', response);
//     return response.json();
// }).then(data=>{
//     console.log('the actual data : ',data);
// }).catch(err =>{
//     console.log('rejected :', err);
// });