//fetch api
fetch('todos/second.json').then(response =>{
    console.log('resolved : ', response);
    return response.json();
}).then(data=>{
    console.log('the actual data : ',data);
}).catch(err =>{
    console.log('rejected :', err);
});