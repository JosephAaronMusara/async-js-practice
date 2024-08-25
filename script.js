//async and await

const getTodos = async () => {
    const response = await fetch('todos/first.json');
    if(response.status !== 200){
        throw new Error('Failed to fetch data from resource');
    }
    const data =await response.json();
    return data;
}

getTodos()
    .then(data => console.log('resolved : ', data))
    .catch(err => console.log('rejected : ',err.message));

// //fetch api
// fetch('todos/second.json').then(response =>{
//     console.log('resolved : ', response);
//     return response.json();
// }).then(data=>{
//     console.log('the actual data : ',data);
// }).catch(err =>{
//     console.log('rejected :', err);
// });