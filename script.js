const getTodos = (resource) =>{

    return new Promise((resolve,reject) =>{
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange',()=>{
            if(request.readyState === 4 && request.status===200){
                const data = JSON.parse(request.responseText);
                resolve(data);
            } else if(request.readyState===4){
                reject(`finished but could not fetch data. Status [${request.status}]!!`);
            }
        });
    
        request.open('GET',resource);
        request.send();
    })
};
getTodos('todos/second.json').then(data=>{
    console.log('resolved : ',data);
}).catch(err=>{
    console.log('rejected : ',err);
}).finally(()=>{
    console.log('Kumagumo');
});